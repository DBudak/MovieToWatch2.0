import React, {Component} from 'react';
import GenreButton from './genreButton';
import '../styles/genres.css';
import 'bootstrap-grid-only/bootstrap.css';
import MovieList from './movieList';
import {
    getGenres
} from '../actions/actions';
class Movies extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        console.log('in movies', this.props);
        this.props.dispatch(getGenres());        
    }
    getMovies(e){
        this.props.getMovies(this.props.genres.userChoice);
    }
    imageLinkConstructor(url, type){
        if(type === 'backdrop'){
            return this.props.config.data.images.base_url +  this.props.config.data.images.backdrop_sizes[2] + url;
        }else if(type === 'poster'){
            return this.props.config.data.images.base_url +  this.props.config.data.images.poster_sizes[3] + url;
        }
    }
    setFeatured(movie){
        this.props.movies.featuredMovieChosen(movie);
    }
    render() {
        //generating a list
        let genreList = '';
        if(this.props.genres.received){
            console.log('genres received by Movies Component');
            genreList = this.props.genres.data.map((genre, i) => 
                <li key={genre.id}>
                    <GenreButton name={genre.name} id={genre.id} 
                    genreAdded={ this.props.genreAdded } 
                    genreRemoved={ this.props.genreRemoved }/>
                </li>
            );
            console.log('genreList generated', genreList);
        }
        //generating a button
        let fetchButton = '';
        let movieViewText = 
            <h2>                
                Looking for a good movie to watch?<br/>
                Pick some genres you like
            </h2>;
        let movieViewClass = "movie-container container-fluid";
        if(this.props.genres.userChoice.length > 0){
            fetchButton = 
            <button className="button fetch ready" 
            onClick={ e => this.getMovies(e) }>
                Show Me What You Got
            </button>;
            movieViewText = <h2>Almost There!<br/> Hit the red button above!</h2>
            movieViewClass = movieViewClass + ' almost';
        }else{
            fetchButton = 
            <button className="button fetch"
            disabled 
            onClick={ e => this.getMovies(e) }>
                Pick some genres
            </button>;
            movieViewClass = "movie-container container-fluid";
        }
        if(this.props.movies.noMoviesFound){
           movieViewText = <h2>Oops!<br/> Looks like you went too far! <br/> 
           Try to choose less genres and I will find something for you</h2> 
        }
        let movieView = 
            <div className={movieViewClass}> 
                {movieViewText}
            </div>;
        //genreating a movie view
        if(this.props.movies.received){
            let backgdropUrl = this.imageLinkConstructor(this.props.movies.featuredMovie.backdrop_path, 'backdrop');
            let posterUrl = this.imageLinkConstructor(this.props.movies.featuredMovie.poster_path, 'poster');
            let title = this.props.movies.featuredMovie.title;
            //let releaseDate = this.props.movies.featuredMovie.release_date;
            let description = this.props.movies.featuredMovie.overview;
            movieView = 
                <div className="movie-container container-fluid" style={{backgroundImage: `linear-gradient(to right,rgba(2, 2, 2, 0.80) 20%, rgba(2, 2, 2, 0.60) 60%,rgba(0, 0, 0, 0)),linear-gradient(to bottom,rgba(0, 0, 0, 0) 60%,rgba(2, 2, 2, 0.60)),url("${backgdropUrl}")` }}>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-lg-3 col-xl-2 poster-wrap">
                            <img alt="movie_poster" className="poster" src={posterUrl} />
                        </div>
                        <div className="col-xs-12 col-md-8 col-lg-9 col-xl-10">
                            <div className="title">
                                {title}
                            </div>
                            <div className="description">
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <MovieList movies={this.props.movies.data} 
                        config={this.props.config}
                        setFeatured={this.props.featuredMovieChosen}/>
                    </div>
                </div> 
        }
        return (
            <div>
                <div className="genres-bar container-fluid">
                    <ul className="genres">
                        {genreList}
                    </ul>
                    {fetchButton}
                </div>
                {movieView}      
            </div>
        );
    }
}
export default Movies;