import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {BrowserRouter as Router, 
    Switch, 
    Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      status: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgb(73, 156, 156)";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };

  return (
    <>
    <Router>
      {/* Navbar */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>

      {/* Alert */}
      <Alert alert={alert}/>

        {/* Switch  */}
      <div className="container">
        <Switch>

            <Route path="/home"  exact>
              <TextForm heading="Enter the text analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> </Route> 
            <Route path="/about" exact><About mode={mode}/></Route>

        </Switch>

      </div>
      </Router>
    </>
  );
}

export default App;
