import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Components/Main/Root";

function App() {
  return (
    <>
      <Router>
        <Root />
      </Router>
    </>
  );
}

export default App;
