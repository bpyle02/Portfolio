import React from "react";
import { useState } from "react";

import { FaSun, FaMoon } from "react-icons/fa"
import { VscSearch } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

import { selectSignedIn, selectUserData, setInput } from "../../features/userSlice";
import { useSelector } from "react-redux";

import useDarkMode from "../../hooks/useDarkMode";

function Header()
{
    const [inputValue, setInputValue] = useState("");

    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData)

    const handleClick = (e) => {
        e.preventDefault();
        dispatchEvent(setInput(inputValue));
    }

    return (
        <div className = "flex items-end p-3 flex-wrap bg-gray-100 dark:bg-zinc-900">
            <div className = "w-auto inline-flex ml-auto flex-row items-center content-between">
                {isSignedIn && (
                    <div>
                        <img src = {userData?.imageUrl} alt = {userData?.name} className = "absolute left-8 h-10 rounded-3xl shadow-xl"/>
                        <p className = "font-semibold absolute left-8 ml-12 top-5">{userData?.name}</p>
                        <div className = "relative pr-4">
                            {/* <Avatar src = {userData?.imageUrl} alt = {userData?.name} /> */}
                            <input
                                className = "rounded p-2 pr-5 shadow"
                                placeholder = "Search"
                                value = {inputValue}
                                onChange = {(e) => setInputValue(e.target.value)} 
                            />
                            <button className = "right-0 absolute text-2xl button-main" onClick = {handleClick}><VscSearch /></button>
                        </div>
                    </div>
                )}
                <div className = "text-2xl button">
                  <ThemeIcon />
                </div>
                <a className = "button" href = "/">Home</a>
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