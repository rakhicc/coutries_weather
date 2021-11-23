import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { data } from "browserslist";
import number from "easy-number-formatter";
class App extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,currencies,flags,languages,population"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
  }
  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

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
    /* const countryFilter = this.state.data.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    }); */
    if (this.state.isLoading) {
      return <div class="lds-dual-ring"></div>;
    }
    if (!this.state.isLoading) {
      return (
        <div className="countries">
          <div className="searchInput">
            <input type="text" name="search" onChange={this.searchHandler} />
          </div>

          {this.state.data
            .filter((item) => {
              return item.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
            })
            .map((c) => (
              <div className="country" key={c.name}>
                <span>
                  <h2 className="back">
                    <b>{c.name}</b>
                  </h2>
                  <p className="back">
                    <b>{c.capital}</b>
                  </p>
                </span>
                <img src={c.flags.png} />
                <p>
                  Language (s):
                  {c.languages.map((language, i) => (
                    <span key={i}>
                      {" "}
                      <b>{language.name}</b>
                    </span>
                  ))}
                </p>
                <p>
                  Population:<b>{number.formatNumber(c.population)}</b>
                </p>
                <p>
                  Currency:
                  {c.currencies.map((currency) => (
                    <span>
                      {" "}
                      <b>
                        {currency.name} - {currency.symbol}
                      </b>
                    </span>
                  ))}
                </p>
              </div>
            ))}
        </div>
      );
    }
  }
}

export default App;
