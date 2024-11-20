import { useMediaQuery } from "@mui/material";

export default function ChooseItem({
  image,
  title,
  description,
  imageCorrection,
}) {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <>
      {(isTablet || isDesktop) && (
        <div className="relative z-1 flex justify-center items-center">
          {/* <div className={`absolute top-[-10%] left-[-5%] z-1 ${imageCorrection}`}> */}
          <div className={`absolute -top-5 left-0 z-1 ${imageCorrection}`}>
            <img
              src={image}
              alt={title}
              className="lg:h-[238px] h-[220px] [@media(max-width:624px)]:h-[58px]"
            />
          </div>
          <div className="relative ml-[87px] h-[100%] bg-white p-3">
            <h3 className="font-normal text-[32px] bg-white leading-tight uppercase mb-[15px] max-w-[350px]">
              {title}
            </h3>
            <p className="text-[#191919E5] leading-none">{description}</p>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="relative z-1 flex justify-center items-center">
          {/* <div className={`absolute top-[-10%] left-[-5%] z-1 ${imageCorrection}`}> */}

          <div className="relative h-[100%] bg-white p-3">
            <div className="flex justify-start items-center gap-[16px] mb-[12px]">
              <img src={image} alt={title} className="h-[58px]" />

              <h3 className="font-normal text-[24px] bg-white leading-tight uppercase ">
                {title}
              </h3>
            </div>
            <p className="text-[#191919E5] leading-none">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
