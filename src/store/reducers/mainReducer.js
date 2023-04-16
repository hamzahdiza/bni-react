import { USERS_FETCH_PENDING, USERS_FETCH_REJECT, USERS_FETCH_SUCCESS } from "../actions/actionType";

const initialState = {
  isLoading: true,
  users: [],
  errorMsg: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH_PENDING:
      return {
        ...initialState,
      };
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case USERS_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
