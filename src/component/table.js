import React, { useState } from 'react';
import TableEntry from './tableEntry';
import { Button, Input } from '@material-ui/core';

const Table = (props) => {
  const items = props.todolist ? props.todolist : null;
  const [itemDesc, updateDesc] = useState("Default");

  const markComplete = (item) => {
    if (item.status === 'incomplete') {
      item.status = 'complete';
      document.getElementById(String('statusText' + item.id)).innerHTML = 'complete';
    } else {
      item.status = 'incomplete';
      document.getElementById(String('statusText' + item.id)).innerHTML = 'incomplete';
    }
  }

  const handleUpdateDesc = (e) => {
    updateDesc(e.target.value);
    //console.log(itemDesc);
  }

  const handleAddNewItem = () => {
    let newitem = props.addNewItem(itemDesc);
    //console.log(newitem);
    props.validateItem(itemDesc, newitem.id);
  }

  return (
    items ? <div>
      <Input data-testid="new-item-input"
        onChange={handleUpdateDesc}
        placeholder="Enter task"
        inputProps={{ 'aria-label': 'description' }} />
      <Button onClick={handleAddNewItem} data-testid="new-item-button">Add New Item</Button>
      {
        items.map((item, index) => (
          <TableEntry editItem={props.editItem} deleteItem={props.deleteItem} key={item.id} item={item} markComplete={markComplete} validateItem={props.validateItem} />
        ))
      }
    </div> : <div>  <Input onChange={handleUpdateDesc}
      placeholder="Enter task"
      inputProps={{ 'aria-label': 'description' }} />
      <Button onClick={handleAddNewItem} data-testid="new-item-button">Add New Item</Button>
    </div>
  )
}


export default Table;