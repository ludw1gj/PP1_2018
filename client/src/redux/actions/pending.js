import { GET_PENDING, REMOVE_PENDING } from './types';
import axios from 'axios';

export const getPending = id => {
  return async dispatch => {
    const response = await axios.get('/api/matches/pending/' + id);
    const pending = {
      loading: false,
      matches: response.data
    };
    dispatch({ type: GET_PENDING, pending: pending });
  };
};

export const removePending = user => {
  return dispatch => {
    dispatch({ type: REMOVE_PENDING, displayName: user.displayName });
  };
};
