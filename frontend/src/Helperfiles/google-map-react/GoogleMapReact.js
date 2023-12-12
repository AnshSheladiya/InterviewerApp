import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMapReactComponent(){
  const defaultProps = {
    center: {
      lat: 22.899599545922825,
      lng: 79.7145994653728
    },
    zoom: 5
  };
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY_HERE' }} // Replace with your actual API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
