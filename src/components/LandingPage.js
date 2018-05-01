import React from 'react';
import { NavLink } from 'react-router-dom';
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
                  <Form>
                   <FormGroup>
                     <Label for="zipcode">Enter Zipcode</Label>
                     <Input type='text' />
                     <NavLink exact="exact" to='/request'>Continue</NavLink>
                   </FormGroup>
                 </Form>
                </Modal>
            </div>
        </section>
      </div>
    );
  };
}

export default LandingPage;
