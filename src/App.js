import React, { Component } from 'react';
import { Container, NavBar } from './components';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.firstNameElement = React.createRef();
  }

  componentDidMount(){
    console.dir(this.searchElement);
    this.searchElement.focus();
    this.firstNameElement.current.focus();
  }

  render() {
    return (
      <div className="App">
        <h2>Main App</h2>
        Search:  <input ref={ (searchInput) => { this.searchElement = searchInput } } 
          type='text' 
          placeholder='Start searching..' />
          <br></br>
          First Name:  <input ref={this.firstNameElement} 
          type='text' 
          placeholder='Full Name?' />

        <NavBar />
        <Container />

      </div>
    );
  }
}

export default App;
