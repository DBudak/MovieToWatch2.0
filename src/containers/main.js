import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIConfig } from '../actions/actions';
import Movies from './movies';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
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

function mapStateToProps(state) {
  return {
    genres: state.genres,
    movies: state.movies,
    config: state.config
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)