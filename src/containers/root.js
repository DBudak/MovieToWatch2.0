import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Main from './main';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}