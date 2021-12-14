import React from "react";

import { FaSun, FaMoon } from "react-icons/fa"
import useDarkMode from "../hooks/useDarkMode";

function Header()
{
    return (
        <div className = "flex items-end p-3 flex-wrap bg-gray-100 dark:bg-zinc-900">
            <div className = "w-auto inline-flex ml-auto flex-row items-center content-between">
                <div className = "text-2xl px-3 py-2 mr-4 bg-gray-100 dark:bg-zinc-900 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 duration-300 transition-colors">
                  <ThemeIcon />
                </div>
                <a className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 dark:bg-zinc-900 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-zinc-800 duration-300 transition-colors" href = "blog">Blog</a>
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
          <FaSun className='dark:text-white' />
        ) : (
          <FaMoon className='dark:text-white' />
        )}
      </span>
    );
  };

export default Header;