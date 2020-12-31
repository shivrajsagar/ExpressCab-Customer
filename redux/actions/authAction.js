import {
  LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";

import axios from "axios";

import * as RootNavigation from "../../navigation/RootNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userValue = ({ prop, value }) => {
  return {
    type: LOGIN_USER,
    payload: { prop, value },
  };
};

export const registerUserValue = ({ prop, value }) => {
  return {
    type: REGISTER_USER,
    payload: { prop, value },
  };
};

const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: error,
  });
};

const loginSuccess = (dispatch, message) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: message,
  });
};

const registerFail = (dispatch, error) => {
  dispatch({
    type: REGISTER_FAIL,
    payload: error,
  });
};

const registerSuccess = (dispatch, error) => {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: error,
  });
};

export const loginUser = ({ mobile, password }) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    var formdata = new FormData();
    formdata.append("customer_mobile", mobile);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await axios.post(
      "http://expresscab.in/customer-api/sign-in-up.php?apicall=login",
      formdata,
      { requestOptions }
    );

    console.log(response.data);

    response.data.error === true
      ? loginFail(dispatch, response.data.message)
      : [
          loginSuccess(dispatch, response.data.message),
          await AsyncStorage.setItem("user", JSON.stringify(response.data.user)),
          RootNavigation.navigate("App"),
        ];
  } catch (e) {
    console.log(e);
  }
};

export const registerUser = ({ name, mobile, email, address, aadhar, password }) => async (
  dispatch
) => {
  try {
    dispatch({ type: LOADING });
    var formdata = new FormData();
    formdata.append("customer_name", name);
    formdata.append("customer_mobile", mobile);
    formdata.append("customer_mail", email);
    formdata.append("customer_address", address);
    formdata.append("aadhar_no", aadhar);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response = await axios.post(
      "http://expresscab.in/customer-api/sign-in-up.php?apicall=signup",
      formdata,
      { requestOptions }
    );
    console.log(response.data);
    response.data.error == true
      ? registerFail(dispatch, response.data.message)
      : [
          registerSuccess(dispatch, response.data.message),
          setTimeout(() => {
            RootNavigation.navigate("Signin");
          }, 2000),
        ];
  } catch (e) {
    console.log(e);
  }
};
