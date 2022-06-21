import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles";

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
    return ( 
        <>
            <form noValidate autoComplete="off" className={classes.formStyle}>
                <TextField
                    id="enter-movie"
                    label="enterMovie"
                    variant="outlined"
                    autoFocus
                    fullWidth
                />
                <Button color="primary" variant="contained" className = {classes.submitButton} type="submit">
                    <Send/>
                </Button>
            </form>
        </>
     );
}
 
export default AddMovie;