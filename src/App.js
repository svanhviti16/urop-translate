import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import About from './About/About';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
          <Switch className='sub-pages'>
            <Route exact path="/" component={MainContainer} />
            <Route path="/um" component={About} ></Route>
          </Switch>
      </div>
    )
  }
}
