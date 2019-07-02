import React, {Component} from 'react';
import '../styles/genres.css';
import MovieItem from './movieItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MovieList extends Component{

    render(){
            let movieList = this.props.movies.map( (movie, i) =>{
            let backgdropUrl =''; 
                if(movie.backdrop_path){
                    backgdropUrl =  this.props.config.data.images.base_url +  this.props.config.data.images.backdrop_sizes[0] + movie.backdrop_path;
                }else{
                    backgdropUrl =  this.props.config.data.images.base_url +  this.props.config.data.images.backdrop_sizes[0] + movie.poster_path;
                }
                return  <li key={i}>
                            <MovieItem backdropUrl={backgdropUrl} 
                                setFeatured={this.props.setFeatured} 
                                movie={movie}/>
                        </li>;
            } 
               
             );
   let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows : true,
      swipe : true,
      responsive : [
        { breakpoint: 650,
            settings: {slidesToShow: 1, slidesToScroll: 1} }, 
        { breakpoint: 960, 
            settings: {slidesToShow: 2, slidesToScroll: 2} },
        { breakpoint: 1280, 
            settings: {slidesToShow: 3, slidesToScroll: 3} },             
        { breakpoint: 1600, 
            settings: {slidesToShow: 4, slidesToScroll: 4} }, 
        { breakpoint: 1920, 
            settings: {slidesToShow: 5, slidesToScroll: 5} },
        { breakpoint: 10000, 
            settings: {slidesToShow: 6, slidesToScroll: 6} }
         ]
    };

        return (
            <div>
                <h2>Discover More</h2>
                <Slider {...settings} className="movie-list">                
                    {movieList}
                </Slider>
            </div>
        )
    }
}
export default MovieList;