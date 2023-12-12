import { CopyBlock, dracula } from "react-code-blocks";
const code2 = `// StyledComponent.js

import React from 'react';
import styled from 'styled-components';

// Define a styled component with styles
const StyledDiv = styled.div
  background-color: lightblue;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
;

const MyStyledComponent = () => {
  return (
    <StyledDiv>
      <h1>Hello, Styled Components!</h1>
      <p>This component has some styled styles.</p>
    </StyledDiv>
  );
};

export default MyStyledComponent;

`;
const language = "javascript";
const showLineNumbers = true;

function StyledComponent() {
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

export default StyledComponent;
