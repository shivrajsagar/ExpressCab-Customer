import {
  LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  mobile: "",
  email: "",
  aadhar: "",
  address: "",
  password: "",
  loading: false,
  error: "",
  message: "",
  registerMessage: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOGIN_USER:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
        mobile: "",
        password: "",
      };
    case REGISTER_USER:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        registerMessage: "",
        error: "",
      };
    case REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        name: "",
        mobile: "",
        email: "",
        aadhar: "",
        address: "",
        password: "",
        loading: false,
      };
    default:
      return state;
  }
};
