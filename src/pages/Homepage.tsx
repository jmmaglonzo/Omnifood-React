import NavBar from "../UI/NavBar";
import Cta from "../components/Cta";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Logos from "../components/Logos";
import Meals from "../components/Meals";
import OmniFooter from "../components/OmniFooter";
import Testimonials from "../components/Testimonials";
import ThemeProvider from "../context/ThemeProvider";

function Homepage() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Logos />
        <main className="container">
          <HowItWorks />
          <Meals />
          <Testimonials />
        </main>
        <Feature />
        <Cta />
        <OmniFooter />
      </ThemeProvider>
    </>
  );
}

export default Homepage;
