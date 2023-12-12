import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

const InViewportDetector = ({ children, options, config, onEnterViewport, onLeaveViewport }) => {
  const myRef = useRef();
  const props = {};

  const {
    inViewport,
    enterCount,
    leaveCount,
  } = useInViewport(
    myRef,
    options,
    config,
    props
  );

  if (inViewport && onEnterViewport) {
    onEnterViewport();
  }

  if (!inViewport && onLeaveViewport) {
    onLeaveViewport();
  }

  return (
    <div ref={myRef}>
      {children(inViewport, enterCount, leaveCount)}
    </div>
  );
};

export default InViewportDetector;
