import React from 'react'

export async function name(params:type) {
    
}

const Video = () => {
  return (
    <section id="section-1" className="video">
      <video
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
        poster="/Gite Kawan/1.jpg"
      >
        <source src={"/Mon film.mp4"} type="video/mp4" />
      </video>
    </section>
  );
}

export default Video