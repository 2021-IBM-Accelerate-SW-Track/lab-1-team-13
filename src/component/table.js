import React from 'react';
import TableEntry from './tableEntry';
import { Button } from '@material-ui/core';

const Table = (props) => {
  const items = props.todolist ? props.todolist : null;

  const markComplete = (item) => {
    if (item.status === 'incomplete') {
      item.status = 'complete';
      document.getElementById(String('statusText' + item.id)).innerHTML = 'complete';
    } else {
      item.status = 'incomplete';
      document.getElementById(String('statusText' + item.id)).innerHTML = 'incomplete';
    }
  }

  return (
    items ? <div> <Button onClick={props.addNewItem}>Add New Item</Button>
      {
        items.map((item, index) => (
          <TableEntry deleteItem={props.deleteItem} key={item.id} item={item} markComplete={markComplete} validateItem={props.validateItem} />
        ))
      }
    </div> : <div> <Button onClick={props.addNewItem}>Add New Item</Button> </div>
  )
}

export default Table;