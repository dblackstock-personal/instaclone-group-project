import React, { Component } from 'react';
import Feed from './components/Feed';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Stories from './components/Stories';
import './App.css';

class App extends Component {  //these are for the desktop website
  handleClick = (e) => {
    if (e.type == 'mousedown') {
      e.target.style.filter = 'invert(50%)';
    } else {
      e.target.style.filter = 'none';
    }
  }
  render() {
    return (
      <div>
        <TopNav logoClick={this.handleClick} />
        <div id="main-page">
          <Feed />
          <Stories id="stories-element" />
        </div>
        <BottomNav/>
      </div>
    )
  }
}

export default App;