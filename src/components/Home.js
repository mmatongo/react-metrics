import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './Nav';

const Home = () => {
  const { url } = useRouteMatch();

  const countries = useSelector((state) => state.covidReducer.covidCountries);
  const mappedList = countries.map((country) => (
    <div key={country.name[0]} className="country">
      <Link href="/#" to={`${url}${country.name[0].toLowerCase()}`}>
        <div key={country.name[0]} id={country.name[0]} className="country-link">
          <p>{country.name[0]}</p>
          <p>{country.confirmed}</p>
          <p>{country.deaths}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <Nav backButton="App" title="COVID numbers per Country" />
      { mappedList }
    </>
  );
};

export default Home;
