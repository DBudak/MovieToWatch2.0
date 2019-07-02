import React, { Component } from 'react';
import '../styles/genres.css';

class GenreButton extends Component {
    render() {
        return (
            <button className="genre button" name={this.props.id} onClick={this.props.onClick}>
                {this.props.name}
            </button>
        )
    }
}
export default GenreButton;