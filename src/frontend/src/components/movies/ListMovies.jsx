import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
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

    return ( 
        <div className={classes.todosStyle}>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
        </div>
     );
}
 
export default ListMovies;