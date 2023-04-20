import { USERS_DELETE_PENDING, USERS_DELETE_REJECT, USERS_DELETE_SUCCESS, USERS_DETAIL_FETCH_PENDING, USERS_DETAIL_FETCH_REJECT, USERS_DETAIL_FETCH_SUCCESS, USERS_FETCH_PENDING, USERS_FETCH_REJECT, USERS_FETCH_SUCCESS, USERS_POST_ADD_PENDING, USERS_POST_ADD_REJECT, USERS_POST_ADD_SUCCESS } from "./actionType";
import axios, * as others from "axios";
const BASE_URL = "https://dummyjson.com/users";

// Users Fetch
export const usersFetchPending = () => ({
  type: USERS_FETCH_PENDING,
});

export const usersFetchSuccess = (responseJson, page) => {
  return {
    type: USERS_FETCH_SUCCESS,
    payload: responseJson,
    page: page,
  };
};

export const usersFetchReject = (errorMessage) => {
  return {
    type: USERS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchUsers = (pages, search) => {
  return async (dispatch, getState) => {
    dispatch(usersFetchPending());
    console.log(search, "Masuk fetch users");
    try {
      const page = pages || 0;
      const limit = 30;
      const skip = page * limit;
      const url = search ? `${BASE_URL}/search?q=${search}` : `${BASE_URL}?limit=${limit}&skip=${skip}`;
      const usersList = await axios.get(url);

      // console.log(usersList.data.users, "][]][][][][]][");
      dispatch(usersFetchSuccess(usersList.data.users, page));
    } catch (err) {
      console.log(err);
      dispatch(usersFetchReject(err));
    }
  };
};

// Users Fetch
export const usersDetailFetchPending = () => ({
  type: USERS_DETAIL_FETCH_PENDING,
});

export const usersDetailFetchSuccess = (responseJson) => {
  return {
    type: USERS_DETAIL_FETCH_SUCCESS,
    payload: responseJson,
  };
};

export const usersDetailFetchReject = (errorMessage) => {
  return {
    type: USERS_DETAIL_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchUserDetail = (id) => {
  return async (dispatch, getState) => {
    dispatch(usersDetailFetchPending());
    console.log("Masuk  Detail users");
    try {
      const url = `${BASE_URL}/${id}`;
      const userDetail = await axios.get(url);

      // console.log(userDetail.data, "][]][][][][]][");
      dispatch(usersDetailFetchSuccess(userDetail.data));
    } catch (err) {
      console.log(err);
      dispatch(usersDetailFetchReject(err));
    }
  };
};

export const userAddPending = () => ({
  type: USERS_POST_ADD_PENDING,
});

export const userAddSuccess = () => ({
  type: USERS_POST_ADD_SUCCESS,
});

export const userAddReject = (errorMessage) => {
  return {
    type: USERS_POST_ADD_REJECT,
    payload: errorMessage,
  };
};

export const userPostAdd = (dataUser) => {
  const dataSend = {
    firstName: dataUser?.firstName,
    lastName: dataUser?.lastName,
    maidenName: dataUser?.maidenName,
    mainImg: dataUser?.mainImg,
    age: dataUser?.age,
    gender: dataUser?.gender,
    email: dataUser?.email,
    phone: dataUser?.phone,
    username: dataUser?.username,
    password: dataUser?.password,
    birthDate: dataUser?.birthDate,
    image: dataUser?.image,
    university: dataUser?.university,
    ein: dataUser?.ein,
    ssn: dataUser?.ssn,
    address: {
      address: dataUser?.address,
      postalCode: dataUser?.addressPostalCode,
      city: dataUser?.addressCity,
    },
    company: {
      name: dataUser?.companyName,
      title: dataUser?.companyTitle,
      department: dataUser?.companyDepartment,
      address: {
        address: dataUser?.companyAddress,
        postalCode: dataUser?.companyAddressPostalCode,
        city: dataUser?.companyAddressCity,
        state: dataUser?.companyAddressState,
      },
    },
    bank: {
      cardNumber: dataUser?.cardNumber,
      iban: dataUser?.iban,
      cardType: dataUser?.cardType,
      currency: dataUser?.currency,
      cardExpire: dataUser?.cardExpire,
    },
  };

  return async (dispatch, getState) => {
    dispatch(userAddPending());
    console.log(dataSend, "Masuk add users");
    try {
      const response = await fetch(`https://dummyjson.com/users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      });
      const responseJson = await response.json();
      console.log(responseJson, "HASIL DARI ADD");
      dispatch(userAddSuccess());
    } catch (err) {
      console.log(err);
      dispatch(userAddReject(err));
    }
  };
};

export const userEditPending = () => ({
  type: USERS_POST_ADD_PENDING,
});

export const userEditSuccess = () => ({
  type: USERS_POST_ADD_SUCCESS,
});

export const userEditReject = (errorMessage) => {
  return {
    type: USERS_POST_ADD_REJECT,
    payload: errorMessage,
  };
};

export const userPostEdit = (dataUser, params) => {
  const dataSend = {
    firstName: dataUser?.firstName,
    lastName: dataUser?.lastName,
    maidenName: dataUser?.maidenName,
    mainImg: dataUser?.mainImg,
    age: dataUser?.age,
    gender: dataUser?.gender,
    email: dataUser?.email,
    phone: dataUser?.phone,
    username: dataUser?.username,
    password: dataUser?.password,
    birthDate: dataUser?.birthDate,
    image: dataUser?.image,
    university: dataUser?.university,
    ein: dataUser?.ein,
    ssn: dataUser?.ssn,
    address: { address: dataUser?.address, postalCode: dataUser?.addressPostalCode, city: dataUser?.addressCity },
    company: {
      name: dataUser?.companyName,
      title: dataUser?.companyTitle,
      department: dataUser?.companyDepartment,
      address: { address: dataUser?.companyAddress, postalCode: dataUser?.companyAddressPostalCode, city: dataUser?.companyAddressCity, state: dataUser?.companyAddressState },
    },
    bank: {
      cardNumber: dataUser?.cardNumber,
      iban: dataUser?.iban,
      cardType: dataUser?.cardType,
      currency: dataUser?.currency,
      cardExpire: dataUser?.cardExpire,
    },
  };
  return async (dispatch, getState) => {
    dispatch(userEditPending());
    console.log(dataSend, params, "Masuk edit users");

    try {
      const response = await fetch(`${BASE_URL}/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      });
      const responseJson = await response.json();
      console.log(responseJson, "HASIL DARI EDIT");
      dispatch(userEditSuccess());
    } catch (err) {
      console.log(err);
      dispatch(userEditReject(err));
    }
  };
};

export const usersDeletePending = () => ({
  type: USERS_DELETE_PENDING,
});

export const usersDeleteSuccess = (responseJson) => {
  return {
    type: USERS_DELETE_SUCCESS,
    payload: responseJson,
  };
};

export const usersDeleteReject = (errorMessage) => {
  return {
    type: USERS_DELETE_REJECT,
    payload: errorMessage,
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    dispatch(usersDeletePending());
    console.log(id, "Masuk Delete users");
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch(usersDeleteSuccess());
    } catch (err) {
      console.log(err);
      dispatch(usersDeleteReject(err));
    }
  };
};
