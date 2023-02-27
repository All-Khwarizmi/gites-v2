import React from 'react'



const Video = () => {
  return (
    <section id="section-1" className="video">
      <video
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
        poster="./kawan.jpg"
        src={
          "heroVideo"
        }
      ></video>
    </section>
  );
}

export default Video