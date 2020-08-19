import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey, This is a React application</h1>
        <Person name="Dev" Age="23"/>
        <Person name="Aryan" Age="25"> & Dance is my passion </Person>
        <Person name="Ravi" Age="28"/>
      </div>
    );
  }
}

export default App;
