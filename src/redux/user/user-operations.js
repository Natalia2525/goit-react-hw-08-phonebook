import axios from 'axios';
import * as actions from './user-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = credentials => dispatch => {
  dispatch(actions.registerRequest());

  axios
    .post(`/users/signup`, credentials)
    .then(({ data }) => dispatch(actions.registerSuccess(data)))
    .catch(error => dispatch(actions.registerError(error.message)));
};

export default register;
