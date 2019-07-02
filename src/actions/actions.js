import fetch from 'cross-fetch'
import API_KEY from '../keys';


const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

export function getAPIConfig(){
    return dispatch => {
        fetch(CONFIG_URL)
            .then(response => response.json())
            .then(json => dispatch(receivedConfig(json)))
    }
}

export function receivedConfig(res){
    return {
        type: 'RECEIVED_CONFIG',
        config: res
    }
}

export function getGenres(){
    return dispatch => {
        fetch(GENRES_URL)
            .then(response => response.json())
            .then(json => dispatch(receivedGenres(json.genres)))
    }
}

export function receivedGenres(res){
    return {
        type: 'RECEIVED_GENRES',
        genres: res
    }
}

export function genreAdded(id){
    return {
        type: 'USER_ADDED_GENRE',
        id : id
    }
}
export function genreRemoved(id){
    return {
        type: 'USER_REMOVED_GENRE',
        id : id
    }
}

export function getMovies(genres){
    genres = genres.join(',');
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=5&with_genres=${genres}`)
            .then(response => response.json())
            .then(json => dispatch(receivedMovies(json)))
            .then(json => dispatch(featuredMovieChosen(json.movies[0])))
 }
}

export function receivedMovies(res){
    return {
        type: 'RECEIVED_MOVIES',
        movies: res.results
    }
}

export function featuredMovieChosen(movie) {
    return {
        type: 'FEATURED_MOVIE_CHOSEN',
        movie: movie
    }
}
