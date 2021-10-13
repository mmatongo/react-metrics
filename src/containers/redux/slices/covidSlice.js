import moment from 'moment';

const GET_COVID = 'covid/covidslice/GET_COVID';
const GET_SUCCESS = 'covid/covidslice/GET_SUCCESS';
const GET_ERR = 'covid/covidslice/GET_ERR';

const today = moment().format('YYYY-MM-DD');

const apiURL = `https://api.covid19tracking.narrativa.com/api/${today}`;

const getCovidData = () => async (dispatch) => {
  dispatch({ type: GET_COVID });
  const response = await fetch(apiURL);
  const covid = await response.json();
  return dispatch({ type: GET_SUCCESS, covid });
};

export {
  getCovidData as default,
  GET_COVID,
  GET_SUCCESS,
  GET_ERR,
};
