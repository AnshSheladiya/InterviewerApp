import React from "react";
import { SideBar } from "react-chat-elements";

function SimpleSidebar({
  type, // Sidebar style type
  data, // Sidebar data object (see details below)
}) {
  return (
    <SideBar
      type={type || "light"} // Set default style type if needed
      data={
        data || {
          top: "About Me",
          center: "Chat List",
          bottom: "Detaysoft",
        }
      } // Set default data object if needed
    />
  );
}

export default SimpleSidebar;
