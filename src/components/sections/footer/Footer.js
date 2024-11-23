import Button from "../../UI/Button";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Logo from "../header/Logo";
import instagram from "../../../images/sections/footer/instagram.svg";
import facebook from "../../../images/sections/footer/facebook.svg";
import linkedIn from "../../../images/sections/footer/linkedIn.svg";
import telegram from "../../../images/sections/footer/telegram.svg";
import FormModal from "../hero/FormModal";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export default function Footer() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const { t } = useTranslation(); // Use the translation function

  const handleSubmit = () => {
    setFormIsOpen(true);
  };

  const handleClose = () => {
    setFormIsOpen(false);
  };

  return (
    <footer className="pt-[56px] pb-[20px] bg-[#191919]">
      <ContentContainer>
        <div className="flex flex-col justify-between">
          <div className="flex md:flex-nowrap flex-wrap justify-between pb-[72px]">
            <div className="flex flex-col justify-center items-start gap-[32px]">
              <Logo />
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
                <button onClick={handleSubmit}>
                  <Button variant="white-white">
                    {t("footerSection.orderCallButton")}
                  </Button>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white non-italic">
            <div>
             
              <div>
                <div className=" mb-3">
                  {t("footerSection.address.title")}:
                  <br />
                  <span className="opacity-50">
                    {t("footerSection.address.content")}
                  </span>
                </div>
              </div>

              <div className=" mb-3">
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
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.aboutUs")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.products")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.page.links.reviews")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal mb-6">
                {t("footerSection.ourLaboratories.title")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.cadCamEnergy")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.contour")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.senergy")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    {t("footerSection.ourLaboratories.labs.cadStudio")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">
                {t("footerSection.media.title")}
              </h4>
              <ul className="flex space-x-[22px]">
                <li>
                  <a
                    href="https://www.instagram.com/contour_lab/?igshid=YmMyMTA2M2Y%3D"
                    target="_no_blank"
                    className="hover:text-white">
                    <img
                      src={instagram}
                      alt={t("footerSection.media.socials.instagram")}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/contour.laboratory/?_rdr"
                    target="_no_blank"
                    className="hover:text-white">
                    <img
                      src={facebook}
                      alt={t("footerSection.media.socials.facebook")}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/smile-energy-group/posts/?feedView=all"
                    className="hover:text-white"
                    target="_no_blank">
                    <img
                      src={linkedIn}
                      alt={t("footerSection.media.socials.linkedIn")}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/+hvMUwEQGYac2NTVi
"
                    target="_no_blank"
                    className="hover:text-white">
                    <img
                      src={telegram}
                      alt={t("footerSection.media.socials.telegram")}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-9 text-[12px] text-white opacity-[0.32] text-right">
          <p>&copy; {t("footerSection.copyright")}</p>
        </div>
      </ContentContainer>
      {formIsOpen && (
        <FormModal onSubmit={handleSubmit} onClose={handleClose} />
      )}
    </footer>
  );
}
