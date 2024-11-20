import React from "react";
import BackgroundImageWrapper from "../../UI/BackgroundImageWrapper";
import backgroundHero from "../../../images/sections/hero/74a195c465f1a92003b3cd88a0da79e2.png";
import ContentContainer from "../../UI/ContentContainer";
import MainTitleBlock from "./MainTitleBlock";
import Button from "../../UI/Button";
import company1 from "../../../images/sections/hero/company1.svg";
import company2 from "../../../images/sections/hero/company2.svg";
import company3 from "../../../images/sections/hero/company3.svg";
import company4 from "../../../images/sections/hero/company4.svg";
import company5 from "../../../images/sections/hero/company5.svg";
import Description from "../../UI/Description";
import { useMediaQuery } from "@mui/material";

const HeroSection = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <section className="relative">
      {/* Background layer */}
      <BackgroundImageWrapper
        imageUrl={backgroundHero}
        className="h-screen min-w-screen grayscale absolute inset-0 z-0"
        style={{ backgroundPosition: "center 61%" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </BackgroundImageWrapper>

      {/* Content layer */}
      <div className="relative z-60 lg:pt-[240px] md:pt-[130px] pt-[92px] lg:pb-[90px] md:pb-[56px] pb-[48px]">
        <ContentContainer>
          <div className="flex flex-col">
            {isTablet && (
              <div className="w-[100%] flex justify-end items-center">
                <Description className="text-white max-w-[350px] mb-[45px] justify-end">
                  Unlock the potential of your smile with our advanced solutions
                  for dental laboratories, orthopedics and implantology.
                </Description>
              </div>
            )}
            <MainTitleBlock />
            {(isTablet || isMobile) && (
              <Description className=" text-white max-w-[324px] mt-8">
                Don't waste time!
                <br /> Order a call now and find out all the details.
              </Description>
            )}
            <div className="flex gap-3 lg:mb-[78px] md:mb-[85px] mb-[28px]  mt-[32px]">
              <Button variant="red-white" className="bg-redCustom">
                Our Store
              </Button>
              <Button variant="white-white">Order A Call</Button>
            </div>
            <div className="flex lg:justify-start lg:h-[42px] md:h-[50px] h-[42px] justify-center items-center gap-3 flex-wrap [@media(max-width:767px)]:mb-[48px]">
              <img src={company1} className="h-full opacity-70" />
              <img src={company2} className="h-full opacity-70" />
              <img src={company3} className="h-full opacity-70" />
              <img src={company4} className="h-full opacity-70" />
              <img src={company5} className="h-full opacity-70" />
            </div>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

export default HeroSection;
