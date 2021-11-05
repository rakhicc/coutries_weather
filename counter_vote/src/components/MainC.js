import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
class MainC extends Component {
  state = {
    counter: 0,
  };
  addVoteHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  resetVoteHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  removeVoteHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default MainC;
