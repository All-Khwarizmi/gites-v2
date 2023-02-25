import React from 'react'
import { IKImage, IKVideo, IKContext, IKUpload } from "imagekitio-react";


const Video = () => {
  return (
    <section id="section-1" className="video">
      <video
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
        poster="https://ik.imagekit.io/montresor/Kawan/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676123040794"
        src={
          "https://ik.imagekit.io/montresor/Mon_film_2.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676104658041"
        }
      ></video>
    </section>
  );
}

export default Video