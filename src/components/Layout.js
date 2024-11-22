import Header from "../components/sections/header/Header"
import { I18nextProvider } from "react-i18next";
import Footer from "../components/sections/footer/Footer";
import i18n from "../i18n/i18n";
import { Outlet } from "react-router-dom";
import MessengerComponent from "../components/UI/Messanger";
export default function Layout() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <Outlet />
        <Footer />
        <MessengerComponent />
      </I18nextProvider>
    </>
  );
}
