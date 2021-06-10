import Header from "./component/header"
import './App.css';
import React, { useState } from 'react';
import { TextField, Checkbox } from '@material-ui/core';
import Table from "./component/table"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolistitems: [],
    };
  }



  render() {
    return (
      <div className="App" >
        <Header />
        <Table />
        <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <TextField id="standard-basic" label="Standard" />
      </div>
    );
  }
}

export default App;
