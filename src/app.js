import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor() {
//     this.name = 'Vic'
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}`
//   }
// }

// const oldSyntax = new OldSyntax();
// // console.log(oldSyntax.getGreeting())

// /// ----------------
// // no need to define the constructor function anymore
// class NewSyntax {
//   name = 'Gracie';
//   getGreeting = () => {
//     return `Hi my name is ${this.name}`
//   }  
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting())
// console.log(newSyntax)