import React from 'react'
import { IKImage, IKVideo, IKContext, IKUpload } from "imagekitio-react";


const Video = () => {
  return (
    <section id="section-1" className="video">
      {/*   <video
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
        poster="/Gite Kawan/1.jpg"
        src={"/Mon film.mp4"}
        
      >
       
      </video> */}
      <IKContext urlEndpoint="https://ik.imagekit.io/montresor/"></IKContext>
    </section>
  );
}

export default Video