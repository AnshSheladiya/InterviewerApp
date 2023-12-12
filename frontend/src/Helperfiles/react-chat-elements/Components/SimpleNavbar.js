import React from 'react';
import { Navbar } from 'react-chat-elements';

function SimpleNavbar({
  type,      // navbar style type (eg: light, dark)
  left,      // navbar left component
  center,    // navbar center component
  right,     // navbar right component
}) {
  return (
    <Navbar
      type={type || 'light'} // Set default value if needed
      left={left}
      center={center}
      right={right}
      // You can include comments for any extra props here
    />
  );
}

export default SimpleNavbar;
