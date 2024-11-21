import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import teethImage from "../../../images/sections/store/teeth.jpg";
import Button from "../../UI/Button";

export default function StoreSection() {
  return (
    <section className="lg:pt-[90px] md:pt-[60px] pt-[30px] lg:pb-[49px] md:pb-[35px] pb-[]  mb-[31px] bg-white relative ">
      <span className="absolute w-[0.5px] bg-redCustom h-[100%] top-0 left-[50%] opacity-[20%]"></span>
      <span className="absolute w-[100%] bg-redCustom h-[0.5px] bottom-0 left-0 opacity-[20%]"></span>
      <ContentContainer>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-2">
          {/* Flex Column for Text Content */}
          <div className="flex flex-col lg:gap-[32px] gap-[20px] flex-grow-0 flex-shrink-0 xl:basis-[49.04%] basis-[40%]  [@media(max-width:1024px)]:mb-[74px] [@media(max-width:600px)]:mb-[32px]">
            <Title>Our online store - SeTrade</Title>
            <Description className="text-[#191919]">
              Every smile is an expression of personality and careful attitude
              to health. In this regard, high-quality dental materials and
              dental equipment are important components of the process of their
              creation. SeTrade online store of dental materials is a look at
              the new generation of dentistry. In this context, it embodies the
              concept of accessibility of the most modern means, creating
              opportunities for professional development and achieving the
              highest standards in the field of oral health.
            </Description>
            <div className="flex-grow-0">
              <Button variant="red-white">Our Store</Button>
            </div>
          </div>

          {/* Flex Column for Image */}
          <div className="flex-grow-0 flex-shrink-0 lg:basis-[44.411%] basis-[100%] [@media(max-width:1024px)]:w-[100%] ">
            <img src={teethImage} alt="teeth-image" className="w-full h-auto" />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
