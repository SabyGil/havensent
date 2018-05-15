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
              <h1 className="jumbo-blurb">Ask for what you need, <br/>
                where you feel safe.
              </h1>
              <button onClick={this.modal}>Ask for help</button>

                <Modal
                  isOpen={this.state.isOpen}
                  className='landing-page-modal'
                  overlayClassName='overlay'
                  onRequestClose={this.modal}
                  >
                   <FormGroup>
                     {this.props.error?<Label>Enter Proper Zipcode</Label> : <NavLink exact="exact" to='/request'>Continue</NavLink>}
                     <Input onChange={(e)=>this.props.dispatch({type:"ADD_ZIP",payload: e.target.value})} type='number' />
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
