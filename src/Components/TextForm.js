import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Text has be converted to Uppecase!", "success");
    props.showToast("Text has be converted to Uppecase!");
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
        <div className="mb-3 my-4">
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
        <button
          className="btn btn-outline-primary mx-2 my-1 rounded-pill"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Upper Case
        </button>
        <button
          className="btn btn-outline-primary mx-2 my-1 rounded-pill"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to Lower Case
        </button>
        <button
          className="btn btn-outline-primary mx-2 my-1 rounded-pill"
          onClick={handleTitleClick}
          disabled={text.length === 0}
        >
          Convert to Title Case
        </button>
        <button
          className="btn btn-outline-primary mx-2 my-1 rounded-pill"
          onClick={handleCapFirstWordClick}
          disabled={text.length === 0}
        >
          Capitalize 1st Word
        </button>
        <button
          className="btn btn-outline-primary mx-2 my-1 rounded-pill"
          onClick={handleCopyToClipboard}
          disabled={text.length === 0}
        >
          Copy to Clipboard
        </button>
        <button
          className="btn btn-outline-danger mx-2 my-1 rounded-pill"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Summery</h3>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
