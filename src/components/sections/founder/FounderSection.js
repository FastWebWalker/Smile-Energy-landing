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

export default function FounderSection() {
  const isDesktopLarge = useMediaQuery("(min-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1024px) and (max-width: 1279px");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
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
                      Serhiy Hrybovskiy
                    </h3>
                    <p className="text-[20px] mb-8">Founder of the company</p>
                    <Description className="lg:max-w-[667px] max-w-[400px]">
                      Each technician has an original approach to work that is
                      unique to him or her. This reflects the love for their
                      work in working on customer orders. At all stages of
                      cooperation with the dentist, clients receive full
                      information support of the highest class. We treat many
                      patients throughout their lives. We advise, recommend,
                      consult and help.
                    </Description>
                  </div>
                  {isDesktopLarge && (
                    <div className="flex flex-col items-start justify-start gap-[32px] -ml-5">
                      <h4 className="text-[32px] font-normal ">
                        Our laboratories:
                      </h4>
                      <div className="grid grid-cols-3 gap-x-[68px] gap-y-[12px]">
                        <div className="w-[169px] h-[80px] flex justify-center items-center ">
                          <img src={group1} alt="logo-photo" />
                        </div>
                        <div className="w-[169px] h-[80px] flex justify-center items-center">
                          <img src={group2} alt="logo-photo" />
                        </div>
                        <div className="w-[169px] h-[80px] flex justify-center items-center">
                          <img src={group3} alt="logo-photo" />
                        </div>
                        <div className="w-[169px] h-[80px] flex justify-center items-center">
                          <img src={group4} alt="logo-photo" />
                        </div>
                        <div className="w-[169px] h-[80px] flex justify-center items-center">
                          <img src={group5} alt="logo-photo" />
                        </div>
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
                    Serhiy Hrybovskiy
                  </h3>
                  <p className="text-[20px] mb-8">Founder of the company</p>
                  <Description>
                    Each technician has an original approach to work that is
                    unique to him or her. This reflects the love for their work
                    in working on customer orders. At all stages of cooperation
                    with the dentist, clients receive full information support
                    of the highest class. We treat many patients throughout
                    their lives. We advise, recommend, consult and help.
                  </Description>
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
              Our laboratories:
            </h4>
            <div className="flex md:justify-between justify-start w-[100%]  gap-x-[45px] gap-y-[12px] md:flex-nowrap flex-wrap">
              <div className="lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center ">
                <img src={group1} alt="logo-photo" />
              </div>
              <div className="lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center">
                <img src={group2} alt="logo-photo" />
              </div>
              <div className="lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center">
                <img src={group3} alt="logo-photo" />
              </div>
              <div className="lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center">
                <img src={group4} alt="logo-photo" />
              </div>
              <div className="lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center">
                <img src={group5} alt="logo-photo" />
              </div>
            </div>
          </ContentContainer>
        </div>
      )}
    </>
  );
}
