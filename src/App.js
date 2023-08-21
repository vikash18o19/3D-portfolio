import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import BlogPage from "./components/Blog/BlogPage";

import "bootstrap/dist/css/bootstrap.min.css";
import GlassNavbar from "./components/Navbar";

function App() {
  return (
    // <>
    //   <GlassNavbar />
    //   <MainPage />
    // </>
    <Router>
      {/* <GlassNavbar /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
