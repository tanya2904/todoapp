import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { SingleTask } from './SingleTask';

const TodoList = () => {
    const [inputValue, setinputValue] = useState("");
  const [listValue, setlistValue] = useState([]);

  const pushListValue = () => {
    //listValue.push(inputValue);
    setlistValue([{id:Date.now(),title:inputValue,done:false},...listValue,]);
    setinputValue("");
  }

  useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));

      if(storedTodos)
      {
        setlistValue(storedTodos);
      }
  } , []);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(listValue));
   }, [listValue]);

   const doneHandler = (todoId) => {
     const index = listValue.findIndex((emp) => emp.id === todoId);
     const newTodo = [...listValue];

     newTodo[index] = {
       id:listValue[index].id,
       title:listValue[index].title,
       done:!listValue[index].done,
     };
     setlistValue(newTodo);
   };

   const delHandler = (todoId) => {
     if(window.confirm("Are you sure?")) {
        const updatedList =  listValue.filter((item) => item.id !== todoId);
        setlistValue(updatedList);
     }
   };
    return (
        <div className="App">
        <div>
        <input
      type = "text"
      placeholder="list your task..."
      value = {inputValue}
      onChange = {(e) => setinputValue(e.target.value)}
      className="input_box"
      />
      <Button variant="outlined" onClick = {pushListValue}>Add Task</Button>
        </div>
      <div style={{height:'50vh'}}> 
  { listValue.map((v,i)=>{
    return(
      <SingleTask i={i} v={v} doneHandler={doneHandler} delHandler={delHandler}/>
    );
  })}
      </div>
      <div className="div_two"/>
    </div>
    
    )
}

export default TodoList
