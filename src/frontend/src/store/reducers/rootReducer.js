import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ 
    movieData: movieReducer,
    auth: authReducer
})

export default rootReducer;