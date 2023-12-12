import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';

const AudioPlayerComponent = () => (
  <CenterScreen>
    <TitleComponent>
    Audio Player Component
    </TitleComponent>
    <AudioPlayer
    autoPlay
    src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
    onPlay={(e) => console.log("onPlay")}
    // Other props here
  />
  </CenterScreen>

);

export default AudioPlayerComponent;
