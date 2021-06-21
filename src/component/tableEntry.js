import React, { useState } from 'react';
import { Grid, Checkbox, TextField, Button } from '@material-ui/core';
import TableText from "./tableText.js";

const TableEntry = (props) => {
  return (
    <>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={2}>
          <Checkbox onClick={() => props.markComplete(props.item)} />
        </Grid>
        <Grid item xs={2}>
          <TableText editItem={props.editItem} name={props.item.name} validateItem={props.validateItem} id={props.item.id} />
        </Grid>
        <Grid item xs={2}>
          {props.item.date}
        </Grid>
        <Grid id={`statusText${props.item.id}`} item xs={2}>
          {props.item.status}
        </Grid>
        <Grid>
          <Button onClick={() => props.deleteItem(props.item.id)}> Delete </Button>
        </Grid>


      </Grid>
    </>
  )
};

export default TableEntry;

