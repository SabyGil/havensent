import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {login,register} from "../store/actions/userActions"
import Modal from 'react-modal'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Header extends React.Component {
  constructor(){
    super()

    this.state ={

    }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    let data = {
      username: this.state.username,
      password : this.state.password
    }
    this.props.dispatch(login(data))
    this.props.dispatch({type:"CLOSE_LOGIN_MODAL"})
  }
  render(){
    console.log(this.props)
    return (
      <div className='header-background'>
        <header className='fixed-width'>
          <div className="logo-container">
            <NavLink exact to="/"><img src={ require("../styles/images/logo.png") } alt="" /></NavLink>
          </div>

          <nav>
            <ul>
                {
                  this.props.isLoggedIn?
                  <NavLink exact to="/adminView"><li>PROFILE</li></NavLink>
                  :
                <li><button className='login-btn' onClick={()=>this.props.dispatch({type:"OPEN_LOGIN_MODAL"})}>LOG INTO AN ORGANIZATION</button></li>
                }
            </ul>
          </nav>
        </header>
        <Modal
          isOpen={this.props.loginModalIsOpen}
          className='modal-styles-header'
          overlayClassName='overlay'
          onRequestClose={()=>this.props.dispatch({type:"CLOSE_LOGIN_MODAL"})}
          >
          <div className='login'>
           <Form>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input onChange={this.handleChange} name="username" type="text" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps)(Header)
