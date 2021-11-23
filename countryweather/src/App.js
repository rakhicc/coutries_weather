import "./App.css";

import React from "react";
import CountriesList from "./components/CountriesList";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <CountriesList />
    </Router>
  );
};

export default App;
