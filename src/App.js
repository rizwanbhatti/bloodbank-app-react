import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

// const style = {
//   height: 20,
//   fllwidth: 'false',
//   float: 'left',
//   margin:   '10px 400px 10px 400px' ,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const style = {
  marginLeft: '20',  
  
};

let  wh={
textAlign: 'center',
  display: 'inline-block',
  marginLeft:'50%',
}

class App extends Component {
  render() {
    return (
       <MuiThemeProvider>
      <div>
        <AppBar
    title="DS"
    iconElementRight={<FlatButton label="Saveg" />}
    
    
  />
  <h2>hello</h2>
  <FlatButton label="LogIn" primary={true} />
  <FlatButton label="Sign" primary={true} />
  <Paper zDepth={2}  style={wh} >
    <TextField hintText="First name"  style={style} underlineShow={true} />
    <br/>
    <TextField hintText="Middle name" style={style} underlineShow={true} />
    <br />
    <TextField hintText="Last name" style={style} underlineShow={true} />
    <br />
    <TextField hintText="Email address" style={style} underlineShow={true} />
    <Divider />
  </Paper>
      </div>
    
  </MuiThemeProvider>
    );
  }
}

export default App;
