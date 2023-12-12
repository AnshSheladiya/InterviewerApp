import React from 'react';

const YourComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>This is the Component to Print</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu
        non libero hendrerit iaculis. Sed eu aliquam ligula, et convallis elit.
        Proin ut lorem nec erat venenatis feugiat. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla
        facilisi. Curabitur interdum ligula in mauris facilisis, a volutpat
        justo efficitur.
      </p>
    </div>
  );
});

export default YourComponentToPrint;
