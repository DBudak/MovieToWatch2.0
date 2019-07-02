import React, {Component} from 'react';
import '../styles/genres.css';

class GenreButton extends Component{

    clickHandler(e){
        console.log(e.target.name, 'was clicked');
        if(e.target.className.includes('toggled')){
          e.target.className = e.target.className.replace(' toggled','');
          this.props.genreRemoved(e.target.name);
        }else{
            e.target.className = e.target.className + ' toggled';
          this.props.genreAdded(e.target.name);        
        }
        
    }

    render(){
        return (
            <button className="genre button" name={this.props.id} onClick={ (e) => this.clickHandler(e) } >
                {this.props.name}
            </button>
        )
    }
}
export default GenreButton;