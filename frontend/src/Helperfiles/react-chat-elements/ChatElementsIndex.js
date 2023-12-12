import React, { useState } from "react";
import SimpleMessageBox from "./MessageBoxTypes/SimpleMessageBox/SimpleMessageBox";
import PhotoMessageBox from "./MessageBoxTypes/PhotoMessageBox/PhotoMessageBox";
import VideoMessageBox from "./MessageBoxTypes/VideoMessageBox/VideoMessageBox";
import AudioMessageBox from "./MessageBoxTypes/AudioMessageBox/AudioMessageBox";
import FileMessageBox from "./MessageBoxTypes/FileMessageBox/FileMessageBox";
import LocationMessage from "./MessageBoxTypes/LocationMessage/LocationMessage";
import ReplyMessageBox from "./MessageBoxTypes/ReplyMessageBox/ReplyMessageBox";
import SystemMessageBox from "./MessageBoxTypes/SystemMessageBox/SystemMessageBox";
import SimpleChatList from "./Components/ChatList";
import SimpleChatItem from "./Components/SimpleChatItem";
import SimpleInput from "./Components/SimpleInput";
import SimpleButton from "./Components/SimpleButton";
import SimplePopup from "./Components/SimplePopup";
import SimpleSidebar from "./Components/SimpleSidebar";
import SimpleNavbar from "./Components/SimpleNavbar";
import SimpleDropdown from "./Components/SimpleDropdown";
import SimpleAvatar from "./Components/SimpleAvatar";
import HorizontalLine from "../styled-components/HorizontalLine";
import { GiPowerButton } from "react-icons/gi";
import TitleComponent from "../styled-components/TitleComponent";

const ChatElementsIndex = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // For SimpleDropdown 
  const dropdownItems = [
    {
      text: "Computers",
      // icon: {
      //   float: "right",
      //   color: "blue",
      //   size: 10,
      //   // component: <IconExample />,
      // },
    },
    {
      text: "Phones",
    },
  ];
  return (
    <div style={{marginLeft:10}}>
      <div>
        <TitleComponent>Chat Elements</TitleComponent>
      </div>
      {/* -------------------MessageBoxs------------------------ */}
      <SimpleMessageBox />
      <HorizontalLine/>

      <PhotoMessageBox />
      <HorizontalLine/>

      <VideoMessageBox
        position={"left"}
        type={"video"}
        title={"Kursat"}
        data={{
          videoURL:
            "https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
          status: {
            click: true,
            loading: 0.5,
            download: true,
          },
        }}
      />
            <HorizontalLine/>

      <AudioMessageBox />
      <HorizontalLine/>

      <FileMessageBox />
      <HorizontalLine/>

      <LocationMessage />
      <HorizontalLine/>

      <ReplyMessageBox
        reply={{
          title: "Emre",
          titleColor: "#8717ae",
          message: "Nice to meet you",
        }}
        position={"left"}
        type={"text"}
        title="Esra"
        text={"Nice to meet you too !"}
      />
      <HorizontalLine/>

      <SystemMessageBox />
      <HorizontalLine/>

      {/* -------------------Chat Lists------------------------ */}
      <SimpleChatList
        className='custom-chat-list'
        dataSource={[
          {
            avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
          // Add more chat items as needed
        ]}
        // Add other props as needed
      />
            <HorizontalLine/>

      <SimpleChatItem
        id={1}
        className="custom-chat-item"
        avatar="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        alt="kursat_avatar"
        title="Kursat"
        subtitle="Ok. See you !"
        date={new Date()}
        unread={0}
      />
      <SimpleChatItem
        id={2}
        className="custom-chat-item"
        avatar="https://avatars.githubusercontent.com/u/41473129?v=4"
        alt="emre_avatar"
        title="Emre"
        subtitle="What are you doing?"
        date={new Date()}
        muted={true}
        showMute={true}
        showVideoCall={true}
        unread={2}
      />
            <HorizontalLine/>

      <SimpleInput
        placeholder="Type here..."
        multiline={true}
        // Add other props as needed
      />
      <HorizontalLine/>

      {/* -------------------SimpleButton Lists------------------------ */}
      <SimpleButton
        text="Send"
        onClick={() => alert("Sending...")}
        title="Send"
      />
            <HorizontalLine/>

      <SimpleButton
        text="Send"
        onClick={() => alert("Sending...")}
        type="transparent"
        title="Send"
      />
            <HorizontalLine/>

      <SimpleButton
        // text="Send"
        onClick={() => alert("Sending...")}
        // title="Send"
        icon={{
          float: "left",
          size: 30,
          component: <GiPowerButton />,
        }}
      />
            <HorizontalLine/>

      {/* -------------------SimplePopup------------------------ */}
      <button onClick={() => setShowPopup(true)}>Show Result of Popup</button>
      <SimplePopup
        show={showPopup}
        type="default" // You can specify the type of the popup here
        className="custom-popup" // You can add a custom class name here
        onClose={handleClosePopup} // Pass the function to handle closing
      />{" "}
            <HorizontalLine/>

      <SimpleSidebar/>
      <HorizontalLine/>

      <SimpleNavbar
        left={<div>Logo</div>}
        center={<div>Home</div>}
        right={<div>Contact</div>}
        type="dark"
      />
                  <HorizontalLine/>

      <SimpleDropdown
        title="Dropdown Title"
        animationType="default"
        animationPosition="southeast"
        buttonProps={{
          text: "Electronic",
        }}
        onSelect={(e) => {
          console.log(e);
        }}
        items={dropdownItems}
        className="custom-dropdown"
      />
                  <HorizontalLine/>

      <SimpleAvatar
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        alt="avatar"
        size="xlarge"
        type="rounded"
      />
                  <HorizontalLine/>

    </div>
  );
};

export default ChatElementsIndex;
