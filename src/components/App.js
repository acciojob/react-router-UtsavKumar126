
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import { NavLink } from "react-router-dom";
import { Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/about"} element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App
