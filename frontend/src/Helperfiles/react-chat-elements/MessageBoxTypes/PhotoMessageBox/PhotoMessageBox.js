import React from 'react';
import { MessageBox } from 'react-chat-elements';

function PhotoMessageBox({ 
  // IMessage Props
  id, // Example: 'message1'
  position, // Example: 'left'
  text, // Example: 'Hello, this is a photo message'
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
  type, // Example: 'photo'

  // IPhotoMessage (extends IMessage)
  data, // Example: { uri: 'https://picsum.photos/200/200', width: 200, height: 200, alt: 'Sample Photo', status: { autoDownload: true, error: false, download: true, click: true, loading: false } }
  
  // IPhotoMessageProps (extends IPhotoMessage)
  onDownload, // Example: function (optional)
  onOpen, // Example: function (optional)
  onLoad, // Example: function (optional)
  onPhotoError, // Example: function (optional)
}) {
  return (
    <MessageBox
      position={position || 'left'}
      type={type || 'photo'}
      title={title || 'Message Box Title'}
      data={data || { uri: 'https://picsum.photos/200/200' }}
      // Uncomment and add the rest of the props here
      /*
      id={id || 'message1'}
      text={text || 'Hello, this is a photo message'}
      focus={focus || false}
      date={date || 1630888800000}
      dateString={dateString || '2021-09-06T12:00:00Z'}
      avatar={avatar || 'https://example.com/avatar.png'}
      titleColor={titleColor || '#0078FF'}
      forwarded={forwarded || false}
      replyButton={replyButton || true}
      removeButton={removeButton || true}
      status={status || 'sent'}
      statusTitle={statusTitle || 'Sent'}
      notch={notch || true}
      copiableDate={copiableDate || true}
      retracted={retracted || false}
      className={className || 'custom-message'}
      letterItem={letterItem || { id: 'letter1', letter: <div>Custom Letter</div> }}
      reply={reply || { message: 'Hello, I am replying', photoURL: 'https://example.com/reply.png' }}
      onDownload={onDownload || function () {}}
      onOpen={onOpen || function () {}}
      onLoad={onLoad || function () {}}
      onPhotoError={onPhotoError || function () {}}
      */
    />
  );
}

export default PhotoMessageBox;

