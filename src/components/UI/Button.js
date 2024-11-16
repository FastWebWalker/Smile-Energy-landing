import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/sections/header/arrow-up-right.svg";

const Button = ({ useLink, to, href, children, className }) => {
  if (useLink) {
    return (
      <Link to={to} className={`flex gap-[6px] ${className}`}>
        <span>{children}</span>
        <img src={arrow} alt="arrow" />
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`flex justify-center items-center gap-[6px] rounded-[30px] bg-white px-[10px] py-[9px] font-normal cursor-pointer just ${className}`}
      target="_blank"
      rel="noopener noreferrer">
      <span>{children}</span>
      <img src={arrow} alt="arrow" />
    </a>
  );
};

export default Button;
