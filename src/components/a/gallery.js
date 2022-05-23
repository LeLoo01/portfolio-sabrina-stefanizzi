import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";

import './gallery.css'

const Gallery =()=> {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    
    "https://i.ibb.co/YW0GXng/IMG-0917.jpg",
    "https://i.ibb.co/8XNY0vc/IMG-0607.jpg",
    "https://i.ibb.co/WG6tJpW/cat6.png",
    "https://i.ibb.co/s3XFM1c/reflet1.png",
    "https://i.ibb.co/bdWmGwG/jpn4.png",
    "https://i.ibb.co/VgXvtJF/ombre1.png",
    "https://i.ibb.co/BCwVjvt/cat1.png",
    "https://i.ibb.co/Dgq19tQ/jpn5.png",
    "https://i.ibb.co/tmkQdQf/jpn7.png",
    "https://i.ibb.co/9tQmcx6/cat2.png",
    "https://i.ibb.co/CJ7tzjx/ombre2.png",
    "https://i.ibb.co/kByRKVq/ombre4.png",
    "https://i.ibb.co/y5Y40NK/ombre3.png",
    "https://i.ibb.co/wdVTMx9/others4.png",
    "https://i.ibb.co/DtKFBYg/jpn6.png",
    "https://i.ibb.co/WW20jpr/ombre8.png",
    "https://i.ibb.co/vPF51K3/ombre5.png",
    "https://i.ibb.co/1ZYf0Jh/others1.png",
    "https://i.ibb.co/FXdrGk7/cat7.png",
    "https://i.ibb.co/vDhT4Lc/jpn12.png",
    "https://i.ibb.co/Sf84LsN/jpn13.png",
    "https://i.ibb.co/Wsftx6Y/ombre12.png",
    "https://i.ibb.co/LZCMsPj/ombre13.png",
    "https://i.ibb.co/mG7xFDQ/others7.png",
    "https://i.ibb.co/GQrWLQJ/others8.png",
    "https://i.ibb.co/yVxkxtJ/others9.png",
    "https://i.ibb.co/Y8xKnhX/jpn8.png",
    "https://i.ibb.co/yg2c4G9/reflet4.png",
    "https://i.ibb.co/XFNsZD3/jpn10.png",
    "https://i.ibb.co/y6QSbvT/jpn9.png", 
    "https://i.ibb.co/pQbHYsL/jpn11-png.png",
    " https://i.ibb.co/WFVs14j/ombre9.png",
    "https://i.ibb.co/VqHGFPL/others3.png ",
    "https://i.ibb.co/sW0yTgf/others5.png",
    "https://i.ibb.co/NNt1zW9/sky4.png ",
    " https://i.ibb.co/KNQ2qQ0/sky5.png",
    "https://i.ibb.co/8mc7ymy/sky6.png ",
    " https://i.ibb.co/gRb7b3f/sky7.png",
    " https://i.ibb.co/tYbDvL9/sky8.png",
    " https://i.ibb.co/NjWcZ5D/snow1.png",
    "https://i.ibb.co/jvFNGHS/thai1.png",
    "https://i.ibb.co/dKcSrqm/thai2.png",
    "https://i.ibb.co/MBW4HCg/thai3.png",
  
    
  ];
  
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="divImag">
      {images.map((src, index) => (
        <img 
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ 
          margin: "5px"
          
        }}
          alt=""
         
          
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}

export default Gallery ;

