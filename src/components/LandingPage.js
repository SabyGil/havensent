import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


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
    console.log(this.props)
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
                  className='landing-page-modals'
                  overlayClassName='overlay'
                  onRequestClose={this.modal}
                  >
                  <Form onSubmit={this.handleSubmit}>
                   <FormGroup>
                     <Label>Enter Zipcode</Label>
                     <Input onChange={(e)=>this.props.dispatch({type:"ADD_ZIP",payload: e.target.value})} type='number' />
                     <Input type="submit" />
                     {this.state.attemptZip && <Label className='invalid-zip'>Invalid Zipcode</Label>}
                   </FormGroup>
                  </Form>
                </Modal>

                <Modal
                  isOpen={this.props.finish}
                  onRequestClose={()=>this.props.dispatch({type:"THANKS",payload:false})}
                  className='landing-page-modals'
                  overlayClassName='overlay'
                  >
                  <Form onSubmit={()=>this.props.dispatch({type:"THANKS",payload:false})}>
                    <h1>Thanks! Your input helps {this.props.haven} achieve its mission for your community.</h1>
                   <FormGroup>
                     <Label></Label>
                     <button className='thanks-btn'>Great</button>
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
  return {error: state.request.zipError, finish:state.request.finish,haven: state.request.haven.title}
}

export default connect(mapStateToProps)(LandingPage);
