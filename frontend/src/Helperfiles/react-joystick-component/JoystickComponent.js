import React from "react";
import { Joystick } from "react-joystick-component";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";
import BoxComponent from "../styled-components/BoxComponent";

const JoystickComponent = () => (
  <>
  <CenterScreen>
    <TitleComponent>Joystick Component</TitleComponent>
    <BoxComponent>
    <Joystick
      start={() => console.log("Started")}
      move={() => console.log("Moved")}
      stop={() => console.log("Stopped")}
    />
    </BoxComponent>
    <BoxComponent>
    <Joystick
      baseImage="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/fire.png"
      stickImage="https://i.imgflip.com/1cf8by.jpg"
      start={console.log("Started")}
      throttle={50}
      move={console.log("Moved")}
      stop={console.log("Stopped")}
      // followCursor={true}
    />
    </BoxComponent>
  </CenterScreen>

  </>
);

export default JoystickComponent;
