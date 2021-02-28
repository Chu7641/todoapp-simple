import { useState } from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {

  const [todoList,setTodoList]=useState([
    {id: 1, title: "Làm bài tập về nhà!"},
    {id: 2, title: "Học html css!"},
    {id: 3, title: "Học js, reactjs!"}  
  ]);

  const handleTodoClick=(todo)=>{
    const index=todoList.findIndex(x=>x.id===todo.id)
    if(index<0)return;
    const newTodoList=[...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }

  const handleSubmit=(inputText)=>{
      const newTodo={
        id: todoList.length+1 ,
        title: inputText
      };
      const newTodoList=[...todoList];
      newTodoList.push(newTodo);
      setTodoList(newTodoList);

  }

  return (
    <div className="App">
    <h1>Todo list</h1>
        <TodoForm onSubmit={handleSubmit}/>
        <TodoList 
            todos={todoList}
            onTodoClick={handleTodoClick}

        />
    </div>
  );
}

export default App;
