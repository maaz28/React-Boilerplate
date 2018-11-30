import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginComponent extends Component {
  state = {
    email : '',
    password : '',
    loading : false,
    errorTextPass : '',
    errorTextEmail : ''
  }

  emailHandler(ev){
    this.setState({
      email : ev.target.value
    })
  }

  passwordHandler(ev){
    this.setState({
      password : ev.target.value
    })
  }


  emailClickHandler = () => {
    this.setState({
      errorTextEmail : ''
    })
  }

  passwordClickHandler = () => {
    this.setState({
      errorTextPass : ''
    })
  }

  render(){
    return(
<div>
    <div style = {{width:'320px', margin : 'auto'}}>
    <div> <h3>LOGIN</h3> </div>
    <TextField
      hintText="admin@abc.com"
      errorText={this.state.errorTextEmail}
      floatingLabelText="Enter Email Here"
      onChange = {this.emailHandler.bind(this)}
      onClick = {this.emailClickHandler}
    />
    <TextField
      hintText="Password"
      errorText = {this.state.errorTextPass}
      floatingLabelText="Enter Password Here"
      type="password"
      onChange = {this.passwordHandler.bind(this)}
      onClick = {this.passwordClickHandler}
    />
    <RaisedButton label="Login" primary={true} onClick = {this.loginHandler.bind(this)} />
    <div>      
       </div>
    {(this.state.loading) ? (<div>Loading ... </div>) : (null)}
    </div>
  </div>
    )
  }
}

export default (LoginComponent)
