import Table from "./component/table"
import Header from "./component/header"
import './App.css';
import React, { useState } from 'react';
import { TextField, Checkbox } from '@material-ui/core';
//import { deleteItem } from './component/delete/delete';

const App = () => {

  const [todolist, updatetodolist] = useState([]);
  let currID = 0; // current highest (newest) id for to-do list items

  const loadList = () => {

  }

  const makeNewToDoListItem = () => {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let newToDoListItem = {
      id: currID,
      date: time,
      name: 'Untitled',
      status: 'incomplete',
    }
    currID++;
    return newToDoListItem;
  };

  const addNewToDoListItem = () => {
    let newitem = makeNewToDoListItem();
    let currentlist = [...todolist, newitem];
    updatetodolist(currentlist);
  };
  
  function deleteItem (id){
    var newUpdated = [... todolist].filter((item) => todolist.id !== id);
    console.log(todolist.id);
    updatetodolist(newUpdated);
  }
 
    return (
      <div className="App" >
        <Header/>
        <Table addNewItem={addNewToDoListItem} todolist={todolist}/>   
  
        <button onClick = {() => deleteItem(todolist.id)} > Delete All </button>
        
      </div>
    );
}

export default App;
