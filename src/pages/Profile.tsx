import React, { FC } from "react";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile: FC = () => {
    // Navigate use to redirect to Home Page
    let navigate = useNavigate();
    // Function to signOut User

    return (
        <div className="w-full h-96 flex justify-center items-center">
            <button
                onClick={() => {
                    signOut(auth).then(() => {
                        // return isAuth state to fales

                        navigate("/");
                        console.log("User SignOut");
                    });
                }}
                className="btn h-14 font-bold text-lg text-gray-300 sm:w-96 bg-gray-600 w-[90%] gap-2"
            >
                SIGN OUT
            </button>
        </div>
    );
};

export default Profile;
