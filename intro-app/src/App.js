import React, { Component } from 'react';
import './App.css';
import Person from './person/person.js'

class App extends Component {
  render() {
    return (
      <div>
        <Person name="suhas" age="30"/>
        <Person name="kavitha" age="25"/>
      </div>
    );
  }
} 

export default App;
