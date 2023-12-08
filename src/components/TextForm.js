import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let record = text.toUpperCase();
    setText(record);
    props.showAlert('Text converted to UPPERCASE', 'success')
  };
  const handleLowClick = () => {
    let record = text.toLowerCase();
    setText(record);
    props.showAlert('Text converted to lowercase', "success")
  };
  const handleClearClick = () => {
    let record = "";
    setText(record);
    props.showAlert('Text cleared', 'success')
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            value={text}
            className="form-control text-black"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==="dark"?"white":"black"}}>
          </textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary">
          Convert to UPPERCASE
        </button>
        <br />
        <button onClick={handleLowClick} className="btn btn-primary my-3">
          Convert to lowercase
        </button>
        <br />
        <button onClick={handleClearClick} className="btn btn-primary">
          Clear text
        </button>
        <div className= 'container text-' >
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words, {text.length} characters
          </p>
          <p>{0.015 * text.split(" ").length} Minutes to read completely</p>
          <h4>Preview</h4>
          <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
        </div>
      </div>
    </>
  );
}