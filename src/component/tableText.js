import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import { render } from 'react-dom';

const TableText = (props) => {
  return (
    // via https://material-ui.com/components/text-fields/
    <form className={props.name} noValidate autoComplete="off">
      <Input onKeyPress={(event) => {
        if (event.key === 'Enter')
          props.validateItem(event.target.value, props.id);
      }}
        placeholder="Enter task"
        inputProps={{ 'aria-label': 'description' }} />
    </form>
  )
};

export default TableText;

/*
// via React Conf video
export default class TableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: 'Enter task',
        }
        this.handleTaskChange = this.handleTaskChange.bind(this);
    }
    handleTaskChange(t) {
        this.setState({
            task: t.target.value
        });
    }
    render() {
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <Input placeholder="Enter task" inputProps={{ 'aria-label': 'description' }} />
            </form>
        );
    }
}
*/