import React from "react";
import FadeInUp from "../animation/FadeInUp";
import ParallaxImage from "../animation/ParallaxImage";
import parallaxImage from "../../images/1350069.jpeg";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <FadeInUp>
          <h1>Welcome to Our Landing Page</h1>
        </FadeInUp>
        <FadeInUp delay={0.5}>
          <p>Discover the power of our product or service.</p>
        </FadeInUp>
        <FadeInUp delay={1}>
          <button className="cta-button">Get Started</button>
        </FadeInUp>
      </div>

      <ParallaxImage src={parallaxImage} alt="Hero Image" />
    </section>
  );
};

export default HeroSection;
