import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey, This is a React application</h1>
        <Person></Person>
      </div>
    );
  }
}

export default App;
