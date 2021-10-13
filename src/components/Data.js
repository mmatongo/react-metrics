import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav';
import pullData from '../redux/slices/dataSlice';

const Data = ({ name }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const countryData = useSelector((state) => state.dataReducer.covidData);
  const covidStats = countryData[name];

  useEffect(async () => {
    if (!countryData.length) {
      dispatch(pullData(url));
    }
  }, []);

  return (
    <div className="country-container">
      <Nav title="Contry Details" backButton="< Back" />
      <div className="country-details">
        <h2>{covidStats?.name}</h2>
        <p>
          Source:
          {' '}
          {covidStats?.source}
        </p>
        <p>
          Deaths until today:
          {' '}
          {covidStats?.today_deaths}
        </p>
        <p>
          Deaths today:
          {' '}
          {covidStats?.today_new_deaths}
        </p>
        <p>
          Confirmed cases until today:
          {' '}
          {covidStats?.today_confirmed}
        </p>
        <p>
          Confirmed cases today:
          {' '}
          {covidStats?.today_new_confirmed}
        </p>
        <p>
          Open cases until today:
          {' '}
          {covidStats?.today_open_cases}
        </p>
        <p>
          Recovered cases until today:
          {' '}
          {covidStats?.today_recovered}
        </p>
        <p>
          New open cases:
          {' '}
          {covidStats?.today_new_open_cases}
        </p>
        <p>
          New recovered cases:
          {' '}
          {covidStats?.today_new_recovered}
        </p>
      </div>
    </div>
  );
};

Data.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Data;
