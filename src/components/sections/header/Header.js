import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ContentContainer from "../../UI/ContentContainer";
import Logo from "./Logo";
import SwitchButton from "../../UI/SwitchButton";
import Button from "../../UI/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent pt-6 pb-6 z-50">
      <ContentContainer>
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center gap-[42px]">
              {["Services", "Products", "Reviews", "About us"].map((item) => (
                <li key={item}>
                  <a href="#" className="uppercase text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3 justify-center items-center">
            <SwitchButton />

            <Button className="uppercase">get in touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            <div className="relative w-6 h-6">
              <motion.span
                className="absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300"
                style={{ top: "calc(50% - 2px)" }}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  translateY: isMenuOpen ? 0 : -8,
                }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300"
                style={{ top: "calc(50% - 2px)" }}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  translateY: isMenuOpen ? 0 : 8,
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden">
              <ul className="py-4 space-y-4">
                {["Home", "Features", "Pricing", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </ContentContainer>
    </header>
  );
};

export default Header;
