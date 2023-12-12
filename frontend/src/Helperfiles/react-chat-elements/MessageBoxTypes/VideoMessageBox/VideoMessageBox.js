import React from 'react';
import { MessageBox } from 'react-chat-elements';

function VideoMessageBox({
  // IVideoMessageProps
  onDownload, // Example: () => console.log('Download clicked')
  onOpen, // Example: () => console.log('Open clicked')
  onLoad, // Example: () => console.log('Video loaded')
  onPhotoError, // Example: () => console.error('Video error')

  // IVideoMessage (extends IMessage)
  controlsList, // Example: 'nofullscreen noremoteplayback'
  data, // Example: { videoURL: 'https://www.example.com/video.mp4', width: 320, height: 240, alt: 'Video', uri: 'https://www.example.com/video.mp4', status: { autoDownload: true, error: false, download: true, click: true, loading: false } }

  // IMessage Props
  id, // Example: 'message1'
  position, // Example: 'left'
  text, // Example: 'Hello, this is a video message'
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
  type, // Example: 'video'
}) {
  return (
    <MessageBox
      // IVideoMessageProps
      onDownload={onDownload}
      onOpen={onOpen}
      onLoad={onLoad}
      onPhotoError={onPhotoError}

      // IVideoMessage (extends IMessage)
      controlsList={controlsList}
      data={data}

      // IMessage Props
      id={id}
      position={position}
      text={text}
      title={title}
      focus={focus}
      date={date}
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
      type={type}
    />
  );
}

export default VideoMessageBox;
