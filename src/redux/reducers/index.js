import { combineReducers } from "redux";
import authReducer from "./authReducer";
import placeReducer from "./placeReducer";
import BookingReducer from "./BookingReducer";


export default combineReducers({
  auth: authReducer,
  place: placeReducer,
  booking: BookingReducer,
});
