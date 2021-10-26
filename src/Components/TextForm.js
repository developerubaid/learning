import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has be converted to Uppecase!", "success");
  };

  const handleLowClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has be converted to Lowercase!", "success");
  };

  const handleTitleClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    let newText = words.join(" ");
    setText(newText);
    props.showAlert("Text has be converted to Title Case!", "success");
  };

  const handleCapFirstWordClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = text[0].toUpperCase() + text.substring(1);
    setText(newText);
    props.showAlert(
      "First Letter of sentence has been capitalized!",
      "success"
    );
  };

  const handleCopyToClipboard = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = document.getElementById("textInput");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copied!", "success");
  };
  const handleClearClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Start typing here.");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textInput"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
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
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyToClipboard}
        >
          Copy to Clipboard
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
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
