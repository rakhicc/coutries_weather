import React from "react";
import number from "easy-number-formatter";
const CountryCard = (props) => {
  return (
    <div>
      <div className="country" key={props.name}>
        <span>
          <h2 className="back">
            <b>{props.name}</b>
          </h2>
          <p className="back">
            <b>{props.capital}</b>
          </p>
        </span>
        <img src={props.flag} />
        <p>
          Language (s):
          <b>{props.language}</b>
        </p>
        <p>
          Population:<b>{number.formatNumber(props.population)}</b>
        </p>
        <p>
          Currency:
          <b>{props.currencies}</b>
        </p>
      </div>
      )
    </div>
  );
};

export default CountryCard;
