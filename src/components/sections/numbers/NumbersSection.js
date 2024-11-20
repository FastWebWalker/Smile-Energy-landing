import ContentContainer from "../../UI/ContentContainer";
import NumberItem from "./NumberItem";
import { useMediaQuery } from "@mui/material";

export default function NumbersSection() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <section className="relative bg-[#111111] lg:py-[90px] md:py-[60px] py-[30px]">
      {(isTablet || isDesktop) && (
        <ContentContainer className="flex justify-between items-start md:flex-nowrap flex-wrap  gap-[34px] ">
          <NumberItem
            title="80+"
            description="Years of experience in orthopedic dentistry"
          />
          <NumberItem title="3500+" description="Successfully executed cases" />
          <NumberItem
            title="60+"
            description="Partners who cooperate with us"
          />
          <NumberItem title="1500+" description="Satisfied customers" />
        </ContentContainer>
      )}
      {isMobile && (
        <ContentContainer className="flex justify-between items-center md:flex-nowrap flex-wrap  gap-[34px] ">
          <div className="flex justify-between items-center gap-[35px] w-[100%]">
            <NumberItem
              title="80+"
              description="Years of experience in orthopedic dentistry"
              className="flex-[0_1_50%]"
            />
            <NumberItem
              title="3500+"
              description="Successfully executed cases"
              className="flex-[0_1_50%]"
            />
          </div>
          <div className="flex justify-between items-center gap-[35px] w-[100%]">
            <NumberItem
              title="60+"
              description="Partners who cooperate with us"
              className="flex-[0_1_50%]"
            />
            <NumberItem
              title="1500+"
              description="Satisfied customers"
              className="flex-[0_1_50%]"
            />
          </div>
        </ContentContainer>
      )}
    </section>
  );
}
