import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import DummyComponent from './DummyComponent';

function MyResizableComponent() {
  // Log the dimensions when MyResizableComponent is rendered
  console.log('MyResizableComponent rendered');

  return (
    <AutoSizer>
      {({ height, width }) => {
        // Log the actual dimensions obtained from AutoSizer
        console.log('Actual Dimensions - Height:', height, 'Width:', width);

        return (
          // Use these actual sizes (height and width) to render your content
          <div style={{ width, height }}>
            <DummyComponent />
          </div>
        );
      }}
    </AutoSizer>
  );
}

export default MyResizableComponent;
