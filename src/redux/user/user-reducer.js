import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './user-actions';

const initialUserState = { name: null, email: null };
const user = createReducer(initialUserState, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer('', {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
});
export default combineReducers({
  user,
  token,
});
