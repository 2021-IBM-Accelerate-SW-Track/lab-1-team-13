import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import { render } from 'react-dom';

const TableText = (props) => {

    const [editing, editDesc] = useState(false);

    const handleChangeInput = (e) => {
        props.editItem(props.id, e.target.value);
        props.validateItem(e.target.value, props.id);
        editDesc(false);
    }

    return (
        // via https://material-ui.com/components/text-fields/
        editing ?

            <Input onBlur={handleChangeInput} />
            :
            <div onClick={() => editDesc(true)}> {props.name} </div>

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