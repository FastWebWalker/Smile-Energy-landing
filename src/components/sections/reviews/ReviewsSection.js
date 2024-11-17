// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import ContentContainer from "../../UI/ContentContainer";
// import Title from "../../UI/Title";

// import "swiper/css";
// import "swiper/css/navigation";

// import review1 from "../../../images/sections/reviews/image1.png";
// import review2 from "../../../images/sections/reviews/image2.png";
// import review3 from "../../../images/sections/reviews/image3.png";
// import review4 from "../../../images/sections/reviews/image4.png";
// import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
// import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";

// const reviews = [
//   {
//     name: "Hrynyk Rustam",
//     position: "Dentist, Lviv",
//     image: review1,
//     quote:
//       "The most important thing in the high-quality work of an orthopedist is the high-quality work of a technician... Thank you to Serhiy Hrybovskiy's laboratory!",
//   },
//   {
//     name: "Ewan Bramley",
//     position: "Dentist, United Kingdom",
//     image: review2,
//     quote:
//       "Thank you Serhiy! I am so grateful to have met you and found your fantastic dental lab. All the best to you and your family for 2020. Let's make it a fantastic year for us both.",
//   },
//   {
//     name: "Hrynyk Rustam",
//     position: "Dentist, Lviv",
//     image: review3,
//     quote:
//       "The most important thing in the high-quality work of an orthopedist is the high-quality work of a technician... Thank you to Serhiy Hrybovskiy's laboratory!",
//   },
//   {
//     name: "Ewan Bramley",
//     position: "Dentist, United Kingdom",
//     image: review4,
//     quote:
//       "Thank you Serhiy! I am so grateful to have met you and found your fantastic dental lab. All the best to you and your family for 2020. Let's make it a fantastic year for us both.",
//   },
// ];

// export default function ReviewsSection() {
//   return (
//     <section className="py-16 bg-[#111111]">
//       <ContentContainer>
//         <div className="relative">
//           <div className="flex items-center justify-between mb-12">
//             <Title className="text-white">REVIEWS OF OUR CLIENTS</Title>
//             <div className="relative flex gap-[6px] justify-center items-center">
//               <button className="swiper-prev flex items-center justify-center w-20 h-10 rounded-[30px] border border-white text-white hover:bg-redCustom transition-colors duration-300">
//                 <img src={arrowLeft} alt="arrow-left" />
//               </button>
//               <button className="swiper-next flex items-center justify-center w-20 h-10 rounded-[30px] border border-white text-white hover:bg-redCustom transition-colors duration-300">
//                 <img src={arrowRight} alt="arrow-right" />
//               </button>
//             </div>
//           </div>

//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={30}
//             slidesPerView={2}
//             navigation={{
//               nextEl: ".swiper-next",
//               prevEl: ".swiper-prev",
//               enabled: true,
//               hideOnClick: false,
//             }}
//             loop={false}
//             speed={1000}
//             className="reviews-swiper">
//             {reviews.map((review, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex  gap-[21px]">
//                   <div className="flex-shrink-0">
//                     <img
//                       src={review.image}
//                       alt={review.name}
//                       className="w-full h-full object-cover rounded-sm"
//                     />
//                   </div>

//                   <div className="flex flex-col justify-between">
//                     <p className="flex-1 text-white leading-tight">
//                       "{review.quote}"
//                     </p>
//                     <div>
//                       <h3 className="flex-1 text-white text-[26px] font-normal">
//                         {review.name}
//                       </h3>
//                       <p className="text-white text-[20px]">
//                         {review.position}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </ContentContainer>

//       <style jsx global>{`
//         .swiper-button-next,
//         .swiper-button-prev {
//           display: none !important;
//         }

//         .reviews-swiper {
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ContentContainer from "../../UI/ContentContainer";
import Title from "../../UI/Title";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import review1 from "../../../images/sections/reviews/image1.png";
import review2 from "../../../images/sections/reviews/image2.png";
import review3 from "../../../images/sections/reviews/image3.png";
import review4 from "../../../images/sections/reviews/image4.png";
import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";

const reviews = [
  {
    name: "Hrynyk Rustam",
    position: "Dentist, Lviv",
    image: review1,
    quote:
      "The most important thing in the high-quality work of an orthopedist is the high-quality work of a technician... Thank you to Serhiy Hrybovskiy's laboratory!",
  },
  {
    name: "Ewan Bramley",
    position: "Dentist, United Kingdom",
    image: review2,
    quote:
      "Thank you Serhiy! I am so grateful to have met you and found your fantastic dental lab. All the best to you and your family for 2020. Let's make it a fantastic year for us both.",
  },
  {
    name: "Pidhoretskiy Ruslan",
    position: "Dentist, Kyiv",
    image: review3,
    quote:
      "A really cool laboratory. Laba, which is constantly developing, instantly responds to a call, is always in touch. All work is done on time, according to the given terms... Pleasant cooperation that has been going on for years.",
  },
  {
    name: "Hubal Myroslav",
    position: "Dentist, Khust",
    image: review4,
    quote:
      "I wanted to work with a digital laboratory. People always hear me here. Everything was done in the promised time.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-[#111111]">
      <ContentContainer>
        <div className="relative">
          <div className="flex items-center justify-between mb-12">
            <Title className="text-white">REVIEWS OF OUR CLIENTS</Title>
            <div className="relative flex gap-[6px] justify-center items-center">
              <button className="swiper-prev flex items-center justify-center w-20 h-10 rounded-[30px] border border-white text-white hover:bg-redCustom transition-colors duration-300">
                <img src={arrowLeft} alt="arrow-left" />
              </button>
              <button className="swiper-next flex items-center justify-center w-20 h-10 rounded-[30px] border border-white text-white hover:bg-redCustom transition-colors duration-300">
                <img src={arrowRight} alt="arrow-right" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={72}
            slidesPerView={2}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              enabled: true,
              hideOnClick: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            loop={false}
            speed={1000}
            className="reviews-swiper">
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-[21px]">
                  <div className="flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="flex-1 text-white leading-tight">
                      “{review.quote}”
                    </p>
                    <div>
                      <h3 className="flex-1 text-white text-[26px] font-normal">
                        {review.name}
                      </h3>
                      <p className="text-white text-[20px]">
                        {review.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="swiper-custom-pagination flex justify-center mt-[52px]"></div>
        </div>
      </ContentContainer>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        .reviews-swiper {
          overflow: hidden;
        }

        /* Custom Pagination Styles */
        .swiper-custom-bullet {
          width: 37px;
          height: 1px;
          margin: 0 4px;
          display: inline-block;
          opacity: 0.5;
          background: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-custom-bullet-active {
          background: #a40004;
        }
      `}</style>
    </section>
  );
}
