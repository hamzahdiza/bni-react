import { USERS_FETCH_PENDING, USERS_FETCH_REJECT, USERS_FETCH_SUCCESS } from "./actionType";

const BASE_URL = "http://localhost:3000";

// Product Fetch
export const usersFetchPending = () => ({
  type: USERS_FETCH_PENDING,
});

export const usersFetchSuccess = (responseJson) => {
  return {
    type: USERS_FETCH_SUCCESS,
    payload: responseJson,
  };
};

export const usersFetchReject = (errorMessage) => {
  return {
    type: USERS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch(usersFetchPending());
    console.log("Masuk fetch products");
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJson = await response.json();
      // console.log(responseJson, "][]][][][][]][");
      dispatch(usersFetchSuccess(responseJson));
    } catch (err) {
      dispatch(usersFetchReject(err));
    }
  };
};
