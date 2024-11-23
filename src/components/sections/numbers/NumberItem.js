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

import { motion } from "framer-motion";

export default function NumberItem({ title, description, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col gap-4 max-w-[279px] justify-center ${className}`}>
      <motion.h2
        className="lg:text-[80px] md:text-[40px] text-[34px] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {title}
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
