import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Houses } from "./components/section/houses/Houses";
import { MostPicked } from "./components/section/mostpick/MostPicked";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPicked />
      <Houses />
    </>
  );
}

export default App;
