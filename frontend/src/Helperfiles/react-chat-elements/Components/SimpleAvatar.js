import React from 'react';
import { Avatar } from 'react-chat-elements';

function SimpleAvatar({
  src,                    // Image source
  alt,                    // Image alt description
  size,                   // Image size
  type,                   // Image type
  letterItem,             // Avatar to be a letter
  sideElement,            // Avatar side element
  onError,                // Avatar img onerror
  lazyLoadingImage,       // Lazy loading image
  className,              // ClassName for optional Avatar
}) {
  return (
    <Avatar
      src={src || 'https://example.com/default-avatar.jpg'} // Set default image source if needed
      alt={alt || 'avatar'}
      size={size || 'default'} // Set default size if needed
      type={type || 'default'} // Set default type if needed
      letterItem={letterItem}
      sideElement={sideElement}
      onError={onError}
      lazyLoadingImage={lazyLoadingImage}
      className={className}
    />
  );
}

export default SimpleAvatar;
