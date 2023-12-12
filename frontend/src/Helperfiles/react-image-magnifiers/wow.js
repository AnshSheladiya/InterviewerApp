import React, { useState } from "react";
import { GlassMagnifier } from "react-image-magnifiers";

const SimpleGlassExample = () => {
  const [magnifierSize, setMagnifierSize] = useState("30%");
  const [square, setSquare] = useState(false);
  const [image] = useState(require('../../assets/wow.jpg')); // Replace with your image path
  const [largeImage] = useState(require('../../assets/wow.jpg')); // Replace with your large image path

  const handleSizeChange = (e) => {
    setMagnifierSize(e.target.value + "%");
  };

  const handleShapeChange = (e) => {
    setSquare(e.target.value === "square");
  };

  return (
    <div>
      <h2>Simple Glass Magnifier</h2>
      <GlassMagnifier
        imageSrc={image}
        largeImageSrc={largeImage}
        magnifierSize={magnifierSize}
        square={square}
      />
      <div>
        <label>
          Magnifier Size:
          <select defaultValue="30" onChange={handleSizeChange}>
            <option value="15">15%</option>
            <option value="20">20%</option>
            <option value="25">25%</option>
            <option value="30">30%</option>
            <option value="35">35%</option>
            <option value="40">40%</option>
            <option value="45">45%</option>
            <option value="50">50%</option>
          </select>
        </label>
        <label>
          Shape:
          <select defaultValue="circle" onChange={handleShapeChange}>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SimpleGlassExample;
