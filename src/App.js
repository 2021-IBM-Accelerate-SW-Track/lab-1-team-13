import Table from "./component/table"
import Header from "./component/header"
import './App.css';
import React, { useState } from 'react';
import { TextField, Checkbox } from '@material-ui/core';

const App = () => {

  const [todolist, updatetodolist] = useState([]);
  let [currID, setID] = useState(0); // current highest (newest) id for to-do list items

  const loadList = () => {

  }

  const makeNewToDoListItem = () => {
    let current = new Date();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    let cDate = (current.getMonth() + 1) + '-' + current.getDate() + '-' + current.getFullYear();
    let dateTime = strTime + ' ' + cDate;
    setID(currID + 1);
    let newToDoListItem = {
      id: currID,
      date: dateTime,
      name: 'Untitled',
      status: 'incomplete',
    }
    return newToDoListItem;
  };

  const addNewToDoListItem = () => {
    let newitem = makeNewToDoListItem();
    let currentlist = [...todolist, newitem];
    updatetodolist(currentlist);
  };



  return (
    <div className="App" >
      <Header />
      <Table addNewItem={addNewToDoListItem} todolist={todolist} />

    </div>
  );
}

export default App;
