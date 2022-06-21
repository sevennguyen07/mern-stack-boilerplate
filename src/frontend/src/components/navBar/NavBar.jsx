import React from 'react';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    authButton: {
      right: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkStyle: {
      textDecoration: "none",
      color: "#fafafa",
    },
}));

const NavBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const user = useSelector((state) => state.auth);

    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/')
    }

    return (
        <>
          <div className={classes.root}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h4" className={classes.title}>
                  <Link className={classes.linkStyle} to="/">
                    Funny Movies
                  </Link>
                </Typography>
                {user._id ? (
                  <>
                    <Typography variant="subtitle2" className={classes.title}>
                      Logged in as {user.email}
                    </Typography>
                    <Button
                      edge="end"
                      color="inherit"
                      className={classes.authButton}
                      onClick={() => handleSignOut()}
                    >
                      <Link className={classes.linkStyle} to="/">
                        Logout
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      edge="end"
                      color="inherit"
                      className={classes.authButton}
                    >
                      <Link className={classes.linkStyle} to="/login">
                        Login
                      </Link>
                    </Button>
                    <Button
                      edge="end"
                      color="inherit"
                      className={classes.authButton}
                    >
                      <Link className={classes.linkStyle} to="/register">
                        Register
                      </Link>
                    </Button>
                  </>
                )}
              </Toolbar>
            </AppBar>
          </div>
        </>
      );
};
 
export default NavBar;