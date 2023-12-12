import React from 'react';
import ComboBox from './ComboBox';
import CountrySelect from './CountrySelect';
import Grouped from './Grouped';
import Tags from './Tags';
import FixedTags from './FixedTags';
import CheckboxesTags from './CheckboxesTags';

const AutocompleteIndex = () => {
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
    maxWidth: '600px',
  };

  return (
    <div style={mainContainerStyle}>
      <h1 style={titleStyle}>Autocomplete</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>ComboBox</h2>
          <ComboBox />
        </div>
        <div style={componentStyle}>
          <h2>CountrySelect</h2>
          <CountrySelect />
        </div>
        <div style={componentStyle}>
          <h2>Grouped</h2>
          <Grouped />
        </div>
        <div style={componentStyle}>
          <h2>FixedTags</h2>
          <FixedTags />
        </div>
        <div style={componentStyle}>
          <h2>Check boxes Tags</h2>
          <CheckboxesTags />
        </div>
        <div style={componentStyle}>
          <h2>Tags</h2>
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default AutocompleteIndex;
