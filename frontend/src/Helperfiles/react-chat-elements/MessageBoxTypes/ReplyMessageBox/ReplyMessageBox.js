import React from 'react';
import { MessageBox } from 'react-chat-elements';

function ReplyMessageBox({ 
  // IMessage Props
  id, // Example: 'message1'
  position, // Example: 'left'
  text, // Example: 'Hello, this is a reply message'
  title, // Example: 'Reply Message Box Title'
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
  type, // Example: 'reply'

  // Reply Message Props (extends IMessage)
  // All props from IMessage are inherited

  // Uncomment and add the rest of the props here
  /*
  id={id || 'message1'}
  text={text || 'Hello, this is a reply message'}
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
  type={type || 'reply'}
  */
  }
) {
  return (
    <MessageBox
      position={position}
      type={type}
      title={title}
      reply={reply}
      text={text}

      // Uncomment and add the rest of the props here
      /*
      id={id || 'message1'}
      text={text || 'Hello, this is a reply message'}
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
      type={type || 'reply'}
      */
    />
  );
}

export default ReplyMessageBox;
