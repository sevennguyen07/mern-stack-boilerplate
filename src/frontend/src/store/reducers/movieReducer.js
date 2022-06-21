import { toast } from "react-toastify";

const movieReducer = (movies = [], action) => {
  console.log(action)
  switch (action.type) {
    case "GET_MOVIES":
      return action.movies;
    case "ADD_MOVIE":
      toast.success("A movie was shared...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.movie, ...movies];
    default:
      return movies;
  }
};

export default movieReducer;