import React from 'react';
import BasicList from './BasicList';
import FolderList from './FolderList';
import InteractiveList from './InteractiveList';
import NestedList from './NestedList';
import AlignItemsList from './AlignItemsList';
import CheckboxList from './CheckboxList';
import SwitchListSecondary from './SwitchListSecondary';
import PinnedSubheaderList from './PinnedSubheaderList';
import VirtualizedList from './VirtualizedList';
import CustomizedList from './CustomizedList';


const ListsIndex = () => {
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
      <h1 style={titleStyle}>Lists</h1>
      <div style={containerStyle}>
        <div style={componentStyle}>
          <h2>Basic List</h2>
          <BasicList />
        </div>
        <div style={componentStyle}>
          <h2>Folder List</h2>
          <FolderList />
        </div>
        <div style={componentStyle}>
          <h2>Interactive List</h2>
          <InteractiveList />
        </div>
        <div style={componentStyle}>
          <h2>Nested List</h2>
          <NestedList />
        </div>
        <div style={componentStyle}>
          <h2>AlignItems List</h2>
          <AlignItemsList />
        </div>
        <div style={componentStyle}>
          <h2>Checkbox List</h2>
          <CheckboxList />
        </div>
        <div style={componentStyle}>
          <h2>SwitchList Secondary</h2>
          <SwitchListSecondary />
        </div>
        <div style={componentStyle}>
          <h2>PinnedSubheader List</h2>
          <PinnedSubheaderList />
        </div>
        <div style={componentStyle}>
          <h2>Virtualized List</h2>
          <VirtualizedList />
        </div>
        <div style={componentStyle}>
          <h2>Customized List</h2>
          <CustomizedList />
        </div>
      </div>
    </div>
  );
};

export default ListsIndex;

