const inputObject = {
  summary: 'User Signup',
  description: 'Register a new user',
  tags: 'Auth',
  method: 'post',
  path: '/api/auth/signup',
  responses: {
    200: {
      "statusCode": 200,
      "message": "Verification email was successfully sent.",
      "success": true,
      "data": {
          "first_name": "John",
          "last_name": "Doe",
          "email": "john.doe@example.com",
          "password": "12345678",
          "email_verification_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzAxMTUxOTM0LCJleHAiOjE3MDExNTU1MzR9.z4etFaoGV2Xn51lyxN1C5i-zVXC8zo54xwaotn9cOfc"
      }
    }
  },
};

function generateSwaggerDoc(inputObject) {
  const swaggerDoc = {
    paths: {},
    components: {
      schemas: {},
    },
  };

  const { summary, description, tags, requestBody, method, path, responses } = inputObject;

  const pathObj = {
    [method]: {
      tags: [tags],
      summary: summary,
      description: description,
      responses: {},
    },
  };

  Object.keys(responses).forEach((responseCode) => {
    const response = responses[responseCode];
    const responseObj = {
      description: response.message,
    };

    if (response.success !== undefined) {
      responseObj.content = {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              statusCode: {
                type: 'number',
                example: response.statusCode,
              },
              message: {
                type: 'string',
                example: response.message,
              },
              success: {
                type: 'boolean',
                example: response.success,
              },
            },
          },
        },
      };
    }

    pathObj[method].responses[responseCode] = responseObj;
  });

  // Add the path to the Swagger document
  swaggerDoc.paths[path] = pathObj;

  // Generate the DTO schema if requestBody exists
  if (requestBody) {
    const dtoSchema = generateDTOSchema(requestBody, 'loginRequestDTO');
    swaggerDoc.components.schemas.loginRequestDTO = dtoSchema;
  }

  return swaggerDoc;
}
function generateDTOSchema(obj, refName) {
  const schema = {
    type: 'object',
    properties: {},
  };

  Object.keys(obj).forEach((key) => {
    const property = obj[key];
    const type = Array.isArray(property) ? 'array' : typeof property;

    if (type === 'object' && property !== null) {
      const ref = `${refName}_${key}_DTO`;
      schema.properties[key] = {
        $ref: `#/components/schemas/${ref}`,
      };
      const nestedSchema = generateDTOSchema(property, ref);
      schema.properties[ref] = nestedSchema;
    } else {
      schema.properties[key] = {
        type: type,
        example: property,
      };
    }
  });

  return schema;
}

const swaggerDoc = generateSwaggerDoc(inputObject);
console.log(JSON.stringify(swaggerDoc, null, 2));
