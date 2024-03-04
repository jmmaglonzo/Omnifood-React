import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonStarsFill } from "react-icons/pi";
import ThemeContext from "../context/ThemeContext";

function DarkModeToggle() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={theme === "dark"}
          className="peer sr-only"
          onChange={handleTheme}
        />
        <div className="peer relative h-5 w-9 cursor-pointer rounded-full bg-backgroundColor after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {theme === "light" ? (
            <PiMoonStarsFill className="text-2xl" />
          ) : (
            <IoSunnyOutline className="text-2xl" />
          )}
        </span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
