import React, { useState } from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";

function CopyToClipboardUsage() {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  const code = `
  import React, { useState } from 'react';
  import { CopyToClipboard } from 'react-copy-to-clipboard';
  
  const CopyToClipboardButton = ({ text, children, onSuccess, onError }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      setCopied(true);
      if (onSuccess) {
        onSuccess();
      }
    };
  
    const handleCopyError = () => {
      if (onError) {
        onError();
      }
    };
  
    return (
      <CopyToClipboard text={text} onCopy={handleCopy} options={{ format: 'text/plain' }}>
        {React.cloneElement(children, {
          onClick: handleCopyError,
        })}
      </CopyToClipboard>
    );
  };
  
  export default CopyToClipboardButton;
  

  `;

  const handleSuccess = () => {
    setCopied(true);
  };

  const handleError = () => {
    // Handle copy error here
  };

  return (
    <div>
      <div>
        <TitleComponent>Copy To Clipboard </TitleComponent>
      </div>
      <CenterScreen>
        {" "}
        <CopyToClipboardButton
          text={code}
          onSuccess={handleSuccess}
          onError={handleError}
        >
          <button
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#ECF4D6",
              border: "2px solid black",
              borderRadius: "10px",
            }}
          >
            Copy to clipboard with button
          </button>
        </CopyToClipboardButton>
        {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
      </CenterScreen>

      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CopyToClipboardUsage;
