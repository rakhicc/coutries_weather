import React, { Component } from "react";
//import "./App.css";

import axios from "axios";

import CountryCard from "./CountryCard";
class CountriesList extends Component {
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
              <CountryCard
                name={c.name}
                capital={c.capital}
                flag={c.flags.png}
                language={c.languages.map((language, i) => (
                  <span key={i}>
                    {" "}
                    <b>{language.name}</b>
                  </span>
                ))}
                population={c.population}
                currencies={c.currencies.map((currency) => (
                  <span>
                    {" "}
                    <b>
                      {currency.name} - {currency.symbol}
                    </b>
                  </span>
                ))}
              />
            ))}
        </div>
      );
    }
  }
}
export default CountriesList;
