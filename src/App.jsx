import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Components/Main/Root";
import About from "./Components/Main/About";
import Project from "./Components/Main/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            {/* Nested Route */}
            <Route index element={<About />} />
            <Route path="projects" element={<Project />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
