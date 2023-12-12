import React from "react";
import {
  Magnifier,
  GlassMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,PictureInPictureMagnifier,SideBySideMagnifier
} from "react-image-magnifiers";

const MagnifierComponent = () => {
  return (
    <div>
      <h2>Small Image Magnifier</h2>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div>
          <h3>Glass Magnifier</h3>
          <GlassMagnifier
            imageSrc={require('../../assets/wow.jpg')}
            imageAlt="Example"
            style={{ width: "200px", height: "200px" }} // Adjust the size here
          />
        </div>
        <div>
          <h3>Magnifier</h3>
          <Magnifier
            imageSrc={require('../../assets/wow.jpg')}
            imageAlt="Example"
            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK}
            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
            style={{ width: "200px", height: "200px" }} // Adjust the size here
          />
        </div>
        <div>
          <h3>Picture In Picture Magnifier</h3>
          <PictureInPictureMagnifier
            imageSrc={require('../../assets/wow.jpg')}
            imageAlt="Example"
            largeImageSrc={require('../../assets/wow.jpg')} // Large image source
            style={{ width: "200px", height: "200px" }} // Adjust the size here
          />
        </div>
        <div>
          <h3>Side By Side Magnifier</h3>
          <SideBySideMagnifier
            imageSrc={require('../../assets/wow.jpg')}
            imageAlt="Example"
            largeImageSrc={require('../../assets/wow.jpg')} // Large image source
            style={{ width: "200px", height: "200px" }} // Adjust the size here
          />
        </div>
      </div>
    </div>
  );
};

export default MagnifierComponent;

