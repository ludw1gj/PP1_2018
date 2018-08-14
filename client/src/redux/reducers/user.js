import { GET_USER, LOGOUT_USER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case LOGOUT_USER:
      // logout user, set user state to empty
      return {};
    default:
      return state;
  }
};
