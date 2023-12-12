import React, { useState } from 'react';
import {
  SketchPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker,
} from 'react-color';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';

const ColorPicker = () => {
  const [background, setBackground] = useState('#50e3c2');

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };
  const handleChange = (color) => {
    setBackground(color.hex);
  };

  return (
    <CenterScreen>
      <div>
        <TitleComponent>Color Picker</TitleComponent>
      </div>
      <div style={{ margin: '16px' }}>
        <SketchPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <BlockPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <ChromePicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <CirclePicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <CompactPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <GithubPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <HuePicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <MaterialPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <PhotoshopPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <SliderPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <SwatchesPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>

      <div style={{ margin: '16px' }}>
        <TwitterPicker
          color={background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </CenterScreen>
  );
};

export default ColorPicker;
