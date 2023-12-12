import React from 'react';
import { MessageBox } from 'react-chat-elements';

function LocationMessage({ 
  // IMessage Props
  id, // Example: 'location1'
  position, // Example: 'left'
  text, // Example: 'I am at this location'
  title, // Example: 'Location Message Title'
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
  type, // Example: 'location'

  // ILocationMessage (extends IMessage)
  data, // Example: { latitude: '40.7128', longitude: '-74.0060', staticURL: 'https://example.com/staticmap.png', mapURL: 'https://example.com/fullmap.png' }
  
  // ILocationMessageProps (extends ILocationMessage)
  markerColor, // Example: 'red'
  zoom, // Example: '10'
  apiKey, // Example: 'your-api-key'
  src, // Example: 'https://example.com/location.png'
  target, // Example: '_blank'
  href, // Example: 'https://example.com/location.html'
  onOpen, // Example: function (optional)
  onError, // Example: function (optional)
}) { 
  return (
    <MessageBox
      position={position || 'left'}
      type={type || 'location'}
      title={title || 'Location Message Title'}
      data={data || { 
        latitude: '21.211813', 
        longitude: '72.856211', 
        staticURL: 'https://example.com/staticmap.png', 
        mapURL: `https://www.google.com/maps/place/21%C2%B012'42.5%22N+72%C2%B051'22.4%22E/@21.211818,72.8536361,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.211813!4d72.856211?entry=ttu`
      }}
      // Uncomment and add the rest of the props here
      /*
      id={id || 'location1'}
      text={text || 'I am at this location'}
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
      markerColor={markerColor || 'red'}
      zoom={zoom || '10'}
      apiKey={apiKey || 'your-api-key'}
      src={src || 'https://example.com/location.png'}
      target={target || '_blank'}
      href={href || 'https://example.com/location.html'}
      onOpen={onOpen || function () {}}
      onError={onError || function () {}}
      */
    />
  );
}

export default LocationMessage;
