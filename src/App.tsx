import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => never;
/* function printName(name: string) {
    console.log(name);
}
printName('Carlos'); */

/* type Person = {
    name: string;
    age?: number;
};
let person: Person = {
    name: 'Carlos',
    //age: 23,
};
let lotsOfPeople: Person[]; */

let personName: unknown;

function App() {
    return <div className="App">Hello world</div>;
}

export default App;
