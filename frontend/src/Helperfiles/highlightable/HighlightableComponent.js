import React, { useState } from 'react';
import Highlightable, { Node } from 'highlightable'; // Make sure to import the 'highlightable' library

function HighlightableComponent() {
  const [ranges, setRanges] = useState([]);

  const onTextHighlightedCallback = (range) => {
    // Handle the highlighted text here
    setRanges([...ranges, range]);
  };

  const onMouseOverHighlightedWordCallback = (range) => {
    // Handle mouseover event on highlighted text here
    // You can add tooltip logic here
  };

  const resetHighlights = () => {
    // Function to reset highlights
    setRanges([]);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <div style={{width:'80%',height:'80%',backgroundColor:'#C5FFF8',marginTop:'20px',padding:'5px',border:'2px solid black'}}>
      <Highlightable
        ranges={ranges}
        enabled={true}
        onTextHighlighted={onTextHighlightedCallback}
        onMouseOverHighlightedWord={onMouseOverHighlightedWordCallback}
        highlightStyle={{
          backgroundColor: '#ffcc80',
        }}
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae magna lacus. Sed rhoncus tortor eget venenatis faucibus. Vivamus quis nunc vel eros volutpat auctor. Suspendisse sit amet lorem tristique lectus hendrerit aliquet. Aliquam erat volutpat. Vivamus malesuada, neque at consectetur semper, nibh urna ullamcorper metus, in dapibus arcu massa feugiat erat. Nullam hendrerit malesuada dictum. Nullam mattis orci diam, eu accumsan est maximus quis. Cras mauris nibh, bibendum in pharetra vitae, porttitor at ante. Duis pharetra elit ante, ut feugiat nibh imperdiet eget. Aenean at leo consectetur, sodales sem sit amet, consectetur massa. Ut blandit erat et turpis vestibulum euismod. Cras vitae molestie libero, vel gravida risus. Curabitur dapibus risus eu justo maximus, efficitur blandit leo porta. Donec dignissim felis ac turpis pharetra lobortis. Sed quis vehicula nulla.`}
      />
      </div>

      <button style={{marginTop:'10px',padding:'10px',backgroundColor:'#ECF4D6',border:'2px solid black',borderRadius:'10px'}} onClick={resetHighlights}>Reset Highlights</button>
    </div>
  );
}

export default HighlightableComponent;
