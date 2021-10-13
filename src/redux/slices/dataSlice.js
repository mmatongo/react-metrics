import moment from 'moment';

const GET_DETAILS = 'covid_data/detailsslice/GET_DETAILS';
const GET_DETAILS_SUCCESS = 'covid_data/detailsslice/GET_DETAILS_SUCCESS';
const GET_DETAILS_ERR = 'covid_data/detailsslice/GET_DETAILS_ERR';

const today = moment().format('YYYY-MM-DD');

const apiURL = `https://api.covid19tracking.narrativa.com/api/${today}/country`;

const pullData = (country) => async (dispatch) => {
  dispatch({ type: GET_DETAILS });
  const response = await fetch(`${apiURL}${country}`);
  const details = await response.json();
  return dispatch({ type: GET_DETAILS_SUCCESS, details });
};

export {
  pullData as default,
  GET_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_ERR,
};
