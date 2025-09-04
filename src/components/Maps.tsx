import React from "react";

/* https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h */
const Maps = ({ coords }: any) => {
  const { width, height } = coords;

  const mapContainerStyle = {
    width,
    height,
  };

  return (
    <div className="flex justify-center items-center">
      <iframe
        style={mapContainerStyle}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8947654321!2d-61.4847141!3d16.4645595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c133104d554b2bd%3A0x36ef5cfef0b588d1!2sLes%20G%C3%AEtes%20Mon%20Tr%C3%A9sor!5e0!3m2!1sfr!2sfr!4v1693834567890!5m2!1sfr!2sfr"
      />
    </div>
  );
};

export default Maps;
