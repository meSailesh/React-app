import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import {StyleRoot} from 'radium';

const App = props => {
const [personsState, setPersons] = useState({
  persons:[
    { name: 'Max', age:28 },
    { name: 'Manu', age:26 },
    { name: 'Sailesh', age:23 }
  ],
  showPersons: false
});
// const [otherState, setOtherState] = useState('some other value')
// console.log(personsState, otherState);

const switchNameHandler = () => {
  //Check commit
  setPersons({
    persons:[
      { name: 'Maximilian', age:28 },
      { name: 'Manu', age:28 },
      { name: 'Sailesh', age:23 }
  ],
  showPersons : personsState.showPersons 
  });
}

const nameChangedHandler = (event, id) => {
  const personIndex = personsState.persons.findIndex((p) => {
    return p.id === id;
  });
  const person = {
    ...personsState.persons[personIndex]
  };
  person.name = event.target.value;
  const persons = [...personsState.persons];
  persons[personIndex] = person;

  setPersons ({
  persons: persons,
    showPersons : personsState.showPersons
  })
}

const togglePersonHandler = () => {
  const doesShow = personsState.showPersons;
  setPersons({
    persons:[
      { id : 'sadsa', name: 'Max', age:28 },
      { id : 'dfdf', name: 'Manu', age:28 },
      { id : 'fgfg', name: 'Sailesh', age:23 }
  ], 
    showPersons: !doesShow
  })

}

const deletePersonHandler = (personIndex) => {
  const persons = [...personsState.persons];
  persons.splice(personIndex, 1);
  setPersons ({
    persons: persons,
    showPersons : personsState.showPersons
  });
}


let classes = [];
if(personsState.persons.length <=2) {
  classes.push('red'); //classes = ['red']
}
if(personsState.persons.length <=1) {
  classes.push('bold'); // classes = ['red', 'bold']
}

const style = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'lightgreen',
  }

};

  let persons = null;
  if(personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person 
          clicked = {() => {
            deletePersonHandler(index)
          }}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          changed = {(event) => {
            nameChangedHandler(event, person.id)
          }}/>
        })}
      </div>
    );
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor : 'salmon',
      color:'black'

    }

  }
  return (
    <div className="App">
      <StyleRoot>
     <h1>Hi, I'am a React App</h1>
     <p className = {classes.join(' ')}>This is really working!</p>
     <button
     style = {style}
     onClick = {togglePersonHandler}>Toggle Names</button>
     {persons}
     </StyleRoot>
    </div>
  );
}

export default App;



