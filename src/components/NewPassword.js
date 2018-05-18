import React, { Component } from 'react';

class NewPassword extends Component {
  constructor(){
  	this.state ={
  		available: false
  	}
  }

  render(){
    return (
      <div>
      {
      	!this.state.available?
      	<h1>Reset password token has expired</h1>
      	:
      	<form>
      		<input type="password"/>
      		<input type="password"/>
      	</form>
      }
      	
      </div>
    );
  }
}
export default NewPassword;