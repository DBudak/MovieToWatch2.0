export default function movies(state = [], action) {
    switch (action.type) {
        case 'RECEIVED_MOVIES':
            if (action.movies.length > 0) {
                return Object.assign({}, state, { data: action.movies });
            } else {
                return Object.assign({}, state, { data: [], received: false, featuredMovie: [], noMoviesFound: true });
            }
        case 'FEATURED_MOVIE_CHOSEN':
            if (state.data.length > 0) {
                return Object.assign({}, state, { received: true, featuredMovie: action.movie });
            } else {
                return state;
            }
        default:
            return state;
    }
};