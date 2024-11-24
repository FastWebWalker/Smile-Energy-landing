import { motion } from "framer-motion";
import Button from "../../UI/Button";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Logo from "../header/Logo";
import instagram from "../../../images/sections/footer/instagram.svg";
import facebook from "../../../images/sections/footer/facebook.svg";
import linkedIn from "../../../images/sections/footer/linkedIn.svg";
import telegram from "../../../images/sections/footer/telegram.svg";
import FormModal from "../hero/FormModal";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const { t } = useTranslation();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = () => {
    setFormIsOpen(true);
  };

  const handleClose = () => {
    setFormIsOpen(false);
  };

  const handleScroll = (elementId) => (e) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0.5, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-[56px] pb-[20px] bg-[#191919]"
      ref={footerRef}>
      <ContentContainer>
        <div className="flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex md:flex-nowrap flex-wrap justify-between pb-[72px]">
            <div className="flex flex-col justify-center items-start gap-[32px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}>
                <Logo />
              </motion.div>
              <Description className="text-[20px] text-white mb-0 sm:mb-[20px]">
                {t("footerSection.description.line1")}
                <br />
                {t("footerSection.description.line2")}
              </Description>
            </div>
            <div className="flex flex-col gap-[32px] justify-start md:items-end items-start">
              <Description className="text-[20px] text-white">
                {t("footerSection.contactUs")}
              </Description>
              <div className="flex-grow-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}>
                  <Button variant="white-white">
                    {t("footerSection.orderCallButton")}
                  </Button>
                </motion.button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white non-italic">
            <div>
              <div>
                <div className="mb-3">
                  {t("footerSection.address.title")}:
                  <br />
                  <span className="opacity-50">
                    {t("footerSection.address.content")}
                  </span>
                </div>
              </div>
              <div className="mb-3">
                {t("footerSection.phone.title")}:
                <br />
                <span className="opacity-50">
                  {t("footerSection.phone.content")}
                </span>
              </div>
              <div>
                {t("footerSection.email.title")}:
                <br />
                <span className="opacity-50">
                  {t("footerSection.email.content")}
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-normal mb-6">
                {t("footerSection.page.title")}
              </h4>
              <ul className="space-y-2 inline-block">
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#about-us"
                    onClick={handleScroll("about-us")}
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.aboutUs")}
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#services"
                    onClick={handleScroll("services")}
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.services")}
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#products"
                    onClick={handleScroll("products")}
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.products")}
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#reviews"
                    onClick={handleScroll("reviews")}
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.reviews")}
                  </a>
                </motion.li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal mb-6">
                {t("footerSection.ourLaboratories.title")}
              </h4>
              <ul className="space-y-2 inline-block">
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="https://cadcam.energy/"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.cadCamEnergy")}
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="https://contour-lab.com/"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.contour")}
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="https://senergy-dental.com/"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.senergy")}
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="https://dentalcad.online/"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.cadStudio")}
                  </a>
                </motion.li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">
                {t("footerSection.media.title")}
              </h4>
              <ul className="flex space-x-[22px]">
                <motion.li whileHover={{ scale: 1.2, rotate: 5 }}>
                  <a
                    href="https://www.instagram.com/contour_lab/?igshid=YmMyMTA2M2Y%3D"
                    target="_no_blank"
                    className="hover:text-white">
                    <img
                      src={instagram}
                      alt={t("footerSection.media.socials.instagram")}
                    />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2, rotate: 5 }}>
                  <a
                    href="https://www.facebook.com/contour.laboratory/?_rdr"
                    target="_no_blank"
                    className="hover:text-white">
                    <img
                      src={facebook}
                      alt={t("footerSection.media.socials.facebook")}
                    />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2, rotate: 5 }}>
                  <a
                    href="https://www.linkedin.com/company/smile-energy-group/posts/?feedView=all"
                    className="hover:text-white"
                    target="_no_blank">
                    <img
                      src={linkedIn}
                      alt={t("footerSection.media.socials.linkedIn")}
                    />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2, rotate: 5 }}>
                  <a
                    href="https://t.me/+hvMUwEQGYac2NTVi"
                    target="_no_blank"
                    className="hover:text-white">
                    <img
                      src={telegram}
                      alt={t("footerSection.media.socials.telegram")}
                    />
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="mt-9 text-[12px] text-white opacity-[0.32] text-right">
          <p>&copy; {t("footerSection.copyright")}</p>
        </div>
      </ContentContainer>
      {formIsOpen && (
        <FormModal onSubmit={handleSubmit} onClose={handleClose} />
      )}
    </motion.footer>
  );
}
