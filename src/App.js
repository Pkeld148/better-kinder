import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./containers/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Router> */}
          <Navbar />
          {/* <Switch></Switch> */}
        {/* </Router> */}
      </header>
    </div>
  );
}

export default App;
