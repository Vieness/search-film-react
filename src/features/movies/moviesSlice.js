import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import movieApi from "../../common/API/MovieApi";
import {API_KEY} from "../../common/API/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term) => {
        const response = await movieApi
            .get(`?apiKey=${API_KEY}&s=${term}&type=movie`)
            .catch((err) => console.log('Err movies request', err))
        return (response.data)
    })
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (term) => {

        const response = await movieApi
            .get(`?apiKey=${API_KEY}&s=${term}&type=series`)
            .catch((err) => console.log('Err show request', err))
        return (response.data)
    })
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
    async (id) => {
        const response = await movieApi
            .get(`?apiKey=${API_KEY}&i=${id}&Plot=full`)
            .catch((err) => console.log('Err main request', err))
        return (response.data)
    })

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}}

        },
        extraReducers: {
            [fetchAsyncMovies.pending]: () => {
                console.log("Pending")
            },
            [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
                console.log("fetch success fetchAsyncMovies")
                return {...state, movies: payload}
            },
            [fetchAsyncMovies.rejected]: () => {
                console.log("Rejected")
            },
            [fetchAsyncShows.fulfilled]: (state, {payload}) => {
                console.log("fetch success fetchAsyncShows")
                return {...state, shows: payload}
            },
            [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
                console.log("fetch success fetchAsyncMovieOrShowDetail")
                return {...state, selectedMovieOrShow: payload}
            },
        }
    })

export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShows = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer
