import ChooseSection from "./components/sections/choose/ChooseSection";
import Footer from "./components/sections/footer/Footer";
import FounderSection from "./components/sections/founder/FounderSection";
import GallerySection from "./components/sections/gallery/GallerySection";
import Header from "./components/sections/header/Header";
import HeroSection from "./components/sections/hero/HeroSection";
import NumbersSection from "./components/sections/numbers/NumbersSection";
import PopularSection from "./components/sections/popular/PopularSection";
import ReviewsSection from "./components/sections/reviews/ReviewsSection";
import StoreSection from "./components/sections/store/StoreSection";
import TrustedSection from "./components/sections/trusted/TrustedSection";
import MessengerComponent from "./components/UI/Messanger";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <NumbersSection />
      <ChooseSection />
      <TrustedSection />
      <ReviewsSection />
      <StoreSection />
      <PopularSection />
      <FounderSection />
      <GallerySection />
      <Footer />
      <MessengerComponent />
    </div>
  );
}

export default App;
