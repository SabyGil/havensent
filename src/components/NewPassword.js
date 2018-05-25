import React, { Component } from 'react';
import {connect} from 'react-redux'
import {checkToken, resetPassword} from "../store/actions/resetActions"
import { Form, FormGroup, Label, Input } from 'reactstrap';

class NewPassword extends Component {
	constructor(){
		super()

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

  componentWillMount(){
  	this.props.dispatch(checkToken(this.props.match.params.token))
  }

  handleChange(e){
  	this.props.dispatch({type:"PASSWORD_SET",payload:{name:e.target.name,value:e.target.value}})
  }

  handleSubmit(e){
  	e.preventDefault()
  	if(this.props.password === this.props.confirmPassword) {
  		let data = {
  			token: this.props.match.params.token,
  			password: this.props.password
  		}

  		this.props.dispatch(resetPassword(data))
  	}
  	else{
  		this.props.dispatch({type:"PASSWORD_DONT_MATCH"})
  	}
  }

  render(){
  	console.log(this.props)
    return (
      <div>
      {
      	!this.props.available?
      	<h1>Reset password token has expired</h1>
      	:
      	<Form onSubmit={this.handleSubmit}>
      		<FormGroup>
      			<Label>New Password</Label>
      			<Input onChange={this.handleChange} name="password" type="password"/>
      		</FormGroup>
      		<FormGroup>
      			<Label>Confirm New Password</Label>
      			<Input  onChange={this.handleChange} name="confirmPassword" type="password"/>
      		</FormGroup>
      		{this.props.resetSucess ? <Label>Password Reset Successful</Label> : <Input type="submit" />}
      		{!this.props.passmatch && <Label>Passwords Don't Match!</Label>}
      	</Form>
      }
      </div>
    );
  }
}

function mapStateToProps(state){
	return state.reset
}
export default connect(mapStateToProps)(NewPassword);
