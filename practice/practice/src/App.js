import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Jay', age: 26 }
    ],
    otherState: "lala"
  };

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'JaeHun', age: 26 }
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'JaeHun', age: 26 }
      ]
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
    <div className="App">
      <h1>This is a react app.</h1>
      <p>This is really working.</p>
      <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
      <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}> </Person>
      <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
          changed={this.nameChangedHandler}> </Person>
      <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>Hobby: Racing Game</Person>
    </div>
  );
  }

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I like this app.'))


}

export default App;