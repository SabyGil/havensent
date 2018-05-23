import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux'
import {handleEditProfileForm, editProfile} from "../store/actions/resetActions"

class EditProfile extends Component {

  handleChange(e){
    let data = {
      [e.target.name] : e.target.value
    }

    this.props.handleEdit(data)
  }

  handleSubmit(e){
    this.props.editProfile(this.props.edited)
  }
  render(){
    console.log(this.props)
    return (
      <div>
       Edit Profile 
       <Form onSubmit={this.handleSubmit}>
        <Label>Phone Number</Label>
        <Input type="text" name="phone_number"/>

        <Label>Address</Label>
        <Input type="text" name="address"/>

        <Label>Operating Budget</Label>
        <Input type="text" name="operating_budget"/>

        <Label>Formation Type</Label>
        <Input type="text" name="formation_type"/>

        <Label>Full Time Staff</Label>
        <Input type="text" name="full_time_staff"/>

        <Label>Part Time Staff</Label>
        <Input type="text" name="part_time_staff"/>

        <Input type="submit"/>
       </Form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.reset
}

function mapDispatch(dispatch){
  return({
    handleEdit: (data) => dispatch(handleEditProfileForm(data)),
    editProfile: (data)=> dispatch(editProfile(data))
  })
}

export default connect(mapStateToProps,mapDispatch)(EditProfile)