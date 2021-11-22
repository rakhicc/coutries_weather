import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { data } from "browserslist";
class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({ data: res.data });
      //console.log(this.state.data);
    });
  }

  render() {
    /* const countryname = this.state.data.map((c) => {
      return (
        <div key={c.name.common}>
          <h2>{c.name.common}</h2>
          <p>{c.capital}</p>
          <img src={c.flags.png} />
        </div>
      );
    }); */
    return (
      <div className="countries">
        {this.state.data.map((c) => (
          <div key={c.name.common}>
            <h2>{c.name.common}</h2>
            <p>{c.capital}</p>
            <img src={c.flags.png} />
          </div>
        ))}
        }
      </div>
    );
  }
}

export default App;
