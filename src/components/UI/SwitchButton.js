import React, { useState } from "react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="w-[109px] h-[40px] inline-flex items-center p-1 rounded-[30px] bg-transparent relative border border-[0.3px]">
      {/* Sliding background */}
      <div
        className={`absolute h-[30px] w-[50px] bg-redCustom rounded-[30px] transition-all duration-300 ease-in-out ${
          language === "EN" ? "left-[7px]" : "left-[calc(50%-1px)]"
        }`}
      />

      {/* Buttons */}

      <button
        onClick={() => setLanguage("EN")}
        className={`ml-1 px-[14.16px] py-1  rounded-full font-normal relative transition-colors duration-300 z-10 ${
          language === "EN" ? "text-white" : "text-gray-400 hover:text-white"
        }`}>
        EN
      </button>
      <button
        onClick={() => setLanguage("UA")}
        className={`right-1 px-[13.7px] py-1 rounded-full font-medium relative transition-colors duration-300 z-10 ${
          language === "UA" ? "text-white" : "text-gray-400 hover:text-white"
        }`}>
        UA
      </button>
    </div>
  );
};

export default LanguageToggle;
