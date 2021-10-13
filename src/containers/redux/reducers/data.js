import moment from 'moment';
import {
  GET_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_ERR,
} from '../slices/dataSlice';

const today = moment().format('YYYY-MM-DD');

const initialState = {
  covidData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, pending: true };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        covidData: action.details.dates[today].countries,
      };
    case GET_DETAILS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
