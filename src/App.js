import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

class App extends React.Component {

  //these are for the desktop website
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
        <TopNav logoClick={this.handleClick}/>
        <BottomNav />
      </div>
    )
  }
}

export default App;