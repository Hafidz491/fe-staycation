import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Houses } from "./components/section/houses/Houses";
import { MostPicked } from "./components/section/mostpick/MostPicked";
import { LivingRoom } from "./components/section/living/LivingRoom";
import { Kitchen } from "./components/section/kitchen/Kitchen";
import { Story } from "./components/story/Story";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPicked />
      <Houses />
      <LivingRoom />
      <Kitchen />
      <Story />
      <Footer />
    </>
  );
}

export default App;
