import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../images/sections/popular/image1.jpg";
import image2 from "../../../images/sections/popular/image2.jpg";
import Button from "../../UI/Button";

const popular = [
  {
    image: image1,
    title: "AmeraLabs DMD-2/1 LED Sand",
    description: `A real miracle for creating dental models. Designed and manufactured to the highest
to the highest standards, it offers impeccable precision and stability. Its unique properties ensure outstanding quality of reproduction, making it one of the most of the most effective materials for creating dental models`,
  },
  {
    image: image2,
    title: "Slim Pad Pro - Build Up",
    description: `Takes a special place among ceramic ones products. It opens up new opportunities for dentists, giving them a wide palette for mixing ceramics that provides not only an impeccable result, but also incredible simplicity in work.`,
  },
];

export default function PopularSection() {
  return (
    <section className="bg-white pb-[90px]">
      <ContentContainer>
        <div className="flex justify-between items-center gap-2">
          <Title>Popular products</Title>
          <Description className="text-[#191919] max-w-[437px] text-right">
            The following materials are the most popular among the presented
            products
          </Description>
        </div>
        <div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={72}
            slidesPerView={1}
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
            className="popular-swiper">
            {popular.map((item, index) => (
              <SwiperSlide key={index} className="flex !important">
                <div className="flex justify-between items-center gap-2 pt-[42px]">
                  <div className="flex-grow-0 flex-shrink-1 flex-basis-[33.89%] w-[33.89%] flex justify-center items-center">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="flex-grow-0 flex-shrink-1 flex-basis-[59.11%] flex flex-col justify-between gap-[32px]">
                    <h3 className="text-[32px] leading-[38.73px] font-normal">
                      {item.title}
                    </h3>
                    <Description className="max-w-[804px]">
                      {item.description}
                    </Description>
                    <div className="flex-grow-0">
                      <Button variant="black-red">Read More</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="swiper-custom-pagination flex justify-center mt-[30px]"></div>
        </div>
      </ContentContainer>
    </section>
  );
}
