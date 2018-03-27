import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import api from "../utils/api"
import Modal from 'react-modal'
import { getResources, getOrgs } from '../store/actions/requestActions'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
  >
    {(props.isMarkerShown && props.organizations) &&
    props.organizations.map(i=> <Marker onClick={()=>{props.dispatch({type:"PICK_HAVEN",payload:{id: i.organization.id,title:i.username}})}} position={{ lat: parseFloat(i.organization.latitude), lng: parseFloat(i.organization.longitude) }} />)
  }
  </GoogleMap>
  ))

class Request extends Component {
  constructor(){
    super();
    this.state = {

    }
    this.loopIcons = this.loopIcons.bind(this);
  }
  componentDidMount(){
    this.props.dispatch(getResources())
    this.props.dispatch(getOrgs())
  }

  loopIcons () {
    const iconList = [
       'https://www.hillaryclintonquarterly.com/wp-content/uploads/2015/09/groceries.jpg'
    ];
    console.log(iconList)
    return iconList.map((icon, index) => {
      return (
        <img src={icon} key={index} alt='' height='100px'/>
      );
    })
  }
  ready(){
    if(this.props.haven && (this.props.requestedResources.length > 0) && this.props.age && this.props.gender && this.props.ethnicity){
      return true
    }else{
      return false
    }
  }
  sendRequest(){
    let request = {
      gender: this.props.gender,
      age: this.props.age,
      ethnicity: this.props.ethnicity,
      requester_email: this.props.requester_email,
      request_type: this.props.requestedResources.map(i=>i.id),
      Organization: this.props.haven.id
    }
    console.log(request)
    api.makeRequest(request)
      .then(response=>console.log(response))
  }
  render(){
    console.log(this.props)
    return (
      <div className='request-page'>
        {/* <div className='fixed-width'> */}
          <section className='map-area'>
            <div className='container'>
            <h1>Request Resources in NYC</h1>
            <div className='map-container'>
              <MyMapComponent isMarkerShown
              organizations = {this.props.allOrganizations && this.props.allOrganizations.filter(i=> i.organization != null )}
              dispatch={this.props.dispatch}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px`}} />}
              mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
          </section>

          <div className='haven-info-container top-box top-box-a'>
            <div className='container'>

                <h1>Resources</h1>
                 {
                  this.props.resources && this.props.resources.map(i=>
                    <h2 value={i.id} onClick={(e)=>{this.props.dispatch({type:"ADD_TO_REQUEST",payload:{id: i.id,title:i.title}})}}>{i.title}</h2>
                  )}
           </div>
          </div>

          <div className='top-box top-box-b'>
            <div className='container'>
              {this.loopIcons()}
              <br />
              <p>Gender</p>
              <select onChange={(e)=>{this.props.dispatch({type:"ADD_GENDER",payload:e.target.value})}}>
                <option>-Please Select-</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="None">None of the Above</option>
              </select>
              <p>Ethnicity</p>
              <select onChange={(e)=>{this.props.dispatch({type:"ADD_ETHNICITY",payload:e.target.value})}}>
                <option>-Please Select-</option>
                <option value="Hispanic">Hispanic</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Latino/Spanish">Latino or Spanish Origin</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Other">Other</option>
              </select>
              <p>Age</p>
              <select onChange={(e)=>{this.props.dispatch({type:"ADD_AGE",payload:e.target.value})}}>
                <option>-Please Select-</option>
                <option value="13-17">13-17</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65-74">65-74</option>
                <option value="75 or Above">75 or Above</option>
              </select>
               <div className='next-btn'>
                <button onClick={()=>this.props.dispatch({type:"OPEN_MODAL"})} disabled={this.ready()?false:true}>Submit</button>
               </div>
               <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={()=>this.props.dispatch({type:"CLOSE_MODAL"})}
              >
                <button onClick={()=>this.props.dispatch({type:"CLOSE_MODAL"})}>close</button>
                <div>
                  <h1>You're almost done!</h1>
                  <h2>Would you like to receive updates from {this.props.haven && this.props.haven.title}?</h2>
                  <input onChange={(e)=>this.props.dispatch({type:"ADD_EMAIL",payload:e.target.value})} type="email"/> <button onClick={()=>{this.sendRequest()}
                  }>Submit</button>
                  <button onClick={()=>this.sendRequest()}>No Thank You!</button>
                </div>
              </Modal>
            </div>
          </div>
        {/* </div> */}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.request
}

export default connect(mapStateToProps)(Request)
