import React from 'react';
import BadgeMax from './BadgeMax';
import BadgeOverlap from './BadgeOverlap';
import CustomizedBadges from './CustomizedBadges';
import SimpleBadge from './SimpleBadge';


const BadgeIndex = () => {
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
      <h1 style={titleStyle}>Badge</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>Simple Badge</h2>
          <SimpleBadge />
        </div>
        <div style={componentStyle}>
          <h2>Customized Badges</h2>
          <CustomizedBadges />
        </div>
        <div style={componentStyle}>
          <h2>Badge Overlap</h2>
          <BadgeOverlap />
        </div>
        <div style={componentStyle}>
          <h2>Badge Max</h2>
          <BadgeMax />
        </div>
      </div>
    </div>
  );
};

export default BadgeIndex;

