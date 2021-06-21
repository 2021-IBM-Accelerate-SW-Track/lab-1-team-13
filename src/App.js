import Table from "./component/table"
import Header from "./component/header"
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [todolist, updatetodolist] = useState([]);
  let [currID, setID] = useState(0); // current highest (newest) id for to-do list items


  const makeNewToDoListItem = (newdesc) => {
    let current = new Date();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    let cDate = (current.getMonth() + 1) + '-' + current.getDate() + '-' + current.getFullYear();
    let dateTime = strTime + ' ' + cDate;
    setID(currID + 1);
    let newToDoListItem = {
      id: currID,
      date: dateTime,
      name: newdesc,
      status: 'incomplete',
    }
    return newToDoListItem;
  };

  const addNewToDoListItem = (value) => {
    let newitem = makeNewToDoListItem(value);
    let currentlist = [...todolist, newitem];
    updatetodolist(currentlist);
    return newitem;
  };

  const validateItem = (value, id) => {
    todolist.forEach(item => {
      if (item.id !== id && item.name === value) {
        deleteItem(id);
      }
    })
  }


  const deleteItem = (id) => {
    var newUpdated = [...todolist].filter((item) => id !== item.id);
    updatetodolist(newUpdated);
  };

  const editItem = (id, newval) => {
    todolist.forEach(item => {
      if (item.id === id) {
        item.name = newval;
      }
    })
    updatetodolist(todolist);
  };

  return (
    <div className="App" >
      <Header />
      <Table currID={currID} addNewItem={addNewToDoListItem} editItem={editItem} deleteItem={deleteItem} todolist={todolist} validateItem={validateItem} />
    </div>
  );
}

export default App;
