import React from "react";
import Home from "./component/Home/Home";
import Weather from "./component/Weather/weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/weather" element={<Weather/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
