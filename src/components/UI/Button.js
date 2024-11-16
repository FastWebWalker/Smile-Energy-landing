// import React from "react";
// import { Link } from "react-router-dom";
// import arrow from "../../images/sections/header/arrow-up-right.svg";

// const Button = ({ useLink, to, href, children, className }) => {
//   if (useLink) {
//     return (
//       <Link to={to} className={`flex gap-[6px] ${className}`}>
//         <span>{children}</span>
//         <img src={arrow} alt="arrow" />
//       </Link>
//     );
//   }

//   return (
//     <a
//       href={href}
//       className={`flex justify-center items-center gap-[6px] rounded-[30px] bg-white px-[10px] py-[9px] font-normal cursor-pointer just ${className}`}
//       target="_blank"
//       rel="noopener noreferrer">
//       <span>{children}</span>
//       <img src={arrow} alt="arrow" />
//     </a>
//   );
// };

// export default Button;

import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/sections/header/arrow-up-right.svg";

const Button = ({
  useLink,
  to,
  href,
  children,
  className,
  variant = "default", // 'default', 'red', 'black'
  outlined = false,
}) => {
  const baseClasses =
    "flex justify-center items-center gap-[6px] rounded-[30px] px-[20px] py-[9px] font-normal cursor-pointer transition-all duration-300";

  const getVariantClasses = () => {
    if (outlined) {
      return "bg-transparent border border-white text-white hover:bg-white hover:text-black";
    }

    switch (variant) {
      case "red":
        return "bg-red-700 text-white hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700";
      case "black":
        return "bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black";
      default:
        return "bg-white text-black hover:bg-transparent hover:text-white hover:border hover:border-white";
    }
  };

  const combinedClasses = `${baseClasses} ${getVariantClasses()} ${
    className || ""
  }`;

  if (useLink) {
    return (
      <Link to={to} className={combinedClasses}>
        <span>{children}</span>
        <img
          src={arrow}
          alt="arrow"
          className={`${outlined ? "invert" : ""} ${
            variant === "red" || variant === "black" ? "invert" : ""
          }`}
        />
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={combinedClasses}
      target="_blank"
      rel="noopener noreferrer">
      <span>{children}</span>
      <img
        src={arrow}
        alt="arrow"
        className={`${outlined ? "invert" : ""} ${
          variant === "red" || variant === "black" ? "invert" : ""
        }`}
      />
    </a>
  );
};

export default Button;
