import React, { useState, useEffect } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import TitleComponent from '../styled-components/TitleComponent';
import HorizontalLine from '../styled-components/HorizontalLine';

const StickyNotes = () => {
  const [notes, setNotes] = useState([
    // Initialize with your default notes if needed
    // { color: '#ff0000', text: 'Sample Note 1' },
    // { color: '#00ff00', text: 'Sample Note 2' },
  ]);

  const handleBeforeChange = (type, payload, currentNotes) => {
    // Perform any necessary modifications before the state changes
    return payload;
  };

  const handleChange = (type, payload, currentNotes) => {
    // Handle the state change or perform additional actions
    console.log('Notes updated:', currentNotes);
  };

  useEffect(() => {
    // You can perform any side effects here based on the component's lifecycle
    // For example, fetching initial notes from an API
    // fetchData().then(data => setNotes(data));
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
    <TitleComponent>React Sticky Notes</TitleComponent>
    <HorizontalLine/>
        <ReactStickyNotes
      notes={notes}
      onBeforeChange={handleBeforeChange}
      onChange={handleChange}
      // Add other props as needed
    />
    </>

  );
};

export default StickyNotes;
