import { combineReducers } from "redux";

import authReducer from "./authReducer";

import placeReducer from "./placeReducer";
import carReducer from "./carReducer";
import BookingReducer from "./BookingReducer";
import priceReducer from "./priceReducer";

export default combineReducers({
  auth: authReducer,
  place: placeReducer,
  car: carReducer,
  booking: BookingReducer,
  price: priceReducer,
});
