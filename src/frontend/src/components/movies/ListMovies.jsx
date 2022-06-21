import React, { useEffect }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/movieActions";

import Movie from './Movie'

const useStyles = makeStyles({
    todosStyle: {
      margin: "20px auto",
      padding: "20px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
    },
  });

  
const ListMovies = () => {
    const classes = useStyles();
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMovies());
    }, []);

    return ( 
        <div className={classes.todosStyle}>
            {movies &&
              movies.map((movie) => {
                return (
                  <Movie
                    movie={movie}
                    key={movie._id}
                  />
                );
            })}
        </div>
     );
}
 
export default ListMovies;