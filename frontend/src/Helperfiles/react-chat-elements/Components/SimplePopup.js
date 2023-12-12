import React from 'react';
import { Popup } from 'react-chat-elements';

function SimplePopup({
  show,                // Popup visibility
  type,                // Popup type
  className,           // ClassName for optional className,
  onClose,             // Function to handle closing the popup
}) {
  const popupData = {
    show: show,
    header: "Example Popup",
    headerButtons: [
      {
        type: "transparent",
        color: "black",
        text: "X",
        onClick: () => {
            onClose()// Handle closing the popup here if needed
        },
      },
    ],
    text: "Here is a sample popup component to use in your projects.",
    footerButtons: [
      {
        color: "white",
        backgroundColor: "#ff5e3e",
        text: "Cancel",
        onClick: () => {
          // Handle cancel action here if needed
        },
      },
      {
        color: "white",
        backgroundColor: "lightgreen",
        text: "OK",
        onClick: () => {
          // Handle OK action here if needed
        },
      },
    ],
  };

  return (
    <Popup
      popup={popupData}
      type={type}
      className={className}
    />
  );
}

export default SimplePopup;