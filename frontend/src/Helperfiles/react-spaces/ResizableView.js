import React from "react";
import { ViewPort, LeftResizable, Fill, BottomResizable } from "react-spaces";
import ExampleLayoutMUI from "../mui-material/Grid/ExampleLayoutMUI";

const leftContentStyle = {
  background: "#FFC7EA",
};

const MainContentStyle = {
  background:"#FBF0B2"
};

const ResizableView = ({ leftSize, leftContent, fillContent }) => (
  <ViewPort>
    <LeftResizable size={leftSize} style={leftContentStyle}>
      {leftContent}
    </LeftResizable>
    <Fill>
    <Fill style={MainContentStyle}><ExampleLayoutMUI/></Fill>
    </Fill>
  </ViewPort>
);

export default ResizableView;
