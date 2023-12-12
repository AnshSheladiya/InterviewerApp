
const inputObject = {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "password": "12345678",
    "confirmPassword": "12345678"
  }

function dto(inputObject) {
  const swaggerDTO = {
    type: "object",
    properties: {}
  };

  Object.keys(inputObject).forEach((key) => {
    const property = inputObject[key];
    swaggerDTO.properties[key] = {
      type: typeof property,
      example: property
    };
  });

  console.log("\n\n\n====DTO====\n\n\n"+JSON.stringify(swaggerDTO, null, 2)+"\n\n\n");
}

dto(inputObject);
