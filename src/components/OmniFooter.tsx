import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import lightLogo from "../assets/omnifood-light-logo.webp";
import darkLogo from "../assets/omnifood-dark-logo.webp";
function OmniFooter() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className=" my-20 py-20 pb-4">
      <div className="container grid grid-cols-2 text-xs dark:text-white md:grid-cols-4 md:text-base">
        <div className="flex flex-col gap-6 md:gap-0 lg:justify-between">
          <img
            src={theme === "dark" ? darkLogo : lightLogo}
            alt="Omnifood Logo"
          />
          <p className="text-center">
            Copyright © 2023 by Omnifood, Inc. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-col items-center space-y-4">
          <span className="font-bold">Account</span>
          <li className="cursor-pointer md:hover:underline">Create Account</li>
          <li className="cursor-pointer md:hover:underline">Sign in</li>
          <li className="cursor-pointer md:hover:underline">iOS app</li>
          <li className="cursor-pointer md:hover:underline">Android app</li>
        </ul>

        <ul className="flex flex-col items-center space-y-4">
          <span className="font-bold">Company</span>
          <li className="cursor-pointer md:hover:underline">About Omnifood</li>
          <li className="cursor-pointer md:hover:underline">For Business</li>
          <li className="cursor-pointer md:hover:underline">
            Cooking Partners
          </li>
          <li className="cursor-pointer md:hover:underline">Careers</li>
        </ul>

        <ul className="flex flex-col items-center space-y-4">
          <span className="font-bold">Resources</span>
          <li className="cursor-pointer md:hover:underline">
            Recipe Directory
          </li>
          <li className="cursor-pointer md:hover:underline">Help Center</li>
          <li className="cursor-pointer md:hover:underline">Privacy & Terms</li>
        </ul>
      </div>
      <span className=" fixed bottom-0 left-0 w-full bg-primaryColor p-1 text-center font-bold text-white dark:bg-accent ">
        <p>Concept from Omnifood Project</p>
      </span>
    </footer>
  );
}

export default OmniFooter;
