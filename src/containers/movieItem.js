import React, {Component} from 'react';
import '../styles/genres.css';

class MovieItem extends Component{


    clickHandler(e){
        console.log(e.target, 'was clicked');
        this.props.setFeatured(this.props.movie);       
    }

    render(){
        return (
            <div className="movie-item" style={{backgroundImage: `url("${this.props.backdropUrl}")`}}
            onClick={(e) => this.clickHandler(e)}>
                <div className="overlay">
                        <div className="movie-title">
                            {this.props.movie.title}
                        </div>
                </div>           
            </div>
        )
    }
}
export default MovieItem;