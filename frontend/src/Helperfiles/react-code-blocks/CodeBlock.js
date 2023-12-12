import { CodeBlock, CopyBlock, dracula, nord } from "react-code-blocks";
import TitleComponent from "../styled-components/TitleComponent";
const code = "const greeting = 'Hello, World!';";

const code2 = `import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const code = "const greeting = 'Hello, World!';";
const language = "javascript";
const showLineNumbers = true;

function CodeBlockComponent() {
  return (
    <>
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        codeBlock
      />
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        codeBlock
      />
    </>
  );
}

export default CodeBlockComponent;
`;
const language = "javascript";
const showLineNumbers = true;

function CodeBlockComponent() {
  return (
    <>
      <TitleComponent>CodeBlock Component</TitleComponent>
      <div className="m-3">
        <CodeBlock
          text={code}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={dracula}
          codeBlock
        />
      </div>
      <div className="m-3 mb-5">
        <CopyBlock
          text={code2}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={nord}
          codeBlock
        />
      </div>
    </>
  );
}

export default CodeBlockComponent;
