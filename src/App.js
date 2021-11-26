import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ButtonAppBar from './components/Navbar';
import  TodoList  from './components/TodoList';

function App() {
  
  return ( 
    <>
    <ButtonAppBar/>
    <TodoList/>
    </>
  )
}

export default App;
