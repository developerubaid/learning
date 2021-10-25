// import logo from "./logo.svg";
//import axios from "axios";
//import { Component } from "react/cjs/react.production.min";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, switchMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      switchMode("dark");
      document.body.style.backgroundColor = "#171717";
    } else {
      switchMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* //Loads Navbar from Navbar function Component */}
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div className="container my-4">
        <TextForm heading="MAGIXET EDITOR" mode={mode} />
      </div>
      {/* TextInput */}
    </>
  );
}

export default App;
