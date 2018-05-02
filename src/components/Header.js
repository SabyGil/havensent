import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {login,register} from "../store/actions/userActions"
import Modal from 'react-modal'
import { TabContent, TabPane, Nav, NavItem, NavLink as Link, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Header extends React.Component {
  constructor(){
    super();
    this.state ={
      activeTab: '1'
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.toggle = this.toggle.bind(this);
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

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
                <li><button className='login-btn' onClick={()=>this.props.dispatch({type:"OPEN_LOGIN_MODAL"})}><span>Log In</span> or <span>Sign Up</span></button></li>
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
                 <Button>Sign Up</Button>
               </Link>
             </NavItem>

             <TabContent activeTab={this.state.activeTab}>
             <TabPane tabId="1">
               <Row>
                 <Col>
                   <Card body>
                     <CardTitle>Log In</CardTitle>
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
               <div className='register'>
                <Form>
                 <h1>Register</h1>
                 <FormGroup>
                   <Label for="username">Username:</Label>
                   <Input onChange={this.handleChange} name="username" type="text" placeholder="Username" />
                 </FormGroup>
                 <FormGroup>
                   <Label for="password">Password:</Label>
                   <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                 </FormGroup>
                 <FormGroup>
                   <Label for="password">Password:</Label>
                   <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                 </FormGroup>
                 <FormGroup>
                   <Label for="password">Password:</Label>
                   <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                 </FormGroup>
                 <FormGroup>
                   <Label for="password">Password:</Label>
                   <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                 </FormGroup>
                 <FormGroup>
                   <Label for="password">Password:</Label>
                   <Input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                 </FormGroup>
                 <Button onClick={this.handleSubmit}>Submit</Button>
               </Form>
               </div>
             </TabPane>
           </TabContent>
          </Nav>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps)(Header)
