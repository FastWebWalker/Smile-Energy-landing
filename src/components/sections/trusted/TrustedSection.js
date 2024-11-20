import ContinuousCarousel from "../../animation/ContinuosCarousel";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";

export default function TrustedSection() {
  return (
    <div className="lg:pt-[90px] md:pt-[60px] pt-[30px] lg:pb-[60px] pb-[30px] bg-[#111111]">
      <ContentContainer>
        <div className="flex justify-between lg:items-center lg:mb-[46px] md:mb-[40px] mb-[32px] lg:flex-row  [@media(max-width:1024px)]:flex-col">
          <Title className="text-white  [@media(max-width:1024px)]:mb-[24px]">
            Trusted partners
          </Title>
          <Description className="text-white lg:max-w-[557px] lg:text-right">
            Thanks to its experience, skills and high qualifications, we will
            become a reliable partner for you, and will offer exactly the
            solutions you and your patients need.
          </Description>
        </div>
        <ContinuousCarousel />
      </ContentContainer>
    </div>
  );
}
