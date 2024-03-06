import lightLogo from "../assets/omnifood-light-logo.webp";
import darkLogo from "../assets/omnifood-dark-logo.webp";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useRef, useEffect, useContext } from "react";
import DarkModeToggle from "./DarkModeToggle";
import ThemeContext from "../context/ThemeContext";

function NavBar() {
  const { theme } = useContext(ThemeContext);
  const [menu, setMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleNav = () => {
    setMenu((m) => !m);
  };

  return (
    <header
      className="fixed left-0 top-0 h-14 w-full bg-light py-4  shadow-lg dark:bg-backgroundColor "
      ref={navRef}
    >
      <nav className="container hidden items-center justify-between md:flex">
        <img
          src={theme === "dark" ? darkLogo : lightLogo}
          alt="Omnifood-Logo"
          className="h-5 lg:h-6"
        />

        <ul className="nav-links flex items-center gap-4 text-sm font-bold dark:text-white lg:text-base ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#how">How it works</a>
          </li>
          <li className="">
            <a href="#meals">Meals</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#cta">Contact Us!</a>
          </li>
        </ul>

        <DarkModeToggle />
      </nav>

      {/* Mobile Nav */}

      <nav className="flex items-center justify-between px-8 md:hidden">
        <img
          src={theme === "dark" ? darkLogo : lightLogo}
          alt="Omnifood-Logo"
          className="h-4 "
        />
        <ul
          className={`absolute left-0 top-12 flex w-full flex-col items-center gap-4 p-8 text-lg font-bold backdrop-blur-xl  duration-300 dark:text-white ${
            menu ? "translate-y-0" : "-translate-y-96"
          } `}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#how">How it works</a>
          </li>
          <li className="">
            <a href="#meals">Meals</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#cta">Contact Us!</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <button onClick={handleNav}>
            <BiMenuAltRight
              className={`text-3xl text-primaryColor duration-300 dark:text-secondaryColor ${
                menu ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
