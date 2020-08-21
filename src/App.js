import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
    state = {
      persons: [
        {name: 'ravi', age: 23},
        {name: 'Aryan', age: 25},
        {name: 'Dev', age: 27}
      ]
    }

  render() {
    return (
      <div className="App">
        <h1>Hey, This is a React application</h1>
        <Person name={this.state.persons[0].name} Age={this.state.persons[0].age} /> 
        <Person name={this.state.persons[1].name} Age={this.state.persons[1].age} /> 
        <Person name={this.state.persons[2].name} Age={this.state.persons[2].age} /> 

        {/* <Person name="Dev" Age="23"/>
        <Person name="Aryan" Age="25"> & Dance is my passion </Person>
        <Person name="Ravi" Age="28"/> */}
        <button>Change name</button>
      </div>
    );
  }
}

export default App;
