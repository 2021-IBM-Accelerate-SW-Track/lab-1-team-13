import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

const TableEntry = (props) => {
  return (
    <>
    <Grid container item xs={12} spacing={1}>
    <Grid item xs={4}>
          {props.item.name}
        </Grid>
        <Grid item xs={4}>
        {props.item.date}
        </Grid>
        <Grid item xs={4}>
        {props.item.status}
        </Grid>
    </Grid>
    </>
  )
};

export default TableEntry;

