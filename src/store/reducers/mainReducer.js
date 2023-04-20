import { USERS_DELETE_PENDING, USERS_DELETE_REJECT, USERS_DELETE_SUCCESS, USERS_DETAIL_FETCH_PENDING, USERS_DETAIL_FETCH_REJECT, USERS_DETAIL_FETCH_SUCCESS, USERS_FETCH_PENDING, USERS_FETCH_REJECT, USERS_FETCH_SUCCESS, USERS_POST_ADD_PENDING, USERS_POST_ADD_REJECT, USERS_POST_ADD_SUCCESS, USERS_POST_EDIT_PENDING, USERS_POST_EDIT_REJECT, USERS_POST_EDIT_SUCCESS } from "../actions/actionType";

const initialState = {
  isLoading: true,
  users: [],
  errorMsg: "",
  page: 0,

  userDetail: {},
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
        page: action.page,
      };
    case USERS_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case USERS_DETAIL_FETCH_PENDING:
      return {
        ...initialState,
      };
    case USERS_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetail: action.payload,
      };
    case USERS_DETAIL_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case USERS_POST_ADD_PENDING:
      return {
        ...initialState,
      };
    case USERS_POST_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USERS_POST_ADD_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case USERS_POST_EDIT_PENDING:
      return {
        ...initialState,
      };
    case USERS_POST_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USERS_POST_EDIT_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case USERS_DELETE_PENDING:
      return {
        ...initialState,
      };
    case USERS_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USERS_DELETE_REJECT:
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
