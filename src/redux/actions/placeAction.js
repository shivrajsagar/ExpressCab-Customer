import {
  FETCH_CITY,
  LOADING,
  CAR_LIST,
  FETCH_PRICE,
  FETCH_STATE,
  CITY_ID,
  MESSAGE,
} from "./types";
import axios from "axios";
import api from "../../api";

export const cityidUpdate = (cityid) => async (dispatch) => {
  dispatch({ type: CITY_ID, payload: cityid });
};

export const fetchState = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(
      "http://expresscab.in/customer-api/location/read.php"
    );
    const result = await response.data.records;
    dispatch({ type: FETCH_STATE, payload: result });
  } catch (e) {
    console.log(e);
  }
};

export const carList = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(
      "http://expresscab.in/customer-api/car-list/read.php"
    );
    const result = await response.data.records;
    dispatch({ type: CAR_LIST, payload: result });
  } catch (e) {
    console.log(e);
  }
};

export const fetchPrice = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://www.expresscab.in/customer-api/location/readcity.php?cityid=${id}`
    );

    if (response.status == 200) {
      dispatch({ type: FETCH_PRICE, payload: response.data.records });
    } else if (!response.data.message) {
      dispatch({ type: MESSAGE, payload: response.data.message });
    } else {
      dispatch({ type: FETCH_PRICE, payload: response.data.records });
      // console.log("Nothing here");
    }
  } catch (e) {
    throw e;
  }
};
