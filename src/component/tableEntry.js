import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { App } from '../App';
//import { deleteItem } from './delete/delete';

const TableEntry = (props) => {

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
    
    newitem.newToDoListItem.it = currID++;
    updatetodolist(currentlist);
  };
  
  const deleteItem = (id) => {
    var newUpdated = [...todolist].filter((item) => id !== todolist.id);
    updatetodolist(newUpdated);
    console.log(id);
  };

  return (
    <>
    <Grid container item xs={12} spacing={1}>
    <Grid item xs={3}>
          {props.item.name}
        </Grid>
        <Grid item xs={3}>
        {props.item.date}
        </Grid>
        <Grid item xs={3}>
        {props.item.status}
        </Grid>
        <Grid item xs={3}>
          <a href="#" onClick = {() => deleteItem(todolist.id)}> Delete</a>
        </Grid>
    </Grid>
    </>
  )
};

export default TableEntry;

