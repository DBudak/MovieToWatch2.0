import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
      }
    componentDidMount(){
        this.props.getAPIConfig();
    }
    render() {
        return (
            <div>
                    im connected             
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