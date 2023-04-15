/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";


const images = [
  "images/gallery/1c732878-138a-4601-9387-c513cfef2f41.JPG",
  "images/gallery/2fe0a9ba-98a3-4acb-b637-fb01eb076929.JPG",
  "images/gallery/11C38ACA-A652-4A68-961F-563BE613A2B6.jpg",
  "images/gallery/134E5FFD-3A7E-4CFD-A4F2-18A8B728AA13.JPG",
  "images/gallery/902FC283-C591-492A-A745-EF8079791BD5.JPG",
  "images/gallery/B51E4224-A7B3-45DB-9A97-D232AC0B8178.JPG",
  "images/gallery/bc54d6e1-8d6e-4f46-a708-26afa03cf22c.JPG",
  "images/gallery/d6143f10-b2b3-4b03-863a-e3e538047ea2.JPG",
  "images/gallery/D7758042-1832-4BB8-BB02-5EBFDDEFF6D9.JPG",
  "images/gallery/E677B23B-0F15-4BAC-94A9-2F5CB596A90E.JPG",
  "images/gallery/EAD9A97A-4750-4508-A976-D207879BB6A9_1.JPG",
  "images/gallery/IMG_0156.jpg",
  "images/gallery/IMG_0730.jpg",
  "images/gallery/IMG_1674.JPG",
  "images/gallery/IMG_1788.jpg",
  "images/gallery/IMG_2624.jpg",
  "images/gallery/IMG_4950.jpg",
  "images/gallery/IMG_5237.jpg",
  "images/gallery/IMG_5673.jpg",
  "images/gallery/IMG_5929.JPG",
  "images/gallery/IMG_7497.JPG",
  "images/gallery/IMG_7581.jpg",
  "images/gallery/IMG_8853.jpg",
  "images/gallery/IMG_9813 2.jpg",
  "images/gallery/IMG_9814.JPG",
  "images/gallery/IMG_9827.jpg",
  "images/gallery/IMG_6896.jpg",
  "images/gallery/IMG_7428.jpg",
  "images/gallery/IMG_7500.jpg",
  "images/gallery/IMG_8601.jpg",
  "images/gallery/IMG_9481.jpg"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    const newIndex = (selectedImageIndex + images.length - 1) % images.length;
    setSelectedImage(images[newIndex]);
    setSelectedImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setSelectedImageIndex(newIndex);
  };

  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-[40px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[400px] h-[400px]"
            >
              <img
                src={image}
                alt={image}
                className="w-full h-full cursor-pointer object-cover"
                onClick={() => openImage(index)}
              />
            </div>
          ))}
          {selectedImage && (
            <div className="fixed w-full h-full top-0 left-0 bg-black/[0.8]">
              <div
                className="fixed top-[50%] left-[50%] w-[50%] max-h-[70%] flex items-center justify-center
                -translate-x-[50%] -translate-y-[50%] overflow-hidden bg-black object-contain"
              >
                <img src={selectedImage} alt={selectedImage} className="object-contain w-full h-full" />
                <HiArrowCircleRight
                  color="white"
                  onClick={nextImage}
                  className="absolute top-1/2 right-[12px] transform -translate-y-1/2 w-[60px] h-[60px] cursor-pointer"
                />
                <HiArrowCircleLeft
                  color="white"
                  onClick={prevImage}
                  className="absolute top-1/2 left-[12px] transform -translate-y-1/2 w-[60px] h-[60px] cursor-pointer"
                />
                <AiFillCloseCircle
                  color="white"
                  className="absolute top-[24px] right-[24px] w-[40px] h-[40px] cursor-pointer"
                  onClick={closeImage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
