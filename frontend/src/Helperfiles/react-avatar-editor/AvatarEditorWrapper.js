
import React, { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';

const AvatarEditorWrapper = ({
  image,
  width,
  height,
  border,
  // color,
  // borderRadius,
  // backgroundColor,
  // style,
  // scale,
  // position,
  // rotate,
  // crossOrigin,
  // className,
  // onLoadFailure,
  // onLoadSuccess,
  // onImageReady,
  // onMouseUp,
  // onMouseMove,
  // onImageChange,
  // onPositionChange,
  // disableBoundaryChecks,
  // disableHiDPIScaling,
}) => {
  const editorRef = useRef(null);

  const onClickSave = () => {
    if (editorRef.current) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = editorRef.current.getImage();

      // Create a data URL from the canvas
      const dataURL = canvas.toDataURL('image/jpeg'); // You can specify the desired format

      // You can now use the dataURL as needed, for example, upload it to a server or display it.
      console.log(dataURL);
       // Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'avatar.jpg'; // Specify the desired file name

    // Trigger the download
    downloadLink.click();
    }
  };

    return (
      <CenterScreen>
        <TitleComponent>Avatar Editor</TitleComponent>
      <AvatarEditor
        ref={editorRef}
        image={image || require('../../assets/wow.jpg')}
        width={width || 250}
        height={height || 250}
        border={border || 50}
        scale={1.2}
          // color={color}
          // borderRadius={borderRadius}
          // backgroundColor={backgroundColor}
          // style={style}
          // scale={scale}
          // position={position}
          // rotate={rotate}
          // crossOrigin={crossOrigin}
          // className={className}
          // onLoadFailure={onLoadFailure}
          // onLoadSuccess={onLoadSuccess}
          // onImageReady={onImageReady}
          // onMouseUp={onMouseUp}
          // onMouseMove={onMouseMove}
          // onImageChange={onImageChange}
          // onPositionChange={onPositionChange}
          // disableBoundaryChecks={disableBoundaryChecks}
          // disableHiDPIScaling={disableHiDPIScaling}
        />
        {/* Uncomment this button if you want to enable onClickSave */}
        <button onClick={onClickSave} style={{marginTop:'10px',padding:'10px',backgroundColor:'#ECF4D6',border:'2px solid black',borderRadius:'10px'}}>Save</button>
      </CenterScreen>
    );
  }


export default AvatarEditorWrapper;

