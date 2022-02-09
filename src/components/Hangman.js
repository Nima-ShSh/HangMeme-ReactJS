import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import NavBar from "./nav/NavBar";
import {ApplicationViews} from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Logout} from './auth/Logout'
import "./Hangman.css"


export const Hangman = () => {
    <>
        <h2>Hang-Meme 3000</h2>
    </>

    const [loggedin, setLoggedin] = useState(false);
    const changeState = (bool) => setLoggedin(bool);

    if (localStorage.getItem("activeUser")) {
        return (
          <>
            <NavBar />
            <Logout />
            <ApplicationViews />
        
          </>
        );
      } else {
        return (
          <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="/login" element={<Login setLoggedin={changeState} />} />
            <Route path="/register" element={<Register setLoggedin={changeState} />} />
          </Routes>
        );
      }
}
