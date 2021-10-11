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
    <>
      <Nav title="Country Data" backButton="Countries" />
      <h2>Data</h2>
      <p>{covidStats?.name}</p>
      <p>
        Deaths until today:
        {covidStats?.today_deaths}
      </p>
      <p>
        Deaths today:
        {covidStats?.today_new_deaths}
      </p>
      <p>
        Confirmed cases until today:
        {covidStats?.today_confirmed}
      </p>
      <p>
        Confirmed cases today:
        {covidStats?.today_new_confirmed}
      </p>
    </>
  );
};

Data.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Data;
