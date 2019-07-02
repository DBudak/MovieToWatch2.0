import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAPIConfig } from '../actions/actions';
import Movies from './movies';

class Main extends Component {
    constructor(props) {
        super(props);
      }
    componentDidMount(){
        this.props.dispatch(getAPIConfig());
    }
    render() {
        return (
            <div>
                   <Movies />         
            </div>
        );
    }    
}

function mapStateToProps(state){
    return {
      genres : state.genres,
      movies : state.movies,
      config : state.config
    }
  }

  export default connect(mapStateToProps)(Movies)