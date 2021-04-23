import { CAR_LIST, LOADING } from "../actions/types";

const initial_state = {
  loading: false,
  Car_Data: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case CAR_LIST:
      return { ...state, Car_Data: action.payload };
    default:
      return state;
  }
};
