import ContinuousCarousel from "../../animation/ContinuosCarousel";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import { useTranslation } from "react-i18next";

export default function TrustedSection() {
  const { t } = useTranslation();
  return (
    <div className="lg:pt-[90px] md:pt-[60px] pt-[30px] lg:pb-[60px] pb-[30px] bg-[#111111]">
      <ContentContainer>
        <div className="flex justify-between lg:items-center lg:mb-[46px] md:mb-[40px] mb-[32px] lg:flex-row  [@media(max-width:1024px)]:flex-col">
          <Title className="text-white  [@media(max-width:1024px)]:mb-[24px]">
            {t("trustedSection.title")}
          </Title>
          <Description className="text-white lg:max-w-[557px] lg:text-right">
            {t("trustedSection.description")}
          </Description>
        </div>
        <ContinuousCarousel />
      </ContentContainer>
    </div>
  );
}
