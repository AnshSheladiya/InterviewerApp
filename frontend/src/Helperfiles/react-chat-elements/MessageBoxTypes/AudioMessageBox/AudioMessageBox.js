import React from 'react';
import { MessageBox } from 'react-chat-elements';

function AudioMessageBox({
  // IAudioMessageProps
  audioProps, // Example: { controls: true }
  customStyle, // Example: { backgroundColor: '#f2f2f2' }

  // IAudioMessage (extends IMessage)
  data, // Example: { audioURL: 'https://www.example.com/audio.mp3', audioType: 'audio/mp3', controlsList: 'nodownload' }

  // IMessage Props
  id, // Example: 'message1'
  position, // Example: 'left'
  text, // Example: 'Hello, this is an audio message'
  title, // Example: 'Message Box Title'
  focus, // Example: false
  date, // Example: 1630888800000
  dateString, // Example: '2021-09-06T12:00:00Z'
  avatar, // Example: 'https://example.com/avatar.png'
  titleColor, // Example: '#0078FF'
  forwarded, // Example: false
  replyButton, // Example: true
  removeButton, // Example: true
  status, // Example: 'sent'
  statusTitle, // Example: 'Sent'
  notch, // Example: true
  copiableDate, // Example: true
  retracted, // Example: false
  className, // Example: 'custom-message'
  letterItem, // Example: { id: 'letter1', letter: <div>Custom Letter</div> }
  reply, // Example: { message: 'Hello, I am replying', photoURL: 'https://example.com/reply.png' }
  type, // Example: 'audio'
}) {
  return (
    <MessageBox
      // IAudioMessageProps
      audioProps={audioProps}
      customStyle={customStyle}

      // IAudioMessage (extends IMessage)
      data={data || { audioURL: 'https://www.example.com/audio.mp3', audioType: 'audio/mp3', controlsList: 'nodownload' }}
      
      // IMessage Props
      id={id}
      position={position || "left"} 
      text={text}
      title={title || "Audio Message Box Title"}
      focus={focus}
      date={date || 1630888800000} // Set a default timestamp here
      dateString={dateString}
      avatar={avatar}
      titleColor={titleColor}
      forwarded={forwarded}
      replyButton={replyButton}
      removeButton={removeButton}
      status={status}
      statusTitle={statusTitle}
      notch={notch}
      copiableDate={copiableDate}
      retracted={retracted}
      className={className}
      letterItem={letterItem}
      reply={reply}
      type={type || "audio"}
    />
  );
}

export default AudioMessageBox;
