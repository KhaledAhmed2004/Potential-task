import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import AboutMe from "./components/ui/AboutMe";
import ContactMe from "./components/ui/ContactMe";
import Hero from "./components/ui/Hero";
import Services from "./components/ui/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
