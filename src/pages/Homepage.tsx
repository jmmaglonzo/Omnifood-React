import NavBar from "../UI/NavBar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Logos from "../components/Logos";
import Meals from "../components/Meals";
import ThemeProvider from "../context/ThemeProvider";

function Homepage() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Logos />
      </ThemeProvider>
      <main className="container">
        <HowItWorks />
        <Meals />
      </main>
    </>
  );
}

export default Homepage;
