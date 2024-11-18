import React, { useState } from "react";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import logo1 from "../../../images/sections/gallery/logo1.svg";
import logo2 from "../../../images/sections/gallery/logo2.svg";
import logo3 from "../../../images/sections/gallery/logo3.svg";
import logo4 from "../../../images/sections/gallery/logo4.svg";
import image1 from "../../../images/sections/gallery/gallery1.png";
import image2 from "../../../images/sections/gallery/gallery2.png";
import image3 from "../../../images/sections/gallery/gallery3.png";
import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
import arrowRight from "../../../images/sections/reviews/arrow-right.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [image1, image2, image3, image1, image2, image3];
const logos = [
  { name: "contour", image: logo1 },
  { name: "senergy", image: logo2 },
  { name: "cad-cam", image: logo3 },
  { name: "cad-studio", image: logo4 },
];

const GallerySection = () => {
  const [currentCompany, setCurrentCompany] = useState("contour");
  console.log(currentCompany);

  return (
    <section className="py-[90px]">
      <ContentContainer>
        <div className="flex justify-between items-center gap-2 mb-[46px]">
          <Title>Gallery of works</Title>
          <Description className="max-w-[437px] text-right">
            Check out all our works and make sure of our professionalism!
          </Description>
        </div>

        <div className="flex items-center justify-center gap-[140px] mb-[32px]">
          {logos.map((logo) => (
            <button onClick={() => setCurrentCompany(logo.name)}>
              <img src={logo.image} alt={logo.name} />
            </button>
          ))}
        </div>
      </ContentContainer>

      <div className="relative z-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={162}
          slidesPerView={2}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-next-gallery",
            prevEl: ".swiper-prev-gallery",
            enabled: true,
            hideOnClick: false,
          }}
          loop={true}
          speed={1000}
          className="gallery-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}>
          <button className="swiper-prev-gallery absolute left-[calc(25%-1.25%)] top-1/2  -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10">
            <img src={arrowLeft} alt="arrow-left" />
          </button>
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="transition-opacity duration-500 z-50">
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500
                    relative overflow-hidden
                    ${
                      isActive
                        ? "opacity-100 scale-100"
                        : " scale-[0.70] transition-all duration-500"
                    }
                  `}>
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-[40.41vw] max-h-[400px] object-cover object-bottom z-50"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
          <button className="swiper-next-gallery absolute right-[calc(25%-1.25%)] top-1/2 -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10">
            <img src={arrowRight} alt="arrow-right" />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;
