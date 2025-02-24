import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages jsx here
import Home from "./Home";
import Records from "./Records";
import Entry from "./Entry";
import Manage from "./Manage";
import About from "./About";

// import css here
import "./index.css";

const sample = ReactDom.createRoot(document.getElementById("root"));
sample.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/Records" element={<Records />} />
        <Route path="/Entry" element={<Entry />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
