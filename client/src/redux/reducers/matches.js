import { GET_MATCHES } from '../actions/types';

/** Reducer containing user's matches. */
export default (state = [], action) => {
  switch (action.type) {
    case GET_MATCHES:
      return action.matches;
    default:
      return state;
  }
};
