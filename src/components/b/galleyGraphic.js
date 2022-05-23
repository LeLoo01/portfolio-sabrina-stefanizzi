import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";

import '../b/gallerygraphic.css'

const GalleryGraphic = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [

        "https://i.ibb.co/GM1JyN1/strange-Portrait-2-4.png",
        "https://i.ibb.co/5hg63Xm/strange-Portrait-1-4.png",
        "https://i.ibb.co/RHfBGKJ/dblPage.png",
        "https://i.ibb.co/Xk5Tdsf/cover2.png",
        "https://i.ibb.co/zJzsPGm/ELP-TDM.png",
        "https://i.ibb.co/MRYHBGN/cover1.png"

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
        <div className="divImagGraph">
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

export default GalleryGraphic;

