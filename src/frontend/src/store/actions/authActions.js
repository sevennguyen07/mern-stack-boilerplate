import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/register`, user)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);

        dispatch({
          type: "SIGN_UP",
          token: response.data.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response?.data?.message);

        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/login`, { email, password })
      .then((response) => {
          console.log(response)
        localStorage.setItem("token", response.data.data.token);

        dispatch({
          type: "SIGN_IN",
          token: response.data.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response?.data?.message);

        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });

  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};