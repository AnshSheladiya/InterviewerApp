
import React from 'react';
import BasicButtons from './SimpleButtons';
import TextButtons from './TextButtons';
import ColorButtons from './ColorButtons';
import IconButtons from './IconButtons';
import InputFileUpload from './InputFileUpload';

const ButtonIndex = () => {
  const mainContainerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: '20px 0', // Improved spacing
    textAlign: 'center', // Center the text
    textTransform: 'uppercase', // Uppercase text
    borderBottom: '2px solid #333', // Add an underline
    paddingBottom: '10px', // Space under the underline
  };

  const componentStyle = {
    margin: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  };

  return (
    <div style={mainContainerStyle}>
      <h1 style={titleStyle}>Button</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>Basic Buttons</h2>
          <BasicButtons />
        </div>
        <div style={componentStyle}>
          <h2>Text Buttons</h2>
          <TextButtons />
        </div>
        <div style={componentStyle}>
          <h2>Color Buttons</h2>
          <ColorButtons />
        </div>
        <div style={componentStyle}>
          <h2>Icons Buttons</h2>
          <IconButtons />
        </div>
        <div style={componentStyle}>
          <h2>File upload Button</h2>
          <InputFileUpload />
        </div>
      </div>
    </div>
  );
};

export default ButtonIndex;
