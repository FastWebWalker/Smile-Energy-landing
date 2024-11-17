import ChooseSection from "./components/sections/choose/ChooseSection";
import Header from "./components/sections/header/Header";
import HeroSection from "./components/sections/hero/HeroSection";
import NumbersSection from "./components/sections/numbers/NumbersSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <NumbersSection />
      <ChooseSection />
    </div>
  );
}

export default App;
