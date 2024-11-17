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

const HeroSection = () => {
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
      <div className="relative z-10 pt-[240px] pb-[90px]">
        <ContentContainer>
          <div className="flex flex-col">
            <MainTitleBlock />
            <div className="flex gap-3 mb-[78px] mt-[32px]">
              <Button variant="red-white" className="bg-redCustom">
                Our Store
              </Button>
              <Button variant="white-white">Order A Call</Button>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={company1} />
              <img src={company2} />
              <img src={company3} />
              <img src={company4} />
              <img src={company5} />
            </div>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

export default HeroSection;
