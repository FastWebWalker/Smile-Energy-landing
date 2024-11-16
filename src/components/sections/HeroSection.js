import React from "react";
import BackgroundImageWrapper from "../UI/BackgroundImageWrapper";
import backgroundHero from "../../images/sections/hero/74a195c465f1a92003b3cd88a0da79e2.png";

const HeroSection = () => {
  return (
    <section>
      <BackgroundImageWrapper
        imageUrl={backgroundHero}
        className="min-h-screen grayscale relative z-[-1000]"
        style={{ backgroundPosition: "center 61%" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div>content</div>
      </BackgroundImageWrapper>
    </section>
  );
};

export default HeroSection;
