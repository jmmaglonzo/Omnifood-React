import NavBar from "../UI/NavBar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import ThemeProvider from "../context/ThemeProvider";

function Homepage() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Logos />
      </ThemeProvider>
      <main className="container"></main>
    </>
  );
}

export default Homepage;
