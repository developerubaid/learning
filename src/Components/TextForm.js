import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleTitleClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    let newText = words.join(" ");
    setText(newText);
  };

  const handleCapFirstWordClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = text[0].toUpperCase() + text.substring(1);
    setText(newText);
  };

  const handleClearClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Start typing here.");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textInput"
            value={text}
            rows="10"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleTitleClick}
        >
          Convert to Title Case
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCapFirstWordClick}
        >
          Capitalize 1st Word
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-5">
        <h3>Summery</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
