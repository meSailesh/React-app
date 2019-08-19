import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

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

const togglePersonHandler = () => {
  const doesShow = personsState.showPersons;
  setPersons({
    persons:[
      { name: 'Max', age:28 },
      { name: 'Manu', age:28 },
      { name: 'Sailesh', age:23 }
  ], 
    showPersons: !doesShow
  })

}

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};

  let persons = null;
  if(personsState.showPersons) {
    persons = (
      <div>
          <Person 
          name = {personsState.persons[0].name} 
          age = {personsState.persons[0].age}/>
          <Person 
          name = {personsState.persons[1].name}
           age = {personsState.persons[1].age}
           clicked = {switchNameHandler}>
            My Hobbies: Racing
          </Person>
          <Person 
          name = {personsState.persons[2].name} 
          age = {personsState.persons[2].age}/>
        </div>
    );

  }
  return (
    <div className="App">
     <h1>Hi, I'am a React App</h1>
     <p>This is really working!</p>
     <button
     style = {style}
     onClick = {togglePersonHandler}>Toggle Names</button>
     {persons}
    </div>
  );
}

export default App;



