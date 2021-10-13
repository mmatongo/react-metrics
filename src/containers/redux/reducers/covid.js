import moment from 'moment';
import { GET_COVID, GET_SUCCESS, GET_ERR } from '../slices/covidSlice';

const today = moment().format('YYYY-MM-DD');

const initialState = {
  covidCountries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID:
      return { ...state, pending: true };
    case GET_SUCCESS:
    {
      const covidCountries = [];
      Object.entries(action.covid.dates[today].countries).forEach((key) => {
        covidCountries.push({
          name: key,
          confirmed: key[1].today_confirmed,
          deaths: key[1].today_deaths,
        });
      });
      return { ...state, pending: false, covidCountries };
    }
    case GET_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
