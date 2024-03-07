import logo1Dark from "../assets/logos/business-insider-dark.webp";
import logo2Dark from "../assets/logos/tech-crunch-dark.webp";
import logo3Dark from "../assets/logos/newyork-times-dark.webp";
import logo4Dark from "../assets/logos/usa-today-dark.webp";
import logo5Dark from "../assets/logos/forbes-dark.webp";
import logo1Light from "../assets/logos/business-insider-light.webp";
import logo2Light from "../assets/logos/techcrunch-light.webp";
import logo3Light from "../assets/logos/the-new-york-times-light.webp";
import logo4Light from "../assets/logos/usa-today-light.webp";
import logo5Light from "../assets/logos/forbes-light.webp";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Logos() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="mt-20 w-full bg-primaryColor p-8 text-center dark:bg-accent ">
      <span className="text-sm font-semibold uppercase text-white dark:text-secondaryColor md:text-xl">
        featured in
      </span>

      <figure className="mx-auto mt-8 flex w-1/2 flex-wrap items-center justify-center gap-8">
        <img
          src={theme === "dark" ? logo1Dark : logo1Light}
          alt=""
          className="h-5 md:h-10"
        />
        <img
          src={theme === "dark" ? logo2Dark : logo2Light}
          alt=""
          className="h-5 md:h-10"
        />
        <img
          src={theme === "dark" ? logo3Dark : logo3Light}
          alt=""
          className="h-5 md:h-10"
        />
        <img
          src={theme === "dark" ? logo4Dark : logo4Light}
          alt=""
          className="h-5 md:h-10"
        />
        <img
          src={theme === "dark" ? logo5Dark : logo5Light}
          alt=""
          className="h-5 md:h-10"
        />
      </figure>
    </section>
  );
}

export default Logos;
