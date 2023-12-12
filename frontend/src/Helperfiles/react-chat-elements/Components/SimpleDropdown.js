import React from 'react';
import { Dropdown } from 'react-chat-elements';

function SimpleDropdown({
  title,                  // Dropdown menu title
  animationType,          // Animation type (fade or default)
  animationPosition,      // Animation start position
  items,                  // Dropdown items array
  onSelect,               // Function to handle item selection
  buttonProps,            // Button properties (see details below)
  className,              // ClassName for optional Dropdown
}) {
  return (
    <Dropdown
      title={title || 'Dropdown Title'} // Set default title if needed
      animationType={animationType || 'default'} // Set default animation type if needed
      animationPosition={animationPosition || 'nortwest'} // Set default animation position if needed
      buttonProps={buttonProps || { text: 'Electronic' }} // Set default button properties if needed
      onSelect={onSelect}
      items={items || []} // Set default items array if needed
      className={className}
    />
  );
}

export default SimpleDropdown;
