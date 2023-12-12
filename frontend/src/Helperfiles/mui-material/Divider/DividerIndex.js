

import React from 'react';
import ListDividers from './ListDividers';
import InsetDividers from './InsetDividers';
import SubheaderDividers from './SubheaderDividers';
import MiddleDividers from './MiddleDividers';


const DividerIndex = () => {
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
      <h1 style={titleStyle}>Divider</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>List Dividers</h2>
          <ListDividers />
        </div>
        <div style={componentStyle}>
          <h2>Inset Dividers</h2>
          <InsetDividers />
        </div>
        <div style={componentStyle}>
          <h2>Subheader Dividers</h2>
          <SubheaderDividers />
        </div>
        <div style={componentStyle}>
          <h2>Middle Dividers</h2>
          <MiddleDividers />
        </div>
      </div>
    </div>
  );
};

export default DividerIndex;
