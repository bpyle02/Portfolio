import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

import { useSelector, useDispatch } from "react-redux";
import { selectSignedIn, setSignedIn, setUserData } from "../../features/userSlice";

import Header from "./Header";

const Blog = () =>
{
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();

    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    const logout = (reponse) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    return (
        <div>
            <Header />
            <div className = "h-screen bg-gray-100 dark:bg-zinc-900" >
                <p className = "text-2xl text-black dark:text-gray-100 sm:text-4xl font-bold text-center pt-32">Welcome to My Blog!</p>
                {!isSignedIn ? (
                    <div className = "justify-center text-center">
                        {/* <a href = "/" className = "button min-w-fit mt-12">Go back</a> */}
                        <GoogleLogin
                            clientId = "1033096154726-htm5g8i04v6p4asfrhdgeqpcsospett5.apps.googleusercontent.com"
                            render = {(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    disabled = {renderProps.disabled}
                                    className="button mt-5 cursor-pointer"
                                >
                                    Login with Google
                                </button>
                            )}
                            onSuccess = {login}
                            onFailure = {login}
                            isSignedIn = {true}
                            cookiePolicy = {"single_host_origin"}
                        />
                    </div>
                ) : (
                    <div className = "justify-center text-center">
                        {/* <a href = "/" className = "button min-w-fit mt-12">Go back</a> */}
                        <GoogleLogout
                            clientId = "1033096154726-htm5g8i04v6p4asfrhdgeqpcsospett5.apps.googleusercontent.com"
                            render = {(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    disabled = {renderProps.disabled}
                                    className="button mt-5 cursor-pointer"
                                >
                                    Logout
                                </button>
                            )}
                            onLogoutSuccess = {logout}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blog;