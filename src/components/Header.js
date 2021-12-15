import React from "react";

import { FaSun, FaMoon } from "react-icons/fa"
import useDarkMode from "../hooks/useDarkMode";

function Header()
{
    return (
        <div className = "flex items-end p-3 flex-wrap bg-gray-100 dark:bg-zinc-900">
            <div className = "w-auto inline-flex ml-auto flex-row items-center content-between">
                <div className = "text-2xl button">
                  <ThemeIcon />
                </div>
                <a className = "button" href = "blog">Blog</a>
            </div>
        </div>
    )
}

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun className='dark:text-white cursor-pointer' />
        ) : (
          <FaMoon className='dark:text-white cursor-pointer' />
        )}
      </span>
    );
  };

export default Header;