import React, {useEffect} from 'react';
import MovieListing from "../MoviesListing/MovieListing";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/moviesSlice";

const Home = () => {
    const dispatch = useDispatch()
    const movieText='Harry'
    const showText = 'Friends'
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    }, [dispatch])

    return (
        <div className={'banner-img'}>
            <MovieListing/>
        </div>
    );
};

export default Home;
