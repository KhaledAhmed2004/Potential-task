import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import AboutMe from "./components/ui/AboutMe";
import ContactMe from "./components/ui/ContactMe";
import Hero from "./components/ui/Hero";
import Services from "./components/ui/Services";
import Testimonials from "./components/ui/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
