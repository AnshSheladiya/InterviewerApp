import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import CenterScreen from "../styled-components/CenterScreen";
import HorizontalLine from "../styled-components/HorizontalLine";
import TitleComponent from "../styled-components/TitleComponent";

const MyTerminalApp = () => {
  // Define commands here
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`
  };

  return (
    <>
        <CenterScreen>
      <TitleComponent>React-terminal</TitleComponent>
      </CenterScreen>
      <HorizontalLine/>
        <TerminalContextProvider>
      <ReactTerminal
        commands={commands}
        // Additional props as needed
        welcomeMessage="Welcome to My Terminal App!"
        theme="light"
      />
    </TerminalContextProvider>
    </>


  );
};

export default MyTerminalApp;
