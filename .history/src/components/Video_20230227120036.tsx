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
          "https://ik.imagekit.io/montresor/Mon_film_2.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=167610465801"
        }
      ></video>
    </section>
  );
}

export default Video