import React, { useState } from "react";
import "./App.css";
import Navbar from "./Componant/Navbar";
import TextForm from "./Componant/TextForm";
import Alert from "./Componant/Alert";
import About from "./Componant/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({ message:message, type:type });
    setTimeout(() => setalert(null), 1000);
  };

  const toggalmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#161516ff";
      showAlert("Dark mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggalmode={toggalmode}
      />

      <div className="container">
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
