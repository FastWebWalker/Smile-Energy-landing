import Header from "../components/sections/header/Header";
import { I18nextProvider } from "react-i18next";
import Footer from "../components/sections/footer/Footer";
import i18n from "../i18n/i18n";
import { Outlet } from "react-router-dom";
import MessengerComponent from "../components/UI/Messanger";
import Cookies from "./sections/cookies/Cookies";
import CustomCursor from "./UI/CustomCursor";
import { useMediaQuery } from "@mui/material";
export default function Layout() {
  const isMobile = useMediaQuery("(max-width: 500px");
  return (
    <>
      <I18nextProvider i18n={i18n}>
        {!isMobile && <CustomCursor />}
        <Header />
        <Outlet />
        <Footer />
        <MessengerComponent />
        <Cookies />
      </I18nextProvider>
    </>
  );
}
