import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAPIConfig } from '../actions/actions';

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
                    im connected check me out         
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

  export default connect(mapStateToProps)(Main)