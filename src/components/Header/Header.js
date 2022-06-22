import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Header.scss'
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/moviesSlice";

const Header = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
    }

    return (
        <div className={'header'}>
            <div className="user-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="user"/>
            </div>
            <div>
                <Link className={'logo'} to={'/'}>Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type={"text"}
                        value={term}
                        placeholder={'Search movie'}
                        onChange={(event) => setTerm(event.target.value)}/>
                    <button type={"submit"}>
                        <i className="fa-solid fa-magnifying-glass"/>
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Header;
