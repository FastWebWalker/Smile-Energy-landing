import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import ContentContainer from "../../UI/ContentContainer";
import Logo from "./Logo";
import SwitchButton from "../../UI/SwitchButton";
import Button from "../../UI/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight / 40);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 md:py-[17px] lg:py-2  z-10 transition-all duration-200 bg-[#111111]    ${
        isScrolled ? "bg-[#111111]" : "bg-transparent"
      }`}>
      <ContentContainer>
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden [@media(min-width:960px)]:block">
            <ul className="flex justify-center items-center gap-[42px] max-lg:gap-[24px]">
              {["Services", "Products", "Reviews", "About us"].map((item) => (
                <li key={item}>
                  <a href="#" className="uppercase text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className=" gap-3 justify-center items-center hidden [@media(min-width:960px)]:flex">
            <SwitchButton />

            <Button className="uppercase">get in touch</Button>
          </div>

          <button
            className="[@media(min-width:960px)]:hidden z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            <div className="relative w-6 h-6">
              <AnimatePresence>
                {!isMenuOpen ? (
                  <motion.div
                    key="burger"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col justify-between h-full">
                    <motion.span
                      className="h-[1.5px] w-[32px] bg-white block"
                      initial={{ rotate: 0, y: 0 }}
                      animate={{ rotate: 0, y: 0 }}
                    />
                    <motion.span
                      className="h-[1.5px] w-6 bg-white block ml-[8px]"
                      initial={{ rotate: 0, y: 0 }}
                      animate={{ rotate: 0, y: 0 }}
                    />
                    <motion.span
                      className="h-[1.5px] w-[32px] bg-white block"
                      initial={{ rotate: 0, y: 0 }}
                      animate={{ rotate: 0, y: 0 }}
                    />
                    <motion.span
                      className="h-[1.5px] w-6 bg-white block ml-[8px]"
                      initial={{ rotate: 0, y: 0 }}
                      animate={{ rotate: 0, y: 0 }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="x"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="h-[1.5px] w-[32px] bg-white absolute transform rotate-45"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 45 }}
                    />
                    <motion.span
                      className="h-[1.5px] w-[32px] bg-white absolute transform -rotate-45"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -45 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="[@media(min-width:960px)]:hidden overflow-hidden absolute top-0 left-0 w-[100vw] bg-[#111111]  flex flex-col justify-center gap-[50px] p-[44px] items-center">
              <SwitchButton />
              <ul className="flex flex-col justify-center items-center text-[25px] gap-[42px]">
                {["Services", "Products", "Reviews", "About us"].map((item) => (
                  <li key={item}>
                    <a href="#" className="uppercase text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <Button className="uppercase z-50">get in touch</Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </ContentContainer>
    </header>
  );
};

export default Header;
