import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {login, register, logout, forgotPassword} from "../store/actions/userActions"
import Modal from 'react-modal'
import { TabContent, TabPane, Nav, NavItem, NavLink as Link, Button, Form, FormGroup, Label, Input, Card, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormFeedback, Alert } from 'reactstrap';
import classnames from 'classnames';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      activeTab: '1',
      registerStep: 1,
      dropdownOpen: false,
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleRegister = this.handleRegister.bind(this);
     this.toggle = this.toggle.bind(this);
     this.toggleStep = this.toggleStep.bind(this);
     this.sendForgotPassword = this.sendForgotPassword.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let data = {
      username: this.state.username,
      password : this.state.password
    }
    this.props.dispatch(login(data))
  }

  handleRegister(e){
    e.preventDefault();
    let org = {
        organization_name: this.state.organization_name,
        phone_number: this.state.phone_number,
        address : this.state.address,
        operating_budget: this.state.operating_budget,
        formation_type : this.state.formation_type,
        full_time_staff: this.state.full_time_staff,
        part_time_staff : this.state.part_time_staff
      }
    let data = {
      username: this.state.username,
      password : this.state.password,
      email : this.state.email,
      organization : org
    }
    console.log(data)
    this.props.dispatch(register(data))
    this.props.dispatch({type:"CLOSE_LOGIN_MODAL"})
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleStep(e,step) {
    e.preventDefault()
      this.setState({
        registerStep: step
    })
  }

  sendForgotPassword(){
    let data = {
      email : this.state.forgotemail
    }
    this.props.dispatch(forgotPassword(data))
  }

  toggleMenu = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
    console.log(this.props)
    console.log(this.state)
    return (
      <div className='header-background'>
        <header className='fixed-width'>
          <div className="logo-container">
            <NavLink exact to="/"><img src={ require("../styles/images/logo.png") } alt="" /></NavLink>
          </div>

          <nav>
            {
              this.props.isLoggedIn ?
              <Dropdown isOpen={this.state.dropdownOpen} onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu}
                className='menu'>
                <DropdownToggle caret>
                  <span className='menu-text'>Menu</span>
                </DropdownToggle>
                <DropdownMenu>
                 <div className='menu-item'><NavLink exact to="/adminView">Profile</NavLink></div>
                 <div className='menu-item' style={{'whiteSpace': 'nowrap' }}><NavLink exact to="/editProfile">Edit Profile</NavLink></div>
                 <div className='menu-item logout-btn' onClick={()=>this.props.dispatch(logout())}>Logout</div>
               </DropdownMenu>
              </Dropdown>
              :
              <div className='login-btn' onClick={()=>this.props.dispatch({type:"OPEN_LOGIN_MODAL"})}>
                <span>Log In or</span>  <span>Sign Up</span>
              </div>
            }
          </nav>
        </header>

        <Modal
          className="modal"
          isOpen={this.props.loginModalIsOpen}
          className='modal-styles-header'
          overlayClassName='overlay'
          onRequestClose={()=>this.props.dispatch({type:"CLOSE_LOGIN_MODAL"})}
          >
           <TabContent activeTab={this.state.activeTab}>
             <Nav tabs style={{display:this.state.activeTab==='3'?"none":""}}>

               <NavItem >
                <Link
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Log In
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Sign Up
                </Link>
              </NavItem>

             </Nav>

             <TabPane tabId="1" className='login-tab'>
               <Row>
                 <Col>
                   <Card body>
                     <form onSubmit={this.handleSubmit} >
                         <Label for="username">Username:</Label>
                         <Input required onChange={this.handleChange} name="username" type="text" placeholder="Username" />
                         <Label for="password">Password:</Label>
                         <a href='#' onClick={() => { this.toggle('3'); }} className='forgot-password'>Forgot your password?</a>
                         <Input required onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                         { this.props.loginFailed ?
                         <Alert color="danger">Incorrect Username/Password Combination!</Alert> : ""}
                         <div className='login-footer'>
                           <Input type="submit" />
                         </div>
                     </form>
                   </Card>
                 </Col>
               </Row>
             </TabPane>
             <TabPane tabId="2">
               <div className='register-tab'>
                <Form onSubmit={this.handleRegister} >
                  <span style={{display:this.state.registerStep === 1 ?"":"none"}}>
                    <FormGroup>
                      <Label for="username">Username:</Label>
                      <Input required onChange={this.handleChange} name="username" type="text" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email:</Label>
                      <Input required onChange={this.handleChange} name="email" type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password:</Label>
                      <Input required onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="organization_name">Organization Name:</Label>
                      <Input required onChange={this.handleChange} type="text" name="organization_name" placeholder="Organization Name" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="phone_number">Phone Number:</Label>
                      <Input required onChange={this.handleChange} type="text" name="phone_number" placeholder="Phone Number" />
                    </FormGroup>
                    <span className='sign-up-footer'>
                        <button  onClick={(e)=>{this.toggleStep(e,2)}}>Next</button>
                    </span>
                  </span>
                  <span style={{display:this.state.registerStep === 2 ?"":"none"}}>
                  <FormGroup>
                    <Label for="address">Address:</Label>
                    <Input required onChange={this.handleChange} type="text" name="address" placeholder="Address" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="operating_budget">Operating Budget:</Label>
                    <Input required onChange={this.handleChange} type="text" name="operating_budget" placeholder="Operating Budget" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="formation_type">Formation Type:</Label>
                    <Input required onChange={this.handleChange} type="text" name="formation_type" placeholder="Formation Type" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="full_time_staff">Full-Time Staff:</Label>
                    <Input required onChange={this.handleChange} type="number" name="full_time_staff" placeholder="Full-Time Staff" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="part_time_staff">Part-Time Staff:</Label>
                    <Input required onChange={this.handleChange} type="number" name="part_time_staff" placeholder="Part-Time Staff" />
                  </FormGroup>

                  <span className='sign-up-footer'>
                    <button onClick={(e)=>{this.toggleStep(e,1)}}>Back</button>
                    <button type="submit"> Submit </button>
                  </span>
                 </span>
               </Form>
             </div>
           </TabPane>

           <TabPane tabId="3">
             <span style={{'color': 'var(--secondary-blue)'}} onClick={() => { this.toggle('1'); }}>back</span>
             <p>Enter your email:</p>
             <FormGroup>
               <Label for="username">Email:</Label>
               <Input onChange={this.handleChange} name="forgotemail" type="email" placeholder="Email" />
             </FormGroup>
             <div className='sign-up-footer'>
               <button className='button' onClick={this.sendForgotPassword}>Submit</button>
               {this.props.emailSent && <Label>Email Sent!</Label>}
             </div>
           </TabPane>
         </TabContent>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps)(Header);
