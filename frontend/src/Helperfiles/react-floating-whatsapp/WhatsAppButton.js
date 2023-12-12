import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import TitleComponent from '../styled-components/TitleComponent';

const WhatsAppButton = (props) => {
  const commonProps = {
    phoneNumber: '1234567890', // You can change this default phone number
    accountName: 'Account Name', // You can change this default account name
    chatMessage: 'Hello there! 🤝\nHow can we help?', // You can change the default chat message
    darkMode: false, // You can change the default dark mode setting
    allowClickAway: false, // You can change the default click away behavior
    allowEsc: false, // You can change the default escape key behavior
    chatboxHeight: 320, // You can change the default chat box height
    notification: false, // You can change the default notification setting
  };

  return (<>
  <TitleComponent>Floating WhatsApp</TitleComponent>
   <FloatingWhatsApp {...commonProps} {...props} />  </>)
  
 
};

export default WhatsAppButton;
