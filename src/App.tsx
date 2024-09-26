import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './components/model';

let name:string;
let age: number | string;
let isStudent:boolean;
let hobbies:string[];
let role:[number,string];

role = [5,"hello"];


// function printName(name:string) {
//   console.log(name);
// }

// printName("Wyatt")
let printName: (name:string) => never;


// let person:Object;
// type Person={
//   name:string;
//   age?:number; //Means optional
// }

// let person:Person = {
//   name:'Wyatt',
//   age: 20,
// };

// let lotsOfPeople: Person[]

// let personName: unknown; //recommended instead of any for putting any type

// type X = Person &  {
//   a:string;
//   b:number;
// }

interface Person {//extends X 
  name:string;
  age?: number;
}

interface Guy extends Person {
  profession:string;
}

type X = Person &  {
  a:string;
  b:number;
}

// type Y = X & {
//   c: string;
//   d: number;
// }


const App:React.FC = () => {

  const [todo, setTodo] = useState<string> ("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone:false}])
      setTodo("")
    }
  };
  console.log(todo);


  return (
    <div className="App">
      <span className="heading">Taskify </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </div>
    
  );
}

export default App;
