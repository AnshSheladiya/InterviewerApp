import React from 'react';
import Circular from './Circular';
import CircularIntegration from './CircularIntegration';
import CircularWithValueLabel from './CircularProgressWithLabel';
import LinearIndeterminate from './Linear';
import LinearWithValueLabel from './LinearWithValueLabel';
import LinearBuffer from './LinearBuffer';


const ProgressIndex = () => {
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
      <h1 style={titleStyle}>Progress</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>Circular</h2>
          <Circular />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>CircularIntegration</h2>
          <CircularIntegration />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>CircularProgressWithLabel</h2>
          <CircularWithValueLabel />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>LinearIndeterminate</h2>
          <LinearIndeterminate />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>LinearBuffer</h2>
          <LinearBuffer />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>LinearWithValueLabel</h2>
          <LinearWithValueLabel />
        </div>
      </div>
    </div>
  );
};

export default ProgressIndex;
