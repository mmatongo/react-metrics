import covidReducer from '../redux/reducers/covid';
import dataReducer from '../redux/reducers/data';

describe('Test the Data and Covid reducers', () => {
  test('Return the initial state of the covid reducer.', () => {
    expect(covidReducer(undefined, {})).toEqual({
      covidCountries: [],
    });
  });

  test('Return the initial state of the Data reducer.', () => {
    expect(dataReducer(undefined, {})).toEqual({
      covidData: [],
    });
  });

  test('Return the initial state with pending true after the starting action', () => {
    const GET_COVID = 'covid/covidslice/GET_COVID';
    expect(covidReducer(undefined, { type: GET_COVID })).toEqual({
      covidCountries: [],
      pending: true,
    });
  });

  test('Return the initial state with pending true after the starting action', () => {
    const GET_DETAILS = 'covid_data/detailsslice/GET_DETAILS';
    expect(dataReducer(undefined, { type: GET_DETAILS })).toEqual({
      covidData: [],
      pending: true,
    });
  });
});
