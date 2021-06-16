import Table from "./component/table"
import Header from "./component/header"
import './App.css';
import React, { useState } from 'react';
import { TextField, Checkbox } from '@material-ui/core';

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

    return (
      <div className="App" >
        <Header/>
        <Table addNewItem={addNewToDoListItem} todolist={todolist}/>
      
      </div>
    );
}

export default App;
