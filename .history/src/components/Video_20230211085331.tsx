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
        poster="/Gite Kawan/1.jpg"
      >
        <source src={"/Mon film.mp4"} type="video/mp4" />
      </video>
      <div className=''>

      </div>
    </section>
  );
}

export default Video