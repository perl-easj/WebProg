import axios from 'axios';

export const fetchF1Data = () => async dispatch => {
  const response = await axios.get("https://ergast.com/api/f1/2018/drivers.json");
  dispatch({ type: 'FETCH_F1DATA', payload: response.data.MRData.DriverTable });
};
