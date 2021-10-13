import React, { useState } from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './Nav';
import Search from './Search';

const Home = () => {
  const { url } = useRouteMatch();
  const [deaths, minDeaths] = useState('');

  const minDeathCount = (e) => {
    minDeaths(e.target.value);
  };

  const countries = useSelector((state) => state.covidReducer.covidCountries);
  const mappedList = countries.filter((country) => deaths <= country.deaths)
    .map((country) => (
      <Link
        key={country.name[0]}
        href="/#"
        to={`${url}${country.name[0].toLowerCase()}`}
        className="country-card"
      >
        <div>
          <div key={country.name[0]} id={country.name[0]} className="country-link">
            <h2 className="country-name">{country.name[0]}</h2>
            <p className="cases">
              TOTAL CASES CONFIRMED:
              {' '}
              {country.confirmed}
            </p>
            <p className="deaths">
              TOTAL DEATHS:
              {' '}
              {country.deaths}
            </p>
          </div>
        </div>
      </Link>
    ));

  return (
    <>
      <Nav title="COVID numbers per Country" />
      <Search value={deaths} handler={minDeathCount} />
      <div className="countries-container">
        { mappedList }
      </div>
    </>
  );
};

export default Home;
