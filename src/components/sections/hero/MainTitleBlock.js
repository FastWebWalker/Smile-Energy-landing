import Description from "../../UI/Description";
import HeroTitle from "../../UI/HeroTitle";
import LShape from "../../UI/LShape";
import LShapeReverse from "../../UI/LShapeReverse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

export default function MainTitleBlock() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isTabletSmaller = useMediaQuery(
    "(min-width:625px) and (max-width:1023px)"
  );
  const isMobile = useMediaQuery("(max-width:624px)");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col relative">
      <LShapeReverse />
      <LShape />

      {(isTablet || isDesktop) && (
        <>
          <div className="flex justify-between items-center">
            <HeroTitle>global leaders</HeroTitle>
            {isDesktop && (
              <Description className="text-white max-w-[350px]">
                {t("heroSection.description1")}
              </Description>
            )}
          </div>
          <div className="flex justify-center items-center">
            <HeroTitle>and experts</HeroTitle>
          </div>
          <div className="flex lg:justify-between justify-end items-center">
            {isDesktop && (
              <Description className=" text-white max-w-[324px] mt-8">
                {t("heroSection.description2")}
              </Description>
            )}

            <HeroTitle>in dental field</HeroTitle>
          </div>
        </>
      )}
      {isMobile && (
        <div>
          <HeroTitle>Global leaders and experts in dental field</HeroTitle>
        </div>
      )}
    </div>
  );
}
