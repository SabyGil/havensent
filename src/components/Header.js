import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {login,register} from "../store/actions/userActions"
import Modal from 'react-modal'

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
          onRequestClose={()=>this.props.dispatch({type:"CLOSE_LOGIN_MODAL"})}
        >
          <div>
            <label>Username</label>
            <input onChange={this.handleChange} name="username" type="text" />
            <label>Password</label>
            <input onChange={this.handleChange} name="password" type="password" />
            <input onClick={this.handleSubmit} type="submit" />
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
