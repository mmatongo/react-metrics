import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCovidData from './redux/slices/covidSlice';
import Home from './components/Home';
import Data from './components/Data';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getCovidData());
  }, []);

  const countries = useSelector((state) => state.covidReducer.covidCountries);

  const routes = countries.map((country) => (
    <Route key={country.name[0]} path={`/${country.name[0].toLowerCase()}`}>
      <Data name={country.name[0]} />
    </Route>
  ));

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          { routes }
        </Switch>
      </Router>
    </div>
  );
};

export default App;
