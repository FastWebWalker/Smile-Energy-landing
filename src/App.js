import ChooseSection from "./components/sections/choose/ChooseSection";
import Header from "./components/sections/header/Header";
import HeroSection from "./components/sections/hero/HeroSection";
import NumbersSection from "./components/sections/numbers/NumbersSection";
import ReviewsSection from "./components/sections/reviews/ReviewsSection";
import TrustedSection from "./components/sections/trusted/TrustedSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <NumbersSection />
      <ChooseSection />
      <TrustedSection />
      <ReviewsSection />
    </div>
  );
}

export default App;
