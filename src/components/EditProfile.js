import React, { Component } from 'react';
import { Form, Label, Input } from 'reactstrap';
import {connect} from 'react-redux'
import {handleEditProfileForm, editProfile} from "../store/actions/resetActions"

class EditProfile extends Component {

  handleChange = (e) =>{

    this.props.handleEdit({
      name: e.target.name,
      value : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.editProfile(this.props.edited)
  }
  render(){
    console.log(this.props)
    return (
      <div className='fixed-width edit-profile-container'>
        <h1>Edit Profile</h1>
       <Form onSubmit={this.handleSubmit}>
         <Label>Phone Number:</Label>
         <Input type="text" onChange={this.handleChange} name="phone_number"/>

         <Label>Address:</Label>
         <Input type="text" onChange={this.handleChange} name="address"/>

         <Label>Operating Budget:</Label>
         <Input type="text" onChange={this.handleChange} name="operating_budget"/>

         <Label>Formation Type:</Label>
         <Input type="text" onChange={this.handleChange} name="formation_type"/>

         <Label>Full Time Staff:</Label>
         <Input type="text" onChange={this.handleChange} name="full_time_staff"/>

         <Label>Part Time Staff:</Label>
         <Input type="text" onChange={this.handleChange} name="part_time_staff"/>

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
