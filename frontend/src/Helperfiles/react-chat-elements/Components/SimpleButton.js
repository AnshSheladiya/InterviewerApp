import React from 'react';
import { Button } from 'react-chat-elements';

function SimpleButton({
  type,                  // Button type (outlined, transparent)
  disabled,              // Button is disabled?
  text,                  // Button text
  buttonRef,             // Button ref
  title,                 // Button title (Hover over the button to see the title.)
  className,             // ClassName for optional Button
  backgroundColor,       // Button background color
  color,                 // Button color
  onClick,               // Button onClick event
  icon,                  // Button icon (see details below)
}) {
  return (
    <Button
      type={type}
      disabled={disabled}
      text={text}
      buttonRef={buttonRef}
      title={title}
      className={className}
      backgroundColor={backgroundColor || '#3979aa'}
      color={color || '#ffffff'}
      onClick={onClick}
      icon={icon}
    />
  );
}

export default SimpleButton;
