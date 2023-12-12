import React from 'react';
import { ChatList } from 'react-chat-elements';

function SimpleChatList({
  id,                   // Chatlist id
  className,            // Optional chat list className
  dataSource,           // Chat list array
  onClick,              // Chat list item on click (chat(object) returns)
  onContextMenu,        // Chat list item on context menu (chat(object) returns)
  onAvatarError,        // Chat list item on error avatar img
  lazyLoadingImage,     // Lazy loading image path
  onClickMute,          // Mute click function (chat(object) returns)
  onClickVideoCall,     // Video call click function (chat(object) returns)
  onDragOver,           // Ondragover event
  onDragEnter,          // Ondragenter event
  onDrop,               // Ondrop event
  onDragLeave,          // Ondragleave event
  onDragComponent,      // The component which shows while drag
}) {
  return (
    <ChatList
      id={id}
      className={className || 'chat-list'} // Set default class name if not provided
      dataSource={dataSource || []}
      onClick={onClick}
      onContextMenu={onContextMenu}
      onAvatarError={onAvatarError}
      lazyLoadingImage={lazyLoadingImage}
      onClickMute={onClickMute}
      onClickVideoCall={onClickVideoCall}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragComponent={onDragComponent}
    />
  );
}

export default SimpleChatList;
