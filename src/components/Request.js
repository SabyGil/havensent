import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import api from "../utils/api"
import Modal from 'react-modal'
import { compose, withProps, withStateHandlers } from "recompose"
import { getResources, getOrgs } from '../store/actions/requestActions'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"



const MyMapComponent = compose(
  withStateHandlers((props) => ((function(){
    console.log(props)
    let obj = {}
    for(let i=0;i<props.organizations.length; i++){
      obj["open "+ i] = false
      console.log(obj)
    }
    console.log(obj)
    return obj
  })()), {
    onToggleOpen: () => (b,k) => {
      if(b){
        return{
          ["open "+k] : false
        }}
      else{
          return{
            ["open "+k] : true
          }
        }
      }
  }),
  withScriptjs,
  withGoogleMap)
  (props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
  >
    {(props.isMarkerShown && props.organizations) &&
    props.organizations.map((i,k)=>
      <Marker onClick={()=>{props.dispatch({type:"PICK_HAVEN",payload:{id: i.organization.id,title:i.username}})}} position={{ lat: parseFloat(i.organization.latitude), lng: parseFloat(i.organization.longitude) }}
        onMouseOver={()=>props.onToggleOpen(props["open "+k],k)}
        onMouseOut={()=>props.onToggleOpen(props["open "+k],k)}>
     {props["open "+k] && <InfoWindow>
        <p>{i.username}</p>
      </InfoWindow>}

      </Marker>
      )
  }
  </GoogleMap>
  )

class Request extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  componentWillMount(){
    this.props.dispatch(getResources())
    this.props.dispatch(getOrgs())
  }

  ready(){
    if(this.props.haven && (this.props.requestedResources.length > 0) && this.props.age !== "" && this.props.gender !== "" && this.props.ethnicity !== ""){
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
      .then(response=> {
        this.props.dispatch({type:"FINISH"})
        this.props.history.push("/")
    })

  }
  render(){
    console.log(this.props)
    return (
      <div className='request-page fixed-width fixed-height'>
        <section className='map-area'>
          <div className='container'>
            <h1>Select location</h1>
            <div className='map-container'>
              {this.props.allOrganizations.length>0 && <MyMapComponent isMarkerShown
                            organizations = {this.props.allOrganizations && this.props.allOrganizations.filter(i=> i.organization != null )}
                            dispatch={this.props.dispatch}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div className='style' />}
                            mapElement={<div style={{ height: `100%` }}
                           />}
                            />}
            </div>
          </div>
        </section>

        <div className='haven-info-container top-box top-box-b'>
          <h1>Select needs</h1>
          <div className='icons'>
            {
              this.props.resources && this.props.resources.map(i=>{
                let bgColor = this.props.requestedResources.filter(j=>j.title==i.title).length>0?"#03a9f4":""
                 return(
                  <span className="iconWrap">
                   <img className="icon"
                   style={{cursor:"pointer",'backgroundColor':bgColor}}
                   src={i.icon} value={i.id}  height='100px'
                   onClick={(e)=>{this.props.dispatch({type:"ADD_TO_REQUEST",payload:{id: i.id,title:i.title}})}}/>
                   <p className="iconTitle">{i.title}</p>
                  </span>)
              })
            }
          </div>
        </div>

        <div className='top-box top-box-a'>
            <h4>Enter basic information</h4>
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
              className='modal-styles'
              overlayClassName='overlay'
              onRequestClose={()=>this.props.dispatch({type:"CLOSE_MODAL"})}
              >
              <div className='modal-content'>
                <button className='close-button' onClick={()=>this.props.dispatch({type:"CLOSE_MODAL"})}><i className="fas fa-times-circle"></i></button>
                <h1>You're almost done!</h1>
                <h2>Would you like to receive updates from {this.props.haven && this.props.haven.title}?</h2>
                <input onChange={(e)=>this.props.dispatch({type:"ADD_EMAIL",payload:e.target.value})} type="email" placeholder='Enter Email...'/>
                <button onClick={()=>this.sendRequest()}>No Thank You!</button>
                <button onClick={()=>{this.sendRequest()}}>Submit</button>
              </div>
            </Modal>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.request
}

export default connect(mapStateToProps)(Request)
