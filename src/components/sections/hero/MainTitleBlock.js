// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Description from "../../UI/Description";
// import HeroTitle from "../../UI/HeroTitle";
// import LShape from "../../UI/LShape";
// import LShapeReverse from "../../UI/LShapeReverse";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTranslation } from "react-i18next";

// export default function MainTitleBlock() {
//   const isDesktop = useMediaQuery("(min-width:1024px)");
//   const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
//   const isMobile = useMediaQuery("(max-width:624px)");
//   const { t } = useTranslation();

//   const [ref, inView] = useInView({
//     threshold: 0.1, // Trigger animation when 10% of the component is visible
//     triggerOnce: true, // Animate only once
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   const shapeVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
//   };

//   const AnimatedLShape = () => {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.7, y: -20 }}
//         animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
//         transition={{
//           duration: 0.6,
//           ease: [0.25, 0.1, 0.25, 1],
//           delay: 0.8,
//         }}>
//         <LShape />
//       </motion.div>
//     );
//   };

//   const AnimatedLShapeReverse = () => {
//     return (
//       <motion.div
//         style={{ position: "absolute", bottom: 0, right: 200, zIndex: 0 }}
//         initial={{ opacity: 0, scale: 0.7 }}
//         animate={inView ? { opacity: 1, scale: 1, right: 0 } : { opacity: 0 }}
//         transition={{
//           duration: 0.6,
//           ease: [0.25, 0.1, 0.25, 1],
//           delay: 0.8,
//         }}>
//         <div
//           className="relative lg:h-[25px] lg:w-[94.60px] [@media(min-width:625px)]:h-[19px] [@media(min-width:625px)]:w-[72px]"
//           style={{
//             filter: "none",
//             opacity: 1,
//             color: "initial",
//           }}>
//           <LShapeReverse />
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <motion.div
//       ref={ref}
//       variants={containerVariants}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       className="flex flex-col relative">
//       <AnimatedLShapeReverse />
//       <AnimatedLShape />

//       {(isTablet || isDesktop) && (
//         <>
//           <div className="flex justify-between items-center">
//             <motion.div variants={textVariants}>
//               <HeroTitle>global leaders</HeroTitle>
//             </motion.div>
//             {isDesktop && (
//               <motion.div variants={textVariants}>
//                 <Description className="text-white max-w-[350px]">
//                   {t("heroSection.description1")}
//                 </Description>
//               </motion.div>
//             )}
//           </div>
//           <div className="flex justify-center items-center">
//             <motion.div variants={textVariants}>
//               <HeroTitle>and experts</HeroTitle>
//             </motion.div>
//           </div>
//           <div className="flex lg:justify-between justify-end items-center">
//             {isDesktop && (
//               <motion.div variants={textVariants}>
//                 <Description className="text-white max-w-[324px] mt-8">
//                   {t("heroSection.description2")}
//                 </Description>
//               </motion.div>
//             )}
//             <motion.div variants={textVariants}>
//               <HeroTitle>in dental field</HeroTitle>
//             </motion.div>
//           </div>
//         </>
//       )}
//       {isMobile && (
//         <motion.div variants={textVariants}>
//           <HeroTitle>Global leaders and experts in dental field</HeroTitle>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Description from "../../UI/Description";
import HeroTitle from "../../UI/HeroTitle";
import LShape from "../../UI/LShape";
import LShapeReverse from "../../UI/LShapeReverse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

export default function MainTitleBlock() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:624px)");
  const { t } = useTranslation();

  // State to track if animation has already been triggered
  const [hasAnimated, setHasAnimated] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
    triggerOnce: true, // Animate only once
  });

  // Update state when `inView` becomes true
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const AnimatedLShape = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -20 }}
        animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.8,
        }}>
        <LShape />
      </motion.div>
    );
  };

  const AnimatedLShapeReverse = () => {
    return (
      <motion.div
        style={{ position: "absolute", bottom: 0, right: 200, zIndex: 0 }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={
          hasAnimated ? { opacity: 1, scale: 1, right: 0 } : { opacity: 0 }
        }
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.8,
        }}>
        <div
          className="relative lg:h-[25px] lg:w-[94.60px] [@media(min-width:625px)]:h-[19px] [@media(min-width:625px)]:w-[72px]"
          style={{
            filter: "none",
            opacity: 1,
            color: "initial",
          }}>
          <LShapeReverse />
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      className="flex flex-col relative">
      <AnimatedLShapeReverse />
      <AnimatedLShape />

      {(isTablet || isDesktop) && (
        <>
          <div className="flex justify-between items-center">
            <motion.div variants={textVariants}>
              <HeroTitle>global leaders</HeroTitle>
            </motion.div>
            {isDesktop && (
              <motion.div variants={textVariants}>
                <Description className="text-white max-w-[350px]">
                  {t("heroSection.description1")}
                </Description>
              </motion.div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <motion.div variants={textVariants}>
              <HeroTitle>and experts</HeroTitle>
            </motion.div>
          </div>
          <div className="flex lg:justify-between justify-end items-center">
            {isDesktop && (
              <motion.div variants={textVariants}>
                <Description className="text-white max-w-[324px] mt-8">
                  {t("heroSection.description2")}
                </Description>
              </motion.div>
            )}
            <motion.div variants={textVariants}>
              <HeroTitle>in dental field</HeroTitle>
            </motion.div>
          </div>
        </>
      )}
      {isMobile && (
        <motion.div variants={textVariants}>
          <HeroTitle>Global leaders and experts in dental field</HeroTitle>
        </motion.div>
      )}
    </motion.div>
  );
}
