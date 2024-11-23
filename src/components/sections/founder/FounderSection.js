import BackgroundImageWrapper from "../../UI/BackgroundImageWrapper";
import ContentContainer from "../../UI/ContentContainer";
import founder from "../../../images/sections/founder/About.png";
import Description from "../../UI/Description";
import group1 from "../../../images/sections/founder/Group1.svg";
import group2 from "../../../images/sections/founder/Group2.svg";
import group3 from "../../../images/sections/founder/Group3.svg";
import group4 from "../../../images/sections/founder/Group4.svg";
import group5 from "../../../images/sections/founder/Group5.svg";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FounderSection() {
  const isDesktopLarge = useMediaQuery("(min-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1024px) and (max-width: 1279px");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  const { t } = useTranslation();
  return (
    <>
      {!isMobile ? (
        <BackgroundImageWrapper imageUrl={founder}>
          <section className="py-[129px]">
            <ContentContainer>
              <div className="flex justify-end items-center text-white">
                <div className="flex flex-col justify-between gap-[97px] items-center">
                  <div className="flex flex-col">
                    <h3 className="font-normal text-[44px] mb-1">
                      {t("founderSection.name")}
                    </h3>
                    <p className="text-[20px] mb-8">
                      {t("founderSection.title")}
                    </p>
                    <Description className="lg:max-w-[667px] max-w-[400px]">
                      {t("founderSection.description")}
                    </Description>
                  </div>
                  {isDesktopLarge && (
                    <div className="flex flex-col items-start justify-start gap-[32px] -ml-5">
                      <h4 className="text-[32px] font-normal ">
                        {t("founderSection.labsTitle")}
                      </h4>
                      <div className="grid grid-cols-3 gap-x-[68px] gap-y-[12px]">
                        <a
                          href="https://contour-lab.com/"
                          className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                          <img src={group1} alt="logo-photo" />
                        </a>
                        <a
                          href="https://senergy-dental.com/"
                          className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                          <img src={group2} alt="logo-photo" />
                        </a>
                        <a
                          href="https://cadcam.energy/"
                          className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                          <img src={group3} alt="logo-photo" />
                        </a>
                        <a
                          href="https://www.setrade.com.ua/"
                          className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                          <img src={group4} alt="logo-photo" />
                        </a>
                        <a
                          href="https://dentalcad.online/"
                          className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                          <img src={group5} alt="logo-photo" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ContentContainer>
          </section>
        </BackgroundImageWrapper>
      ) : (
        <section className="bg-[#191919] pt-[30px]">
          <ContentContainer>
            <div className="flex justify-center flex-col gap-[30px] items-center text-white">
              <div className="flex flex-col justify-between gap-[97px] items-center">
                <div className="flex flex-col">
                  <h3 className="font-normal text-[44px] mb-1">
                    {t("founderSection.name")}
                  </h3>
                  <p className="text-[20px] mb-8">
                    {t("founderSection.title")}
                  </p>
                  <Description>{t("founderSection.description")}</Description>
                </div>
              </div>
              <div>
                <img src={founder} alt="founder" />
              </div>
            </div>
          </ContentContainer>
        </section>
      )}

      {(isMobile || isTablet || isDesktop) && (
        <div className=" bg-[#191919] md:py-[60px] py-[30px]">
          <ContentContainer className="flex flex-col items-start justify-start gap-[32px]">
            <h4 className="text-[32px] text-white lg:pb-[40px] font-normal ">
              {t("founderSection.labsTitle")}
            </h4>
            <div className="flex md:justify-between justify-start w-[100%] gap-x-[45px] gap-y-[12px] md:flex-nowrap flex-wrap z-20">
              <a
                href="https://contour-lab.com/"
                className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
                <img src={group1} alt="logo-photo" />
              </a>
              <a
                href="https://senergy-dental.com/"
                className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
                <img src={group2} alt="logo-photo" />
              </a>
              <a
                href="https://cadcam.energy/"
                className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
                <img src={group3} alt="logo-photo" />
              </a>
              <a
                href="https://www.setrade.com.ua/"
                className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
                <img src={group4} alt="logo-photo" />
              </a>
              <a
                href="https://dentalcad.online/"
                className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
                <img src={group5} alt="logo-photo" />
              </a>
            </div>
          </ContentContainer>
        </div>
      )}
    </>
  );
}
