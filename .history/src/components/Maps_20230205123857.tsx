import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 16.4645595,
  lng: -61.4847141,
};
const position = {
  lat: 37.772,
  lng: -122.214,
};

const paths = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 25.774, lng: -80.19 },
];

const options = {
  fillColor: "lightblue",
  fillOpacity: 1,
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};


/* https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h */
const Maps = () => {
  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCWJA59jYthTHsj5PKlYFvRwbGyY6Z09wQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Polygon onLoad={onLoad} paths={paths} options={options} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
