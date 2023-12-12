import React from 'react';
import { Input } from 'react-chat-elements';

function SimpleInput({
  type,                 // Input type if multiline is false
  referance,            // Input ref
  className,            // Optional input className
  placeholder,          // Input placeholder text
  defaultValue,         // Input default value
  onChange,             // Input onChange function
  multiline,            // Input is textarea
  autoHeight,           // Input auto height
  minHeight,            // Input min height
  maxHeight,            // Input max height
  inputStyle,           // InputStyle object
  leftButtons,          // Left buttons component
  rightButtons,         // Right buttons component
  maxlength,            // Input or textarea maxlength
  onMaxLengthExceed,    // Called when max length exceeds
  autofocus,            // Input autofocus
  clear,                // Input clear function if it has reference
  onCopy,               // Input oncopy event
  onCut,                // Input oncut event
  onPaste,              // Input onpaste event
  onSelect,             // Input onselect event
  onBlur,               // Input onblur event
  onFocus,              // Input onfocus event
  onSubmit,             // Input onsubmit event
  onReset,              // Input onreset event
  onKeyDown,            // Input onkeydown event
  onKeyPress,           // Input onkeypress event
  onKeyUp,              // Input onkeyup event
}) {
  return (
    <Input
      type={type || 'text'}
      ref={referance}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      multiline={multiline || false}
      autoHeight={autoHeight}
      minHeight={minHeight || 25}
      maxHeight={maxHeight || 200}
      inputStyle={inputStyle}
      leftButtons={leftButtons}
      rightButtons={rightButtons}
      maxlength={maxlength}
      onMaxLengthExceed={onMaxLengthExceed}
      autofocus={autofocus}
      clear={clear}
      onCopy={onCopy}
      onCut={onCut}
      onPaste={onPaste}
      onSelect={onSelect}
      onBlur={onBlur}
      onFocus={onFocus}
      onSubmit={onSubmit}
      onReset={onReset}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
    />
  );
}

export default SimpleInput;
