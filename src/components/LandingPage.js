import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import Modal from 'react-modal'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class LandingPage extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: false
    }
    this.modal = this.modal.bind(this);
  }

  modal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    return (
      <div>
        <section className='jumbo-container filter'>
            <div className='fixed-width'>
              <h1 className="display-3">Get what you need, <br/>
                where you feel safe.
              </h1>
              <button onClick={this.modal}>Request Help</button>

                <Modal
                  isOpen={this.state.isOpen}
                  className='modal-styles-header'
                  overlayClassName='overlay'
                  onRequestClose={this.modal}
                  >
                   <FormGroup>
                     <Label for="zipcode">Enter Zipcode</Label>
                     <Input onChange={(e)=>this.props.dispatch({type:"ADD_ZIP",payload: e.target.value})} type='number' />
                     {this.props.error?<h1>Enter Proper Zipcode</h1> : <NavLink exact="exact" to='/request'>Continue</NavLink>}
                   </FormGroup>
                </Modal>
            </div>
        </section>
      </div>
    );
  };
}

function mapStateToProps(state){
  return {error: state.request.zipError}
}

export default connect(mapStateToProps)(LandingPage);
