import React from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,

} from "@react-google-maps/api";

/* https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h */
const Maps = ({ coords }: any) => {
  const { width, height } = coords;

  const mapContainerStyle = {
    width,
    height,
  };
  const mapContainerStyleSM = {
    width: "300px",
    height: "200px",
  };

  const center = {
    lat: 16.4641195,
    lng: -61.481819,
  };
  const position = {
    lat: 16.4641195,
    lng: -61.481819,
  };

  const onLoad = (marker: any) => {};

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCWJA59jYthTHsj5PKlYFvRwbGyY6Z09wQ">
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <MarkerF
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
            onLoad={onLoad}
            position={position}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
