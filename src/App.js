import Table from "./component/table"
import Header from "./component/header"
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [todolist, updatetodolist] = useState([]);
  let [currID, setID] = useState(0); // current highest (newest) id for to-do list items


  const makeNewToDoListItem = () => {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    setID(currID + 1);
    let newToDoListItem = {
      id: currID,
      date: time,
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

  const validateItem = (value, id) => {
    let newItem = todolist.find(item => item.id === id);
    newItem.name = value;
    let flag = 0;
    todolist.forEach(item => {
      if (item.id !== id && item.name === value) {
        window.alert('this is a duplicate item');
        deleteItem(id);
        flag = 1;
      }
    })

    if (flag === 0) {
      let newList = todolist.map(item => {
        if (item.id === id) {
          item.name = value;
          return item
        }
        return item
      })
      updatetodolist(newList)
    }
  }

  const deleteItem = (id) => {
    var newUpdated = [...todolist].filter((item) => id !== item.id);
    updatetodolist(newUpdated);
  };

  return (
    <div className="App" >
      <Header />
      <Table addNewItem={addNewToDoListItem} deleteItem={deleteItem} todolist={todolist} validateItem={validateItem} />
    </div>
  );
}

export default App;
