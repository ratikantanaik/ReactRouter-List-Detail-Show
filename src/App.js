import React, { Component } from 'react';
import { Container, NavBar } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Main App Here...............</h2>

        <NavBar />
        <Container />

      </div>
    );
  }
}

export default App;
