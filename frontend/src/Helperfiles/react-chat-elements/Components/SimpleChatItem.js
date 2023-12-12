import React from 'react';
import { ChatItem } from 'react-chat-elements';

function SimpleChatItem({
  id,
  className,
  avatar,
  avatarFlexible,
  letterItem,
  alt,
  title,
  subtitle,
  date,
  dateString,
  unread,
  onClick,
  onContextMenu,
  statusColor,
  statusColorType,
  statusText,
  lazyLoadingImage,
  muted,
  showMute,
  showVideoCall,
  onClickMute,
  onClickVideoCall,
  onAvatarError,
  onDragOver,
  onDragEnter,
  onDrop,
  onDragLeave,
  onDragComponent,
}) {
  return (
    <ChatItem
      id={id}
      className={className}
      avatar={avatar}
      avatarFlexible={avatarFlexible}
      letterItem={letterItem}
      alt={alt}
      title={title}
      subtitle={subtitle}
      date={date}
      dateString={dateString}
      unread={unread}
      onClick={onClick}
      onContextMenu={onContextMenu}
      statusColor={statusColor}
      statusColorType={statusColorType}
      statusText={statusText}
      lazyLoadingImage={lazyLoadingImage}
      muted={muted}
      showMute={showMute}
      showVideoCall={showVideoCall}
      onClickMute={onClickMute}
      onClickVideoCall={onClickVideoCall}
      onAvatarError={onAvatarError}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragComponent={onDragComponent}
    />
  );
}

export default SimpleChatItem;
