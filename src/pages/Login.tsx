import React, { FC } from "react";
import { auth, provider } from "../config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
    // Navigate use to redirect to Home Page
    let navigate = useNavigate();
    // Functionality to Sign in With Google
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("isAuth", "true");
                navigate("/");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h1 className="w-full mt-64 h-96 text-lg p-2 font-medium text-center">
                <button
                    onClick={signInWithGoogle}
                    className="btn h-14 font-bold text-lg text-gray-300 sm:w-96 bg-gray-600 w-full gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-google"
                        viewBox="0 0 16 16"
                        id="IconChangeColor"
                    >
                        <path
                            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                            id="mainIconPathAttribute"
                            fill="#222"
                        ></path>
                    </svg>
                    LOGIN WITH GOOGLE
                </button>
            </h1>
        </div>
    );
};

export default Login;

// Use it later [if you need it]
{
    /*        <div className="rounded-b-lg mx-auto w-80 bg-gray-600 p-1 font-bold text-lg flex justify-around">
                <NavLink
                    className="bg-gray-900 py-1 px-4 rounded-md"
                    to="sign-in"
                >
                    SIGN IN
                </NavLink>
                <NavLink
                    className="bg-gray-900 py-1 px-4 rounded-md"
                    to="sign-up"
                >
                    SIGN UP
                </NavLink>
            </div>
            <Outlet />
            */
}
