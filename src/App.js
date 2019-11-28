//to push for the first time:
//talk to Davey to set up pages
// git init
// git add .
// git commit -m "comments here based on the change"
// git remote add origin
// git push -u origin master
// npm run deploy
// https://github.com/dblackstock-personal/instaclone-group-project


//to push for the second time onwards:
// git init
// git add .
// git commit -m "comments here based on the change"
// git push -u origin master
// npm run deploy


import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Stories from './components/Stories';

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
        <div id="main-page">
          <div id="feed-placeholder-wrap">
             <div class="placeholder-feed"> </div>
             <div class="placeholder-feed"> </div>
             <div class="placeholder-feed"> </div>
          </div>
          <Stories/>
        </div>
        
        <BottomNav />
      </div>
    )
  }
}

export default App;