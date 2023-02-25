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
        src={"/Mon film.mp4"}
        
      >
       
      </video>
     <div className='div-test' style={{ background-image: url("/Mon film.mp4"),
  height: 100vh;}} ></div>
    </section>
  );
}

export default Video