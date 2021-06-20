import React from 'react';
import TableEntry from './tableEntry';
import { Button } from '@material-ui/core';

const Table = (props) => {
    const items = props.todolist ? props.todolist : null;
    console.log(props.todolist);
  return (
    items ? <div> 
      <Button onClick={props.addNewItem}>Add New Task</Button>
      {
        items.map((item, index) => (
          <TableEntry key={item.id} item={item} />
        ))
      }
    </div> : <div> 
      <Button onClick={props.addNewItem}>Add New Task</Button>     
    </div>
    
  )
}

export default Table;