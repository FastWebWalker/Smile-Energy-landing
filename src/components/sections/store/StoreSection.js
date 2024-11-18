import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import teethImage from "../../../images/sections/store/teeth.jpg";
import Button from "../../UI/Button";

export default function StoreSection() {
  return (
    <section className="pt-[90px] pb-[49px] mb-[31px] bg-white relative ">
      <span className="absolute w-[0.5px] bg-redCustom h-[100%] top-0 left-[50%] opacity-[20%]"></span>
      <span className="absolute w-[100%] bg-redCustom h-[0.5px] bottom-0 left-0 opacity-[20%]"></span>
      <ContentContainer>
        <div className="flex justify-between items-center gap-2">
          {/* Flex Column for Text Content */}
          <div className="flex flex-col gap-[32px] flex-grow-0 flex-shrink-0 basis-[49.04%]">
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
          <div className="flex-grow-0 flex-shrink-0 basis-[44.411%]">
            <img src={teethImage} alt="teeth-image" className="w-full h-auto" />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
