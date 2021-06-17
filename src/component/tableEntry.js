import React, { useState } from 'react';
import { Grid, Checkbox, TextField } from '@material-ui/core';
import TableText from "./tableText.js";

const TableEntry = (props) => {
  console.log(props.item);
  return (
    <>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={1}>
          <Checkbox onClick={() => props.markComplete(props.item)} />
        </Grid>
        <Grid item xs={4}>
          <TableText name={props.item.name} validateItem={props.validateItem} id={props.item.id} />
        </Grid>
        <Grid item xs={3}>
          {props.item.date}
        </Grid>
        <Grid item xs={4}>
          <div id={`statusText${props.item.id}`}>
            {props.item.status}
          </div>
        </Grid>
      </Grid>
    </>
  )
};

export default TableEntry;

