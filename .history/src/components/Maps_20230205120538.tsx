import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 16.4645595,
  lng: -61.4847141,
};
/* https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h */
const Maps = () => {
   return (
     <LoadScript googleMapsApiKey="AIzaSyCWJA59jYthTHsj5PKlYFvRwbGyY6Z09wQ">
       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
         {/* Child components, such as markers, info windows, etc. */}
         <></>
       </GoogleMap>
     </LoadScript>
   );
};

export default Maps;
