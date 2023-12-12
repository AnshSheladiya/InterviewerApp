import React from 'react';
import LazyScriptLoader from './LazyScriptLoader';

// Your component that depends on the lazy-loaded scripts
const MyComponent = () => {
  // Your component logic here

  return <div>Your component content here</div>;
};

// Wrap your component with the LazyScriptLoader
export default LazyScriptLoader(MyComponent);
