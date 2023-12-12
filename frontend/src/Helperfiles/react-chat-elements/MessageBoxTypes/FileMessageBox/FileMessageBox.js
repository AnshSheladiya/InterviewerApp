import React from 'react';
import { MessageBox } from 'react-chat-elements';

function FileMessageBox({
  // IFileMessageProps
  onDownload, // Example: () => console.log('Download clicked')
  onOpen, // Example: () => console.log('Open clicked')

  // IFileMessage (extends IMessage)
  data, // Example: { name: 'sample.txt', extension: 'txt', size: '10 KB', id: 'file1', uri: 'https://www.example.com/sample.txt', status: { autoDownload: true, error: false, download: true, click: true, loading: false } }

  // IMessage Props
  id, // Example: 'message1'
  position, // Example: 'left'
  text, // Example: 'Hello, this is a file message'
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
  type, // Example: 'file'
}) {
  return (
    <MessageBox
      // IFileMessageProps
      onDownload={onDownload}
      onOpen={onOpen}

      // IFileMessage (extends IMessage)
      data={data || { name: 'sample.txt', extension: 'txt', size: '10 KB', id: 'file1', uri: 'https://www.example.com/sample.txt', status: { autoDownload: true, error: false, download: true, click: true, loading: false } }}
      
      // IMessage Props
      id={id}
      position={position || "left"} 
      text={text}
      title={title || "File Message Box Title"}
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
      type={type || "file"}
    />
  );
}

export default FileMessageBox;
