import React, { Component } from 'react';

// material-ui
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextField
          id="placeholder"
          label="First Name"
          InputProps={{ placeholder: 'Enter your first name' }}
          helperText="This is helper text for the field"
          margin="normal"
        />
        <br />
        <Button raised color="primary">
          Submit
        </Button>
      </div>
    );
  }
}

export default App;
