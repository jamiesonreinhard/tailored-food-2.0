/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { galleryVideos } from "@/data/galleryVideos";

const Gallery = ({ images }) => {
    const [lastVideoIndex, setLastVideoIndex] = useState(3);
    const [lastImageIndex, setLastImageIndex] = useState(6);

    const showMoreVideos = () => {
        if (lastVideoIndex < galleryVideos.length) {
            setLastVideoIndex(lastVideoIndex + 10);
        }
    }

    const showMorePhotos = () => {
        if (lastImageIndex < images.length) {
            setLastImageIndex(lastImageIndex + 6);
        }
    }

    return (
        <div className="flex flex-col w-full mx-auto justify-start">

            {/* VIDEOS AND PHOTOS */}
            <div className="flex flex-col w-[90%] max-w-[1140px] mx-auto pb-[40px] md:pb-[120px]">
                {/* VIDEOS */}
                <div className="flex flex-col w-full gap-[36px] mb-[100px]">
                    <h2 className="h2-bold text-[24px] md:text-[40px]">Videos</h2>
                    <div className="flex w-full flex-wrap justify-center lg:justify-start gap-[36px]">
                        {galleryVideos.slice(0, lastVideoIndex).map((video, index) => (
                            <div key={index} className="flex flex-col items-start gap-[32px] w-[540px]">
                                <div className="w-full media-card-shadow rounded-[26px] flex items-center justify-center h-[400px]">
                                    <div className="w-[90%] h-[90%] bg-lightGrey rounded-[26px] flex items-center justify-center">Placeholder</div>
                                </div>
                                <div className="flex flex-col gap-[4px] md:gap-[24px] px-[32px] w-full">
                                    <h4 className="h4-bold text-[16px] md:text-[24px]">{video.title}</h4>
                                    <p className="p-body">{video.caption}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                    {lastVideoIndex < galleryVideos.length && (
                        <button
                            className="btn btn-outline-primary gap-[8px] mr-auto"
                            onClick={showMoreVideos}
                        >
                            View More
                            <img src="/images/icons/down-blue.svg" alt="down" />
                        </button>
                    )}

                </div>
                {/* PHOTOS */}
                <div className="flex flex-col gap-[36px] mb-[100px]">
                    <h2 className="h2-bold text-[24px] md:text-[40px]">Photos</h2>
                    <div className="flex w-full flex-wrap justify-center gap-[24px]">
                        {images.slice(0, lastImageIndex).map((imageName, index) => (
                            <div key={index} className="flex flex-col gap-[8px] w-[360px]">
                                <img src={`/images/gallery/${imageName}`} alt={imageName} className="w-full h-[300px] object-cover rounded-[24px]" />
                                {/* You don't have captions here based on your logic. If you want captions, you'll need a more complex data structure. */}
                                {/* <p className="caption text-grey">{image.caption}</p> */}
                            </div>
                        ))}
                    </div>
                    {lastImageIndex < images.length && (
                        <button
                            className="btn btn-outline-primary gap-[8px] mr-auto"
                            onClick={showMorePhotos}
                        >
                            View More
                            <img src="/images/icons/down-blue.svg" alt="down" />
                        </button>
                    )}
                </div>
            </div>


        </div>
    )
}

export default Gallery;