import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":
      const user = jwtDecode(action.token); 
      return {
        ...initialState,
        token: action.token,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      return {
        token: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;