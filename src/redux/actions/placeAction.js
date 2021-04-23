import { FETCH_CITY, LOADING } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const fetchCity = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get("http://expresscab.in/customer-api/location/read.php");

    const result = await response.data.records;
    // console.log(result.city_id);

    dispatch({ type: FETCH_CITY, payload: result });
  } catch (e) {
    console.log(e);
  }
};
