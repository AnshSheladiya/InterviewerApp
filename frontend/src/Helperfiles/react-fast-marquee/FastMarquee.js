import React from "react";
import Marquee from "react-fast-marquee";

function FastMarquee(props) {
  const {
    /* Property	Type	Default	Description */
    // style, // CSSProperties	{}	Inline style for the container div
    // className, // string	""	Name of the CSS class to style the container div
    // autoFill, // boolean	false	Whether to automatically fill blank space in the marquee with copies of the children or not
    // play, // boolean	true	Whether to play or pause the marquee
    // pauseOnHover, // boolean	false	Whether to pause the marquee when hovered
    // pauseOnClick, // boolean	false	Whether to pause the marquee when clicked
    // direction, // "left" | "right" | "up" | "down"	"left"	The direction the marquee slides

    // Warning: Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them
    // speed, // number	50	Speed calculated as pixels/second
    // delay, // number	0	Duration to delay the animation after render, in seconds
    // loop, // number	0	The number of times the marquee should loop, 0 is equivalent to infinite
    // gradient, // boolean	false	Whether to show the gradient or not
    // gradientColor, // Array<number> of length 3	[255, 255, 255]	The RGB color of the gradient as an array of length 3
    // gradientWidth, // number | string	200	The width of the gradient on either side
    // onFinish, // {() => void}	null	A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.
    // onCycleComplete, // {() => void}	null	A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).
    children, // ReactNode	null	The children rendered inside the marquee
  } = props;

  return (
    <Marquee
      /* Uncomment and provide props here */
      // style={style}
      // className={className}
      // autoFill={autoFill}
      // play={play}
      // pauseOnHover={pauseOnHover}
      // pauseOnClick={pauseOnClick}
      // direction={direction}
      // speed={speed}
      // delay={delay}
      // loop={loop}
      // gradient={gradient}
      // gradientColor={gradientColor}
      // gradientWidth={gradientWidth}
      // onFinish={onFinish}
      // onCycleComplete={onCycleComplete}
    >
      {children}
    </Marquee>
  );
}

export default FastMarquee;
