import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Components/Main/Root";
import About from "./Components/Main/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            {/* Nested Route */}
            <Route index element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
