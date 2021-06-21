import Table from "./component/table"
import Header from "./component/header"
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [todolist, updatetodolist] = useState([]);
  let [currID, setID] = useState(0); // current highest (newest) id for to-do list items


  const makeNewToDoListItem = (newdesc) => {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    setID(currID + 1);
    let newToDoListItem = {
      id: currID,
      date: time,
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
