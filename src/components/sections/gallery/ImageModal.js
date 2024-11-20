import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import x from "../../../images/sections/gallery/x.svg";
import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
import { useEffect } from "react";

const ImageModal = ({ images, initialIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to restore scrolling when modal closes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="w-full h-full relative">
        <button
          className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40"
          onClick={onClose}>
          <img src={x} className="w-[28px] h-[28px]" alt="close-button" />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-next-gallery-modal",
            prevEl: ".swiper-prev-gallery-modal",
          }}
          speed={1000}
          loop={true}
          onSlideChange={handleSlideChange}
          initialSlide={activeIndex}
          className="h-full w-full">
          <button className="swiper-prev-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 left-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-white text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
            <img
              src={arrowLeft}
              alt="arrow-left"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>

          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-[70%] h-[70%] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}

          <button className="swiper-next-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 right-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-white text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
            <img
              src={arrowRight}
              alt="arrow-right"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;
