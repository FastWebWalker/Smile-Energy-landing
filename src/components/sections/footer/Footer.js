import Button from "../../UI/Button";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Logo from "../header/Logo";
import instagram from "../../../images/sections/footer/instagram.svg";
import facebook from "../../../images/sections/footer/facebook.svg";
import linkedIn from "../../../images/sections/footer/linkedIn.svg";
import telegram from "../../../images/sections/footer/telegram.svg";

export default function Footer() {
  return (
    <footer className="pt-[56px] pb-[20px] bg-[#191919]">
      <ContentContainer>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between pb-[72px]">
            <div className="flex flex-col justify-center items-start gap-[32px]">
              <Logo />
              <Description className="text-[20px] text-white">
                Global expert in dental laboratories, orthopedics,
                <br />
                and prosthesis on implants
              </Description>
            </div>
            <div className="flex flex-col gap-[32px] justify-start items-end">
              <Description className="text-[20px] text-white">
                Do you have any questions? Contact us!
              </Description>
              <div className="flex-grow-0">
                <Button variant="white-white">Order A Call</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white non-italic">
            <div>
              <h4 className="font-normal mb-4">Contact Us</h4>
              <div>
                <div className=" mb-3">
                  Address:
                  <br />
                  <span className="opacity-50">
                    43 Pasichna str., Lviv, Ukraine
                  </span>
                </div>
              </div>

              <div className=" mb-3">
                Phone number:
                <br />
                <span className="opacity-50">+38(068)-385-35-35</span>
              </div>
              <div>
                Email:
                <br />
                <span className="opacity-50">smilenergygroup.ua@gmail.com</span>
              </div>
            </div>
            <div>
              <h4 className="font-normal mb-6">Page</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal mb-6">Our Laboratories</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    CadCam Energy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    Contour
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    Senergy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-50 hover:opacity-100 transition-all">
                    Cad Studio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Media</h4>
              <ul className="flex space-x-[22px]">
                <li>
                  <a href="#" className="hover:text-white">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    <img src={linkedIn} alt="linkedIn" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-9 text-white opacity-[0.32] text-right">
          <p>&copy; Smile Energy Group 2024. All Rights Reserved.</p>
        </div>
      </ContentContainer>
    </footer>
  );
}
