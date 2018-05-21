import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import Modal from 'react-modal'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class LandingPage extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: false,
      attemptZip: false
    }
    this.modal = this.modal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  modal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.props.error){
        this.setState({
          attemptZip: true
        })
    }else{
      this.setState({
          attemptZip: false
        })
        this.props.history.push("/request")
    }
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
                  <Form onSubmit={this.handleSubmit}>
                   <FormGroup>
                     <Label>Enter Proper Zipcode</Label>
                     <Input onChange={(e)=>this.props.dispatch({type:"ADD_ZIP",payload: e.target.value})} type='number' />
                     <Input type="submit" />
                     {this.state.attemptZip && <Label>Invalid Zipcode</Label>}
                   </FormGroup>
                  </Form>
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
