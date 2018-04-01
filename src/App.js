import React, { Component } from 'react';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';

//import DATA from '../data';

class App extends Component {
  constructor(props) {
    super(props);
   // this.state = { data: [] };
  }
  render() {
    return (
      <div className="app">
      <Header/>
      <MainContainer />
      </div>
    )
  }
}
export default App;