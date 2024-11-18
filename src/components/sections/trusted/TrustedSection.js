import ContinuousCarousel from "../../animation/ContinuosCarousel";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";

export default function TrustedSection() {
  return (
    <div className="pt-[90px] pb-[60px] bg-[#111111]">
      <ContentContainer>
        <div className="flex justify-between items-center mb-[46px]">
          <Title className="text-white">Trusted partners</Title>
          <Description className="text-white max-w-[557px] text-right">
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
