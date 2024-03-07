import NavBar from "../UI/NavBar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Logos from "../components/Logos";
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";
import ThemeProvider from "../context/ThemeProvider";

function Homepage() {
  return (
    <div className="dark:backgroundColor min-h-screen bg-light dark:bg-backgroundColor">
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Logos />
      </ThemeProvider>
      <main className="container">
        <HowItWorks />
        <Meals />
        <Testimonials />
      </main>
    </div>
  );
}

export default Homepage;
