import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";

const LiveCodeEditor = () => (
  <>
    <CenterScreen>
    <TitleComponent>Live Code Editor</TitleComponent>
    </CenterScreen>

    <LiveProvider
      code="<h3 style={{
  background: 'darkslateblue',
  color: 'white',
  padding: 8,
  borderRadius: 4
}}>
  Hello World! 👋
</h3>"
    >
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </>

);

export default LiveCodeEditor;
