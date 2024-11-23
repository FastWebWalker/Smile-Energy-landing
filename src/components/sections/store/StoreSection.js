import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import teethImage from "../../../images/sections/store/teeth.jpg";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function StoreSection() {
  const { t } = useTranslation();

  return (
    <section className="lg:pt-[90px] md:pt-[60px] pt-[30px] lg:pb-[49px] md:pb-[35px] pb-[] mb-[31px] bg-white relative">
      <span className="absolute w-[0.5px] bg-redCustom h-[100%] top-0 left-[50%] opacity-[20%]"></span>
      <span className="absolute w-[100%] bg-redCustom h-[0.5px] bottom-0 left-0 opacity-[20%]"></span>
      <ContentContainer>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-2">
          {/* Текстовий контент */}
          <div className="flex flex-col lg:gap-[32px] gap-[20px] flex-grow-0 flex-shrink-0 xl:basis-[49.04%] basis-[40%]  [@media(max-width:1024px)]:mb-[74px] [@media(max-width:600px)]:mb-[32px]">
            <Title>{t("storeSection.title")}</Title>
            <Description className="text-[#191919]">
              {t("storeSection.description")}
            </Description>
            <div className="flex-grow-0">
              <Link
                to={"https://www.setrade.com.ua/"}
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="red-white">{t("storeSection.button")}</Button>
              </Link>
            </div>
          </div>

          {/* Зображення */}
          <div className="flex-grow-0 flex-shrink-0 lg:basis-[44.411%] basis-[100%] [@media(max-width:1024px)]:w-[100%]">
            <img src={teethImage} alt="teeth-image" className="w-full h-auto" />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
