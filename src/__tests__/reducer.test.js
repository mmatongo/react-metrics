import covidReducer from '../containers/redux/reducers/covid';
import dataReducer from '../containers/redux/reducers/data';

const mockStore = {
  covid: {
    covidCountries: [
      {
        country: 'Nigeria',
        cases: '1,000,000',
        deaths: '1,000',
        recovered: '1,000',
        active: '1,000',
      },
    ],
  },
  covidData: {
    covidData: [
      {
        country: 'Nigeria',
        cases: '1,000,000',
        deaths: '1,000',
        recovered: '1,000',
        active: '1,000',
      },
    ],
  },
};

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

describe('Test the Data and Covid reducers', () => {
  test('Test Data reducer with mock Data.', () => {
    const GET_COVID = 'covid/covidslice/GET_COVID';
    const store = mockStore;
    const action = {
      type: GET_COVID,
      payload: {
        covidCountries: [
          {
            country: 'Nigeria',
            cases: '1,000,000',
            deaths: '1,000',
            recovered: '1,000',
            active: '1,000',
          },
        ],
        pending: false,
      },
    };
    expect(covidReducer(store.covid, action)).toEqual({
      covidCountries: [
        {
          country: 'Nigeria',
          cases: '1,000,000',
          deaths: '1,000',
          recovered: '1,000',
          active: '1,000',
        },
      ],
      pending: true,
    });
  });
  test('Test Covid reducer with mock Data.', () => {
    const GET_COVID = 'covid/covidslice/GET_COVID';
    const store = mockStore;
    const action = {
      type: GET_COVID,
      payload: {
        covidCountries: [
          {
            country: 'Nigeria',
            cases: '1,000,000',
            deaths: '1,000',
            recovered: '1,000',
            active: '1,000',
          },
        ],
        pending: false,
      },
    };
    expect(covidReducer(store.covid, action)).toEqual({
      covidCountries: [
        {
          country: 'Nigeria',
          cases: '1,000,000',
          deaths: '1,000',
          recovered: '1,000',
          active: '1,000',
        },
      ],
      pending: true,
    });
  });
});
