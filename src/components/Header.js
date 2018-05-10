import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {login, register, logout} from "../store/actions/userActions"
import Modal from 'react-modal'
import { TabContent, TabPane, Nav, NavItem, NavLink as Link, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Header extends React.Component {
  constructor(){
    super();
    this.state ={
      activeTab: '1',
      registerStep: 1
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleRegister = this.handleRegister.bind(this);
     this.toggle = this.toggle.bind(this);
     this.toggleStep = this.toggleStep.bind(this);
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

  handleRegister(e){
    e.preventDefault()
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

  toggleStep(step) {
      this.setState({
        registerStep: step
    })
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
            <ul>
                {
                  this.props.isLoggedIn?
                  <div className='login-logout-container'>
                   <NavLink className="yo" exact to="/adminView"><li className='login-btn'>PROFILE</li></NavLink>
                    <button className='logout-btn' onClick={()=>this.props.dispatch(logout())}>Logout</button>
                  </div>
                  :
                <li><button className='login-btn' onClick={()=>this.props.dispatch({type:"OPEN_LOGIN_MODAL"})}><span>Log In</span> or <span>Sign Up</span></button></li>
                }
            </ul>
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
             <Nav tabs>
               <NavItem>
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
                     <Label for="username">Username:</Label>
                     <Input onChange={this.handleChange} name="username" type="text" placeholder="Username" />
                     <Label for="password">Password:</Label>
                     <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                     <Button onClick={this.handleSubmit}>Submit</Button>
                   </Card>
                 </Col>
               </Row>
             </TabPane>
             <TabPane tabId="2">
               <div className='register-tab'>
                <Form>
                 {this.state.registerStep === 1 ?
                  <div>
                 
                      <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input onChange={this.handleChange} name="username" type="text" placeholder="Username" />
                      </FormGroup>
                       <FormGroup>
                        <Label for="username">Email:</Label>
                        <Input onChange={this.handleChange} name="email" type="email" placeholder="Email" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Organization Name:</Label>
                        <Input onChange={this.handleChange} type="text" name="organization_name" placeholder="Organization Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Phone Number:</Label>
                        <Input onChange={this.handleChange} type="text" name="phone_number" placeholder="Phone Number" />
                      </FormGroup>
                      <a onClick={()=>{this.toggleStep(2)}}>Next</a>
                    </div>
                    :
                    <div>
                      <FormGroup>
                        <Label for="password">Address:</Label>
                        <Input onChange={this.handleChange} type="text" name="address" placeholder="Address" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Operating Budget:</Label>
                        <Input onChange={this.handleChange} type="text" name="operating_budget" placeholder="Operating Budget" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Formation Type:</Label>
                        <Input onChange={this.handleChange} type="text" name="formation_type" placeholder="Formation Type" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Full-Time Staff:</Label>
                        <Input onChange={this.handleChange} type="number" name="full_time_staff" placeholder="Full-Time Staff" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Part-Time Staff:</Label>
                        <Input onChange={this.handleChange} type="number" name="part_time_staff" placeholder="Part-Time Staff" />
                      </FormGroup>
                      <a onClick={()=>{this.toggleStep(1)}}>Back</a>
                      <Button onClick={this.handleRegister}>Submit</Button>
                     </div>
                   }
               </Form>
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

export default connect(mapStateToProps)(Header)
