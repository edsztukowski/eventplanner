import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';

import AppRouter from './routers/AppRouter';


class App extends Component {

   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Event Planner</h1>
        
        </header>
        <AppRouter />

      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
 })


export default connect(mapStateToProps)(App);
