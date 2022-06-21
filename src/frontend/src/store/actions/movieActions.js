
import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getMovies = (page) => {
  return (dispatch) => {
    axios
      .get(`${url}/movie/list?page=${page}&limit=5`, setHeaders())
      .then((response) => {
        dispatch({
          type: "GET_MOVIES",
          data: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addMovie = (newMovie) => {
  return (dispatch) => {

    axios
      .post(`${url}/movie/share`, { ...newMovie }, setHeaders())
      .then((response) => {
        dispatch({
          type: "ADD_MOVIE",
          movie: response.data.data,
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