import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles";
import { addMovie } from '../../store/actions/movieActions';

const useStyles = makeStyles({
    formStyle: {
      margin: "0px auto",
      padding: "30px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
      display: "flex",
      justifyContent: "space-between",
    },
    submitButton: {
        marginLeft: "20px",
    }
  });

const AddMovie = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [movie, setMovie] = useState({
        url: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMovie(movie));
        setMovie({ url: '' });
    }

    return ( 
        <>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit = { handleSubmit }>
                <TextField
                    id="enter-movie"
                    label="enterMovie"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    value = {movie.url}
                    onChange = {(e) => setMovie({...movie, url: e.target.value})}
                />
                <Button color="primary" variant="contained" className = {classes.submitButton} type="submit">
                    <Send/>
                </Button>
            </form>
        </>
     );
}
 
export default AddMovie;