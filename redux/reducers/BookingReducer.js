import { BOOKING, LOADING, BOOKING_SUCCESS, BOOKING_FAILED } from "../actions/types";

const initial_state = {
  loading: false,
  data: [],
  customer_id: "",
  car_id: "",
  pickup_location: "",
  drop_location: "",
  pickup_address: "",
  drop_address: "",
  pickup_time_date: "",
  drop_time_date: "",
  amount: "",
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case BOOKING:
      return { ...state, data: action.payload, loading: false };
    case BOOKING_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case BOOKING_FAILED:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
