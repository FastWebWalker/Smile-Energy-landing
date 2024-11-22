import ContentContainer from "../../UI/ContentContainer";
import Title from "../../UI/Title";
import ChooseItem from "./ChooseItem";
import one from "../../../images/sections/choose/1.svg";
import two from "../../../images/sections/choose/2.svg";
import three from "../../../images/sections/choose/3.svg";
import four from "../../../images/sections/choose/4.svg";
import { useTranslation } from "react-i18next";

export default function ChooseSection() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white lg:py-[104px] md:py-[60px] py-[30px]">
      <span className="absolute w-[0.5px] bg-redCustom h-[100%] top-0 left-[50%] opacity-[20%]"></span>
      <span className="absolute w-[50%] bg-redCustom h-[0.5px] top-[55px] left-[50%] opacity-[20%]"></span>
      <span className="absolute w-[50%] bg-redCustom h-[0.5px] bottom-[55px] left-0 opacity-[20%]"></span>
      <ContentContainer>
        <Title className="lg:mb-[46px] md:mb-[40px] mb-[20px]">
          {t("chooseSection.title")}
        </Title>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[125px] lg:gap-y-[80px] md:gap-y-[84px] gap-y-[32px] ">
          <ChooseItem
            image={one}
            title={`${t("chooseSection.items.0.title")}`}
            description={`${t("chooseSection.items.0.description")}`}
            imageCorrection="lg:left-[1%]"
          />
          <ChooseItem
            image={two}
            title={`${t("chooseSection.items.1.title")}`}
            description={`${t("chooseSection.items.1.description")}`}
            imageCorrection="lg:-left-5"
          />
          <ChooseItem
            image={three}
            title={`${t("chooseSection.items.2.title")}`}
            description={`${t("chooseSection.items.2.description")}`}
            imageCorrection="lg:left-[-2%]"
          />
          <ChooseItem
            image={four}
            title={`${t("chooseSection.items.3.title")}`}
            description={`${t("chooseSection.items.3.description")}`}
            imageCorrection="lg:-left-10"
          />
        </div>
      </ContentContainer>
    </section>
  );
}
