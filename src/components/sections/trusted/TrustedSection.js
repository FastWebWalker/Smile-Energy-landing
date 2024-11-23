// import ContinuousCarousel from "../../animation/ContinuosCarousel";
// import ContentContainer from "../../UI/ContentContainer";
// import Description from "../../UI/Description";
// import Title from "../../UI/Title";
// import { useTranslation } from "react-i18next";

// export default function TrustedSection() {
//   const { t } = useTranslation();
//   return (
//     <div className="lg:pt-[90px] md:pt-[60px] pt-[30px] lg:pb-[60px] pb-[30px] bg-[#111111]">
//       <ContentContainer>
//         <div className="flex justify-between lg:items-center lg:mb-[46px] md:mb-[40px] mb-[32px] lg:flex-row  [@media(max-width:1024px)]:flex-col">
//           <Title className="text-white  [@media(max-width:1024px)]:mb-[24px]">
//             {t("trustedSection.title")}
//           </Title>
//           <Description className="text-white lg:max-w-[557px] lg:text-right">
//             {t("trustedSection.description")}
//           </Description>
//         </div>
//         <ContinuousCarousel />
//       </ContentContainer>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContinuousCarousel from "../../animation/ContinuosCarousel";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import { useTranslation } from "react-i18next";

export default function TrustedSection() {
  const { t } = useTranslation();

  // Animation variants for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Set up IntersectionObserver for the section
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });

  return (
    <motion.div
      ref={ref} // Attach observer to the section
      className="lg:pt-[90px] md:pt-[60px] pt-[30px] lg:pb-[60px] pb-[30px] bg-[#111111]"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Trigger animation based on visibility
    >
      <ContentContainer>
        <div className="flex justify-between lg:items-center lg:mb-[46px] md:mb-[40px] mb-[32px] lg:flex-row [@media(max-width:1024px)]:flex-col">
          {/* Title Animation */}
          <motion.div
            className="text-white lg:mb-[24px]"
            initial={{ opacity: 0, x: -50 }}
            animate={
              inView
                ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
                : { opacity: 0, x: -50 }
            }>
            <Title>{t("trustedSection.title")}</Title>
          </motion.div>

          {/* Description Animation */}
          <motion.div
            className="text-white lg:max-w-[557px] lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={
              inView
                ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
                : { opacity: 0, x: 50 }
            }>
            <Description>{t("trustedSection.description")}</Description>
          </motion.div>
        </div>

        {/* Continuous Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            inView
              ? { opacity: 1, transition: { duration: 0.8 } }
              : { opacity: 0 }
          }>
          <ContinuousCarousel />
        </motion.div>
      </ContentContainer>
    </motion.div>
  );
}
