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
