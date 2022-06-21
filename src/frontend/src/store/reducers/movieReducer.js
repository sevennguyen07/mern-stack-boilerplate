import { toast } from "react-toastify";

const movieReducer = (data = {}, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return action.data;
    case "ADD_MOVIE":
      toast.success("A movie was shared...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...data,
        movies: [action.movie, ...data.movies]
      };
    default:
      return data;
  }
};

export default movieReducer;