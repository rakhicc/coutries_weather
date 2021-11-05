import React, { Component } from "react";

class Counter extends Component {
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
    let circleClass = "";
    this.state.counter === 0
      ? (circleClass = "circle")
      : this.state.counter % 2 === 0
      ? (circleClass = "circle even")
      : (circleClass = "circle odd");
    return (
      <main>
        <div>
          <h1 className={circleClass}>Total votes:{this.state.counter}</h1>
        </div>
        <button onClick={this.addVoteHandler}>add vote</button>
        <button onClick={this.removeVoteHandler}>remove vote</button>
        <button onClick={this.resetVoteHandler}>reset</button>
      </main>
    );
  }
}

export default Counter;
