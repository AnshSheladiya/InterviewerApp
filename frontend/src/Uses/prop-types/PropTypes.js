import { CopyBlock, dracula } from "react-code-blocks";
const code2 = `// PropTypes.js

import React from 'react';
import PropTypes from 'prop-types';

const PropTypes = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
};

// Define propTypes for the component
MyComponent.propTypes = {
  title: PropTypes.string.isRequired, // title prop is a required string
  description: PropTypes.string, // description prop is an optional string
  onClick: PropTypes.func.isRequired, // onClick prop is a required function
};

export default PropTypes;

//===>Usage<===
//By defining propTypes for your components, you provide clear documentation for other developers who may use your components. 
//Additionally, if someone tries to use your component with props of the wrong type, React will issue a warning in the console during development, helping to catch potential bugs early.
//Remember that PropTypes are mainly for development purposes, and they are checked in development mode only. 
//They are not meant for production, so it's a good practice to use them during development and remove them in the production build for performance reasons.
`;
const language = "javascript";
const showLineNumbers = true;

function PropTypes() {
  return (
    <>
      <div className="m-3">
        <CopyBlock
          text={code2}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={dracula}
          codeBlock
        />
      </div>
    </>
  );
}

export default PropTypes;
