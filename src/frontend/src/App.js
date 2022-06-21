import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from '@material-ui/core';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import Movies from './components/movies/Movies';
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./store/actions/authActions";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  }
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Container maxWidth="md">
          <NavBar/>
          <Container className={classes.contentStyle}>
            <Routes>
              <Route path='/login' element={<SignIn/>} />
              <Route path='/register' element={<SignUp/>} />
              <Route path='/' exact='true' element={<Movies/>} />
            </Routes>
          </Container>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
