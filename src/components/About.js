import React, { useState } from "react";

export default function About(props){

    // const [darkMode, setdarkMode] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // });

    let myStyle ={
      color: props.mode === 'light'?'black':'white',
      backgroundColor: props.mode === 'light'?'white':'rgb(36,74,104)'
    }
    // const [myText, setMytext] = useState("Enable dark mode");

    // const toggleMode = ()=>{ 
    //     if(darkMode.color === 'white'){
    //         setdarkMode({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             // border: '1px solid white'
    //         })
    //         setMytext('Enable dark mode')
    //     }
    //     else{
    //         setdarkMode({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setMytext('Enable light mode')
    //     }
    // }

    
  return (
    <div className="container" style={{backgroundColor: props.mode === 'light'?'rgb(73, 156, 156)':'rgb(4, 39, 67)'}}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and effectively. Be it word count, character count or 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, book, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
      {/* <button type="button" className="btn btn-primary" onClick={toggleStyle}>{myText}</button>  */}
      </div>
    </div>
  );
}
