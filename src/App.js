import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons:[
    { name: 'Max', age:28 },
    { name: 'Manu', age:26 },
    { name: 'Sailesh', age:23 }
  ]
}
switchNameHandler = () => {
  //console.log('Was clicked!');
  this.setState({
    persons:[
      { name: 'Maximilian', age:28 },
      { name: 'Manu', age:28 },
      { name: 'Sailesh', age:23 }
  ] 
  })
}

  render(){
  return (
    <div className="App">
     <h1>Hi, I'am a React App</h1>
     <p>This is really working!</p>
     <button onClick = {this.switchNameHandler}>Switch Name</button>
     <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
     <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>
       My Hobbies: Racing
     </Person>
     <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>
  );
  }
}

export default App;
