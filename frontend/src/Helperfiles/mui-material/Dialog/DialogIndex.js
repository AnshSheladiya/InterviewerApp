import React from 'react';
import SimpleDialogDemo from './SimpleDialog';
import AlertDialog from './AlertDialog';
import FullScreenDialog from './FullScreenDialog';
import MaxWidthDialog from './MaxWidthDialog';
import ConfirmationDialog from './ConfirmationDialog';
import CookiesBanner from './CookiesBanner';
import DraggableDialog from './DraggableDialog';
import ScrollDialog from './ScrollDialog';


const DialogIndex = () => {
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
      <h1 style={titleStyle}>Dialog</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>SimpleDialog</h2>
          <SimpleDialogDemo />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>AlertDialog</h2>
          <AlertDialog />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>FullScreenDialog</h2>
          <FullScreenDialog />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>MaxWidthDialog</h2>
          <MaxWidthDialog />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>ConfirmationDialog</h2>
          <ConfirmationDialog />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>CookiesBanner</h2>
          <CookiesBanner />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>DraggableDialog</h2>
          <DraggableDialog />
        </div>
      </div>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>ScrollDialog</h2>
          <ScrollDialog />
        </div>
      </div>
    </div>
  );
};

export default DialogIndex;
