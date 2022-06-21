import React, { useEffect, useState }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/movieActions";
import { Pagination } from "@material-ui/lab";
import _ from 'lodash'
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
    const movieData = useSelector((state) => state.movieData);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMovies(movieData.page || 1));
    }, []);

    const handleChange = (e, p) => {
      e.preventDefault();
      dispatch(getMovies(p));
    };

    return ( 
        <div className={classes.todosStyle}>
            {movieData &&
              _.get(movieData, 'movies', []).map((movie) => {
                return (
                  <Movie
                    movie={movie}
                    key={movie._id}
                  />
                );
            })}
            <Pagination
              count={_.get(movieData, 'total_page', 0)}
              size="medium"
              page={_.get(movieData, 'page', 1)}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
        </div>
     );
}
 
export default ListMovies;