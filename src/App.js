import React from 'react';
import './App.css';
import { TopNav } from './components/TopNav';
import BottomNav from './components/BottomNav';

class App extends React.Component {
  render() {
    return (
      <div>
        <TopNav/>
        <BottomNav/>
      </div>
    )
  }
}

export default App;