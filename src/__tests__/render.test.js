import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';
import store from '../containers/redux/configureStore';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Data from '../components/Data';
import Back from '../components/Back';

describe('Test to see that all objects render correctly.', () => {
  test('Check if Home renders.', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Home /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Check if Nav renders.', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Nav /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Check if Search renders.', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Search /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Check if Data page renders.', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Data /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Check if Back button renders.', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Back /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
