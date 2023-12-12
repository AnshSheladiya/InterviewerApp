import React, { forwardRef } from "react";
import ReactToPrint from "react-to-print";
import YourComponentToPrint from "./YourComponentToPrint";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";
import BoxComponent from "../styled-components/BoxComponent";

// Create a wrapper component using forwardRef
const ChatElementsPrintable = forwardRef((props, ref) => (
  <div ref={ref}>
    <CenterScreen>
      <TitleComponent>
      React-to-print
      </TitleComponent>
      <BoxComponent>
      <YourComponentToPrint />
      </BoxComponent>
      
    </CenterScreen>
  </div>
));

const CommonPrintComponent = () => {
  // Ref to the wrapper component
  const componentRef = React.createRef();

  return (
    <div>
      {/* Using ReactToPrint component */}
      <ReactToPrint
        trigger={() => (
          // Your trigger element (e.g., a button)
          <button style={{marginTop:'10px',padding:'10px',backgroundColor:'#ECF4D6',border:'2px solid black',borderRadius:'10px'}}>Print this out!</button>
        )}
        content={() => componentRef.current} // Use the ref of the wrapper component
      />

      {/* Render the wrapper component */}
      <ChatElementsPrintable ref={componentRef} />
    </div>
  );
};

export default CommonPrintComponent;
