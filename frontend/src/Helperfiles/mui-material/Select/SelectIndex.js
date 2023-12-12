import React from 'react';
import BasicSelect from './BasicSelect';
import GroupedSelect from './GroupedSelect';


const SelectIndex = () => {
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
      <h1 style={titleStyle}>Select</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>Basic Select</h2>
          <BasicSelect />
        </div>
        <div style={componentStyle}>
          <h2>Grouped Select</h2>
          <GroupedSelect />
        </div>
      </div>
    </div>
  );
};

export default SelectIndex;
