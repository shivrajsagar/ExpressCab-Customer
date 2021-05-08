import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  BOOKING,
  LOADING,
  BOOKING_FAILED,
  BOOKING_SUCCESS,
  BOOKING_ERROR,
} from "./types";

import axios from "axios";

export const BookRide = () => async (dispatch) => {
  const customer_id = await AsyncStorage.getItem("customer_id");
  console.log(customer_id);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    customer_id: customer_id,
    car_id: "12",
    pickup_location: "The best pillow for amazing programmers.",
    drop_location: "delhi",
    pickup_address: "noida",
    drop_address: "noida",
    pickup_time_date: "The best pillow for amazing programmers.",
    drop_time_date: "01-04-2021",
    amount: "75",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://www.expresscab.in/customer-api/booking/bookinginsert.php",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => [
      //dispatch({ type: SAVE_BID, payload: result.message }),
      bookingSuccess(dispatch, result.message),
      console.log(result),
    ])
    .catch((error) => bookingError(dispatch, error));
};

const bookingError = (dispatch, error) => {
  dispatch({
    type: BOOKING_ERROR,
    payload: error,
  });
};

const bookingSuccess = (dispatch, message) => {
  dispatch({
    type: BOOKING_SUCCESS,
    payload: message,
  });
  setTimeout(() => {
    dispatch({ type: REFRESH_MESSAGE });
  }, 2000);
};
