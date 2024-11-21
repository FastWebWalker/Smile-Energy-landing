// import React, { useEffect, useState } from "react";
// import ContentContainer from "../../UI/ContentContainer";
// import Description from "../../UI/Description";
// import Title from "../../UI/Title";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import logo1 from "../../../images/sections/gallery/logo1.svg";
// import logo2 from "../../../images/sections/gallery/logo2.svg";
// import logo3 from "../../../images/sections/gallery/logo3.svg";
// import logo4 from "../../../images/sections/gallery/logo4.svg";
// import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
// import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
// import { cadcam } from "../../../data/images/cadcam";
// import { cadStudio } from "../../../data/images/cadStudio";
// import { contour } from "../../../data/images/contour";
// import { senergy } from "../../../data/images/senergy";
// import ImageModal from "./ImageModal";
// import "./arrow-icon-swiper.css";
// import { useMediaQuery } from "@mui/material";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const logos = [
//   { name: "contour", image: logo1 },
//   { name: "senergy", image: logo2 },
//   { name: "cadcam", image: logo3 },
//   { name: "cadStudio", image: logo4 },
// ];

// const GallerySection = () => {
//   const [currentCompany, setCurrentCompany] = useState("contour");
//   const [currentImages, setCurrentImages] = useState(contour);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const isLargeDesktop = useMediaQuery("(min-width:1280px)");
//   const isDesktop = useMediaQuery("(min-width:1024px) and (max-width:1280px)");
//   const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
//   const isMobile = useMediaQuery("(max-width:767px)");

//   function handleSelectData() {
//     switch (currentCompany) {
//       case "contour":
//         setCurrentImages(contour);
//         setCurrentImageIndex(0);
//         break;
//       case "cadStudio":
//         setCurrentImages(cadStudio);
//         setCurrentImageIndex(0);
//         break;
//       case "cadcam":
//         setCurrentImages(cadcam);
//         setCurrentImageIndex(0);
//         break;
//       case "senergy":
//         setCurrentImages(senergy);
//         setCurrentImageIndex(0);
//         break;
//       default:
//         return [];
//     }
//   }

//   useEffect(() => {
//     handleSelectData();
//   }, [currentCompany]);

//   const handleImageClick = (index) => {
//     setCurrentImageIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section className="py-[90px]">
//       <ContentContainer>
//         <div className="flex justify-between items-center gap-2 mb-[46px]">
//           <Title>Gallery of works</Title>
//           <Description className="max-w-[437px] text-right">
//             Check out all our works and make sure of our professionalism!
//           </Description>
//         </div>

//         <div className="flex items-center justify-center gap-[140px] mb-[32px]">
//           {logos.map((logo) => (
//             <button onClick={() => setCurrentCompany(logo.name)}>
//               <img src={logo.image} alt={logo.name} />
//             </button>
//           ))}
//         </div>
//       </ContentContainer>

//       <div className="relative z-0 ">
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={162}
//           slidesPerView={2}
//           centeredSlides={true}
//           navigation={{
//             nextEl: ".swiper-next-gallery",
//             prevEl: ".swiper-prev-gallery",
//             enabled: true,
//             hideOnClick: false,
//           }}
//           loop={true}
//           speed={1000}
//           className="gallery-swiper"
//           breakpoints={{
//             640: {
//               slidesPerView: 2.5,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 2.5,
//               spaceBetween: 30,
//             },
//             1280: {
//               slidesPerView: 2.5,
//               spaceBetween: 30,
//             },
//           }}
//           onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}>
//           <button className="swiper-prev-gallery group absolute left-[calc(25%-1.25%)] top-1/2  -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-black hover:bg-redCustom hover:text-white transition-colors duration-300 z-10">
//             <img
//               src={arrowLeft}
//               className="arrow-icon filter brightness-0 group-hover:brightness-100"
//               alt="arrow-left"
//             />
//           </button>
//           {currentImages.map((image, index) => (
//             <SwiperSlide
//               onClick={() => handleImageClick(index)}
//               key={index}
//               className="transition-opacity duration-500 z-50">
//               {({ isActive }) => (
//                 <div
//                   className={`transition-all duration-500
//                     relative overflow-hidden
//                     ${
//                       isActive
//                         ? "opacity-100 scale-100"
//                         : " scale-[0.70] transition-all duration-500"
//                     }
//                   `}>
//                   <img
//                     src={image}
//                     alt={`Gallery image ${index + 1}`}
//                     className="w-[40.41vw] h-[400px] object-cover z-50"
//                   />
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//           <button className="swiper-next-gallery group absolute right-[calc(25%-1.25%)] top-1/2 -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10">
//             <img
//               src={arrowRight}
//               className="arrow-icon filter brightness-0 group-hover:brightness-100"
//               alt="arrow-right"
//             />
//           </button>
//         </Swiper>
//       </div>
//       {isModalOpen && (
//         <ImageModal
//           images={currentImages}
//           initialIndex={currentImageIndex}
//           onClose={handleModalClose}
//         />
//       )}
//     </section>
//   );
// };

// export default GallerySection;

import React, { useEffect, useState } from "react";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import logo1 from "../../../images/sections/gallery/logo1.svg";
import logo2 from "../../../images/sections/gallery/logo2.svg";
import logo3 from "../../../images/sections/gallery/logo3.svg";
import logo4 from "../../../images/sections/gallery/logo4.svg";
import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
import { cadcam } from "../../../data/images/cadcam";
import { cadStudio } from "../../../data/images/cadStudio";
import { contour } from "../../../data/images/contour";
import { senergy } from "../../../data/images/senergy";
import ImageModal from "./ImageModal";
import "./arrow-icon-swiper.css";
import { useMediaQuery } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logos = [
  { name: "contour", image: logo1 },
  { name: "senergy", image: logo2 },
  { name: "cadcam", image: logo3 },
  { name: "cadStudio", image: logo4 },
];

const GallerySection = () => {
  const [currentCompany, setCurrentCompany] = useState("contour");
  const [currentImages, setCurrentImages] = useState(contour);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLargeDesktop = useMediaQuery("(min-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1024px) and (max-width:1280px)");
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");

  function handleSelectData() {
    switch (currentCompany) {
      case "contour":
        setCurrentImages(contour);
        setCurrentImageIndex(0);
        break;
      case "cadStudio":
        setCurrentImages(cadStudio);
        setCurrentImageIndex(0);
        break;
      case "cadcam":
        setCurrentImages(cadcam);
        setCurrentImageIndex(0);
        break;
      case "senergy":
        setCurrentImages(senergy);
        setCurrentImageIndex(0);
        break;
      default:
        return [];
    }
  }

  useEffect(() => {
    handleSelectData();
  }, [currentCompany]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="lg:py-[90px] md:py-[60px] py-[30px]">
      <ContentContainer>
        <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-2 gap-y-[24px] mb-[46px]">
          <Title>Gallery of works</Title>
          <Description className="lg:max-w-[437px] lg:text-right">
            Check out all our works and make sure of our professionalism!
          </Description>
        </div>

        <div className="flex items-center md:justify-center sm:justify-between justify-center  lg:gap-[140px] gap-[35px] lg:mb-[32px] md:flex-nowrap flex-wrap mb-[32px]">
          {logos.map((logo) => (
            <button onClick={() => setCurrentCompany(logo.name)}>
              <img src={logo.image} alt={logo.name} />
            </button>
          ))}
        </div>
      </ContentContainer>

      <div className="relative z-0 ">
        {isMobile && (
          <ContentContainer>
            <div className="flex gap-[24px] mb-[16px]">
              <button className="swiper-prev-gallery group  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-black hover:bg-redCustom hover:text-white transition-colors duration-300 z-10">
                <img
                  src={arrowLeft}
                  className="arrow-icon filter brightness-0 group-hover:brightness-100"
                  alt="arrow-left"
                />
              </button>
              <button className="swiper-next-gallery group    flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10">
                <img
                  src={arrowRight}
                  className="arrow-icon filter brightness-0 group-hover:brightness-100"
                  alt="arrow-right"
                />
              </button>
            </div>
          </ContentContainer>
        )}

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
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
            // Mobile first approach
            320: {
              slidesPerView: 1,
              spaceBetween: "10%",
            },
            // Tablet
            640: {
              slidesPerView: 1,
              spaceBetween: "10%",
            },
            // Desktop
            1024: {
              slidesPerView: 1,
              spaceBetween: "10%",
            },
            // Large Desktop
            1280: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}>
          {!isMobile && (
            <button className="swiper-prev-gallery group absolute xl:left-[calc(25%-1.25%)] left-[3%] top-1/2  -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-black hover:bg-redCustom hover:text-white transition-colors duration-300 z-10">
              <img
                src={arrowLeft}
                className="arrow-icon filter brightness-0 group-hover:brightness-100"
                alt="arrow-left"
              />
            </button>
          )}
          {currentImages.map((image, index) => (
            <SwiperSlide
              onClick={() => handleImageClick(index)}
              key={index}
              className="transition-opacity duration-500 z-50">
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500
                    relative overflow-hidden flex justify-center
                    ${
                      isActive
                        ? "opacity-100 scale-100"
                        : " scale-[0.70] transition-all duration-500"
                    }
                  `}>
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="xl:w-full md:w-[65.6%] w-[90%] md:h-[400px] h-[300px] object-cover z-50"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
          {!isMobile && (
            <button className="swiper-next-gallery group absolute xl:right-[calc(25%-1.25%)] right-[3%] top-1/2 -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10">
              <img
                src={arrowRight}
                className="arrow-icon filter brightness-0 group-hover:brightness-100"
                alt="arrow-right"
              />
            </button>
          )}
        </Swiper>
      </div>
      {isModalOpen && (
        <ImageModal
          images={currentImages}
          initialIndex={currentImageIndex}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default GallerySection;
