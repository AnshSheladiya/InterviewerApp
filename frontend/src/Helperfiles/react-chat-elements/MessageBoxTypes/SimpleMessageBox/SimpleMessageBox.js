import React from 'react';
import { MessageBox } from 'react-chat-elements';

function SimpleMessageBox({
  id,             // Sample: '123'
  position,       // Sample: 'left'
  text,           // Sample: 'Here is a text type message box'
  title,          // Sample: 'Message Box Title'
  focus,          // Sample: false
  date,           // Sample: new Date()
  dateString,     // Sample: '2023-09-06 15:30'
  avatar,         // Sample: 'https://example.com/avatar.jpg'
  titleColor,     // Sample: '#007bff'
  forwarded,      // Sample: true
  replyButton,    // Sample: true
  removeButton,   // Sample: false
  status,         // Sample: 'sent'
  statusTitle,    // Sample: 'Delivered'
  notch,          // Sample: true
  copiableDate,   // Sample: true
  retracted,      // Sample: false
  className,      // Sample: 'custom-message'
  letterItem,     // Sample: { id: 'letter1', letter: 'A' }
  reply,          // Sample: { message: 'Reply message', photoURL: 'https://example.com/reply.jpg' }
  type,           // Sample: 'text'
}) {
  return (
    <MessageBox
      id={id}
      position={position || 'left'} // Set default values if needed
      type={type || 'text'}
      title={title || 'Message Box Title'}
      text={text || 'Here is a text type message box'}
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
    />
  );
}

export default SimpleMessageBox;
