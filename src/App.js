import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Plan from "./components/Plan";
import Room from "./components/Room";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Offer />
      <Plan />
      <Room />
      <Footer />
    </div>
  );
}

export default App;
