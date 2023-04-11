import Layout from "@/components/layout";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const images = [
  "https://via.placeholder.com/600x600?text=Image+1",
  "https://via.placeholder.com/600x600?text=Image+2",
  "https://via.placeholder.com/600x600?text=Image+3",
  "https://via.placeholder.com/600x600?text=Image+4",
  "https://via.placeholder.com/600x600?text=Image+5",
  "https://via.placeholder.com/600x600?text=Image+6",
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openDialog = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {images.map((image) => (
            <button key={image} onClick={() => openDialog(image)}>
              <Image src={image} alt="Gallery image" width={600} height={600} />
            </button>
          ))}
        </div>
        <Transition appear show={isOpen} as={Dialog} onClose={closeDialog}>
          <div className="fixed inset-0 z-[500] overflow-y-auto">
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Dialog.Overlay}
                className="fixed inset-0 bg-white opacity-80"
              />
              <span
                className="absolute top-0 right-0 p-4 cursor-pointer"
                onClick={closeDialog}
              >
                <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center">
                    <XIcon className="h-6 w-6 text-white" />
                </div>
              </span>
              <div className="inline-block max-w-full my-20 sm:my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Layout>
  );
};

export default Gallery;
