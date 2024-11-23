// export default function NumberItem({ title, description, className }) {
//   return (
//     <div
//       className={`flex flex-col gap-4 max-w-[279px] justify-center ${className}`}>
//       <h2 className="lg:text-[80px] md:text-[40px] text-[34px] text-white">
//         {title}
//       </h2>
//       <p className="text-white max-w-[196px] sm:text-[16px] text-[12px]">
//         {description}
//       </p>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// export default function NumberItem({ title, description, className }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className={`flex flex-col gap-4 max-w-[279px] justify-center ${className}`}>
//       <motion.h2
//         className="lg:text-[80px] md:text-[40px] text-[34px] text-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}>
//         {title}
//       </motion.h2>
//       <motion.p
//         className="text-white max-w-[196px] sm:text-[16px] text-[12px]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}>
//         {description}
//       </motion.p>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";

export default function NumberItem({ title, description, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col gap-4 max-w-[279px] justify-center ${className}`}>
      <motion.h2
        className="lg:text-[80px] md:text-[40px] text-[34px] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {isVisible ? (
          <div className="flex justify-center items-center">
            <SlotCounter
              value={title} // Final number
              startValue={title} // Starting value
              duration={1.5} // Animation duration in seconds
              animateOnVisible
              containerClassName="inline-flex justify-center"
              charClassName="inline-block"
            />
            +
          </div>
        ) : (
          0 // Fallback value before animation starts
        )}
      </motion.h2>
      <motion.p
        className="text-white max-w-[196px] sm:text-[16px] text-[12px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        {description}
      </motion.p>
    </motion.div>
  );
}
