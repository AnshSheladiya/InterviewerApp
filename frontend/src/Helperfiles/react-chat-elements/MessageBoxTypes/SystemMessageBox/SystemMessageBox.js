import React from 'react';
import { MessageBox } from 'react-chat-elements';

function SystemMessageBox({ 
  // IMessage Props
  id, // Example: 'message1'
  position, // Example: 'left'
  text, // Example: 'This is a system message'
  title, // Example: 'System Message Box Title'
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
  reply, // Example: { message: 'System reply', photoURL: 'https://example.com/system-reply.png' }
  type, // Example: 'system'

  // System Message Props (extends IMessage)
  // All props from IMessage are inherited

  // Uncomment and add the rest of the props here
  /*
  id={id || 'message1'}
  text={text || 'This is a system message'}
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
  reply={reply || { message: 'System reply', photoURL: 'https://example.com/system-reply.png' }}
  type={type || 'system'}
  */
  }
) {
  return (
    <MessageBox
      position={position || 'left'}
      type={type || 'system'}
      title={title || 'System Message Box Title'}
      text={text || 'This is a system message'}
      // Uncomment and add the rest of the props here
      /*
      id={id || 'message1'}
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
      reply={reply || { message: 'System reply', photoURL: 'https://example.com/system-reply.png' }}
      */
    />
  );
}

export default SystemMessageBox;
