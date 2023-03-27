import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import { auth } from "./config/Firebase";
import Home from "./pages/Home";
import NewPost from "./pages/newPost";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        // console.log(auth?.currentUser?.uid);
    });

    return (
        <Router>
            <div className="h-screen w-full bg-gray-900">
                <nav className="sticky overflow-x-scroll top-0 bg-gray-800 w-full p-5 flex gap-5 justify-center items-center">
                    <NavLink
                        className="text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0"
                        to="/"
                    >
                        HOME
                    </NavLink>
                    {auth?.currentUser?.uid && (
                        <NavLink
                            className="text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0"
                            to="/new-post"
                        >
                            POST
                        </NavLink>
                    )}
                    {!auth?.currentUser?.uid && (
                        <NavLink
                            className="text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0"
                            to="/login"
                        >
                            LOGIN
                        </NavLink>
                    )}
                    {auth?.currentUser?.uid && (
                        <NavLink
                            className="text-white/40 hover:text-white transition ease-in text-2xl font-bold p-0"
                            to="/profile"
                        >
                            PROFILE
                        </NavLink>
                    )}
                </nav>
                <div className="absolute opacity-10 top-52 rotate-45 scale-x-125 right-24 h-[300px] blur-3xl w-[550px] rounded-full bg-gradient-to-br from-blue-900 via-blue-600 to-gray-500"></div>

                <div className="container mx-auto">
                    <div className="mockup-code bg-gray-900 my-10 mx-2">
                        <pre data-prefix="$">
                            <code>npm i cloudminds@latest</code>
                        </pre>
                        <pre data-prefix=">" className="text-warning">
                            <code>installing...</code>
                        </pre>
                        <pre data-prefix=">" className="text-success">
                            <code>Done!</code>
                        </pre>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route path="/new-post" element={<NewPost />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
