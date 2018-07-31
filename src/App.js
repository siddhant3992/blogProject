import React, { Component } from 'react';
import Header from './components/Header.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/><p>Blog</p>
      </div>
    );
  }
}

export default App;
