import { CAR_LIST, LOADING } from "./types";

import axios from "axios";

export const CarDetail = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get("http://expresscab.in/customer-api/car-list/read.php");

    const result = await response.data.records;

    dispatch({ type: CAR_LIST, payload: result });
  } catch (e) {
    console.log(e);
  }
};
