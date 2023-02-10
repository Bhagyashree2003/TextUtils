import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    let newuc = text.toUpperCase();
    setText(newuc);
    props.showalert("Converted to UpperCase", "success");
  };
  const handlelwclick = () => {
    let newlc = text.toLowerCase();
    setText(newlc);
    props.showalert("Converted to LowerCase", "success");
  };
  const handletoCopy = () => {
    let newlc = document.getElementById("Txtarea");
    newlc.select();
    navigator.clipboard.writeText(newlc.value);
    props.showalert("Text Copied Successfully.", "success");
  };
  const handleextraspaces = () => {
    let newlc = text.split(/[ ]+/);
    setText(newlc.join(" "));
    props.showalert("Extra Spaces are cleared!", "success");
  };
  const Cleartext = () => {
    let newlc = "";
    setText(newlc);
    props.showalert("Text are Cleared! ", "success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#495057" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="Txtarea"
            value={text}
            rows="12"
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary  mx-2"
          onClick={handleupclick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handlelwclick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handletoCopy}
        >
          {" "}
          Copy
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={Cleartext}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleextraspaces}
        >
          Clear ExtraSpaces
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read a words
        </p>
        <h3> Preview</h3>
        <p>{text.length > 0 ? text : "Enter Your text."}</p>
      </div>
    </>
  );
}
