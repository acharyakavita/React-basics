import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

/*problem statement and answers*/
/*1.Create TWO new components: UserInput and UserOutput 
    -->UserInput and UserOutput  component files are created
  2.UserInput should hold an input element, UserOutput two paragraphs ---> done
  3.Output multiple UserOutput components in the App component (any paragraph texts of your choice) --->done
  4.Pass a username (of your choice) to UserOutput via props and display it there ---> I am passing place name
  5.Add state to the App component (=> the username) and pass the username to the UserOutput component --> done
  6. Add a method to manipulate the state (=> an event-handler method) -->PlaceChangeHandler menthod is added
  7.Pass the event-handler method reference to the UserInput component and bind it to the input-change event -->done
  8.Ensure that the new input entered by the user overwrites the old username passed to UserOutput -->done
  9.Add two-way-binding to your input (in UserInput) to also display the starting username -->done
  10.Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets -->done*/
class App extends Component {
  state = {
    people: [
      { name: "Kavitha", place: "Toronto" },
      { name: "Suhas", place: "Toronto" },
      { name: "Kiran", place: "Bangalore" },
    ]
  }
  PlaceChangeHandler = (event) => {
    this.setState({
      people: [
        { name: "Kavitha", place: event.target.value },
        { name: "Suhas", place: event.target.value },
        { name: "Kiran", place: event.target.value },
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput change={this.PlaceChangeHandler} place={this.state.people[0].place} />
        <UserOutput name={this.state.people[0].name} place={this.state.people[0].place} />
        <UserInput change={this.PlaceChangeHandler} place={this.state.people[1].place} />
        <UserOutput name={this.state.people[1].name} place={this.state.people[1].place} />
        <UserInput change={this.PlaceChangeHandler} place={this.state.people[2].place} />
        <UserOutput name={this.state.people[2].name} place={this.state.people[2].place} />
      </div>
    );
  }
}

export default App;
