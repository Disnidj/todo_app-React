import './App.css';
import React from 'react';
import Title from './components/Title';
import AddTodo from './components/AddTodo';

import Todo from './components/Todo';

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore";
import {db} from "./Firebase";





function App() {
const [todos, setTodos ]= React.useState([]);

React.useEffect(() =>{
  const q= query(collection(db, "todos"));
  const unsub = onSnapshot(q, (QuerySnapshot)=>{
    //tempary array
    let todoArray =[];
    QuerySnapshot.forEach((doc)=>{
      todoArray.push({...doc.data(), id: doc.id });
    });

    setTodos(todoArray);
  });

  return () => unsub();

} , []);


const handleEdit = async (todo, title)=>{
  await updateDoc(doc (db,"todos", todo.id), {
    title:title
  });

};

const toggleComplete = async (todo)=>{
  await updateDoc(doc (db,"todos", todo.id),{
    completed: !todo.completed

  });
};

const handleDelete= async (id)=>{
await deleteDoc(doc (db,"todos", id));
};



  return (
   <div className='App'>
    <div>
      <Title/>
    </div>
    <div>
      <AddTodo/>
    </div>
    <div className="todo_container">
      {todos.map((todo)=>(
        <Todo 
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        
        />
      ))}


    </div>

   </div>
  );
}

export default App;
