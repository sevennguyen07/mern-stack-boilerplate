import React from 'react';
import AddMovie from './AddMovie';
import ListMovies from './ListMovies';
import { useDispatch, useSelector } from "react-redux";

const Movies = () => {
    const user = useSelector((state) => state.auth);

    return ( 
        <>
            {user._id ? (
                <>
                    <AddMovie/>
                    <ListMovies/>
                </>
            ):
            (
                <>
                    <ListMovies/>
                </>
            )
            }
        </>
     );
}
 
export default Movies;