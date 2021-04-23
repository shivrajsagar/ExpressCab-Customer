import { FETCH_PRICE, LOADING } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const fetchprice = (selectedID) => async (dispatch) => {
  const city_id = await AsyncStorage.getItem("city_id");
  console.log(city_id + " hello");
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`https://www.expresscab.in/customer-api/location/readcity.php?cityid=${164}`);

    const result = await response.data.records;

    dispatch({ type: FETCH_PRICE, payload: result });
  } catch (e) {
    console.log(e);
  }
};
