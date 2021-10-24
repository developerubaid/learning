// import logo from "./logo.svg";
//import axios from "axios";
//import { Component } from "react/cjs/react.production.min";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* //Loads Navbar from Navbar function Component */}
      <Navbar />

      <div className="container my-4">
        <TextForm heading="Enter your text here" />
      </div>
      {/* TextInput */}
    </>
  );
}

export default App;
