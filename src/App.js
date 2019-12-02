import React, {Component} from 'react';
import Feed from './components/Feed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
         <Feed />
        </div>
      </div>
    )
  }
}

export default App;