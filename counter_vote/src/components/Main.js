import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Counter from "./Counter";
const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </div>
  );
};

export default Main;
