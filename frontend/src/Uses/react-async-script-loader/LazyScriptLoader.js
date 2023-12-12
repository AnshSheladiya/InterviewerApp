import React, { useEffect, useState } from 'react';
import scriptLoader from 'react-async-script-loader';

// Define the lazy script sources here
const scriptSources = [
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js',
];

const LazyScriptLoader = (WrappedComponent) => {
  const LazyComponent = ({ isScriptLoaded, isScriptLoadSucceed, ...props }) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
      if (isScriptLoaded && isScriptLoadSucceed && !scriptLoaded) {
        // All scripts have loaded successfully, you can initialize your component here
        setScriptLoaded(true);
      }
    }, [isScriptLoaded, isScriptLoadSucceed, scriptLoaded]);

    return scriptLoaded ? <WrappedComponent {...props} /> : <div>Loading scripts...</div>;
  };

  return scriptLoader(scriptSources)(LazyComponent);
};

export default LazyScriptLoader;
