import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#495057";
      showalert("Dark mode enable..", "success");
      document.title = "Txt Utility-Dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
      showalert("Light mode enable..", "success");
      document.title = "Txt Utility-Light mode";
    }
  };
  
    const showalert = (message, type) => {
      setalert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        setalert(null);
      }, 1000);
    };

  return (
    <Router>
      <Navbar
        title="TextUtlis"
        mode={mode}
        togglemode={togglemode}
        aboutText="About"
      />
      <Alert alert={alert}></Alert>

      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Textform
                showalert={showalert}
                heading="Enter your text"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" elmeent={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
