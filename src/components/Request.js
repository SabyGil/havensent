import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import api from "../utils/api"
import Modal from 'react-modal'
import zipcodes from 'zipcodes'
import { compose, withProps, withStateHandlers } from "recompose"
import { getResources, getOrgs } from '../store/actions/requestActions'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import Loader from 'react-loader-spinner'

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
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  >
    {(props.isMarkerShown && props.organizations) &&
    props.organizations.map((i,k)=>
      <Marker onClick={()=>{props.dispatch({type:"PICK_HAVEN",payload:{id: i.organization.id,title:i.username,name:i.organization.organization_name}})}}
              position={{ lat: parseFloat(i.organization.latitude), lng: parseFloat(i.organization.longitude) }}
              icon={i.username == props.selected.title ? {url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",scaledSize:{height:50,width:50}}:"" }
              onMouseOver={()=>props.onToggleOpen(props["open "+k],k)}
              onMouseOut={()=>props.onToggleOpen(props["open "+k],k)}>
     {props["open "+k] && <InfoWindow>
        <div>
        <p>{i.organization.organization_name}</p>
        <p>{i.organization.address}</p>
        <p>{i.organization.phone_number}</p>
        </div>
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
 async componentWillMount(){

    this.props.dispatch(getResources())
    await this.props.dispatch(getOrgs())
    let selected = undefined
    if(this.props.location.search !== ""){
        let org_id = this.props.location.search.replace("?id=", "")
        console.log(org_id)
        selected = this.props.allOrganizations.find(i=> i.id===parseInt(org_id))
    }
    console.log(selected)
    if(selected !== undefined){
      this.props.dispatch({type:"LATLON", payload:{lat:parseInt(selected.organization.latitude),lon:parseInt(selected.organization.longitude)}})
      this.props.dispatch({type:"PICK_HAVEN",payload:{id: selected.organization.id,title:selected.username,name:selected.organization.organization_name}})
    }
  }
   componentWillUnmount(){
    this.props.dispatch({type:"FINISH"})
  }

  ready(){
    if(this.props.haven.title !== "" && (this.props.requestedResources.length > 0) && this.props.age !== "" && this.props.gender !== "" && this.props.ethnicity !== "" && this.props.race !== ""){
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
      race: this.props.race,
      requester_email: this.props.requester_email,
      request_type: this.props.requestedResources.map(i=>i.id),
      Organization: this.props.haven.id
    }
    console.log(request)
    api.makeRequest(request)
      .then(response=> {
        this.props.dispatch({type:"THANKS",payload:true})
    })
      .then(response=>this.props.history.push("/"))

  }
  render(){
    console.log(this.props)
    return (
      <div>
       { 
        this.props.allOrganizations.length == 0?
        <center>
            <Loader 
                 type="Puff"
                 color="#00BFFF"
                 height="500" 
                 width="500"
              />   
        </center>
            :
            <div className='request-page fixed-width fixed-height container-fluid'>
                    <section className='map-area'>
                      <div className='container'>
                        <h1>Select Where I Need Help:</h1>
                        <div className='map-container'>
                          {this.props.allOrganizations.length>0 && <MyMapComponent isMarkerShown
                            organizations = {this.props.allOrganizations && this.props.allOrganizations.filter(i=> i.organization != null )}
                            dispatch={this.props.dispatch}
                            lon={this.props.lon}
                            lat={this.props.lat}
                            selected = {this.props.haven}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDURnY8-RKhvImIKT552ulVjqHmRKdKkr8&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement = {<div style={{ height: `100%` }} />}
                            containerElement = {<div className = 'style' />}
                            mapElement={<div style={{ height: `100%` }}
                           />}
                         />}
                       </div>
                      </div>
                    </section>
          
                    <section className='haven-info-container top-box top-box-a'>
                      <h1>Select Needs:</h1>
                      <div className='icons-container'>
                        {
                          this.props.resources && this.props.resources.map(i=>{
                            let bgColor = this.props.requestedResources.filter(j=>j.title==i.title).length>0?"#03a9f4":""
                             return (
                              <span className="icon-wrap">
                                 <img className="icon"
                                 style={{cursor:"pointer",'backgroundColor':bgColor}}
                                 src={i.icon} value={i.id}  height='100px'
                                 onClick={(e)=>{this.props.dispatch({type:"ADD_TO_REQUEST",payload:{id: i.id,title:i.title}})}}/>
                                 <p className="icon-title">{i.title}</p>
                              </span>
                            )
                          })
                        }
                      </div>
                    </section>
                    <div className='top-box top-box-b'>
                        <h1>Enter Basic Information</h1>
                        <p>Gender</p>
                        <select onChange={(e)=>{this.props.dispatch({type:"ADD_GENDER",payload:e.target.value})}}>
                          <option>-Please Select-</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Transgender">Transgender</option>
                          <option value="Non-Binary">Non-Binary</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        <p>Race</p>
                        <select onChange={(e)=>{this.props.dispatch({type:"ADD_RACE",payload:e.target.value})}}>
                          <option>-Please Select-</option>
                          <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                          <option value="Black or African American">Black or African American</option>
                          <option value="Asian">Asian</option>
                          <option value="White">White</option>
                          <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        <p>Ethnicity</p>
                        <select onChange={(e)=>{this.props.dispatch({type:"ADD_ETHNICITY",payload:e.target.value})}}>
                          <option>-Please Select-</option>
                          <option value="Hispanic, Latino or of Spanish origin">Hispanic, Latino or of Spanish origin</option>
                          <option value="Not of Hispanic, Latino, or of Spanish origin">Not of Hispanic, Latino, or of Spanish origin</option>
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
                         <div className='submit-btn-container'>
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
                            <h2>Would you like to receive updates and free resources through Havensent?</h2>
                            <input onChange={(e)=>this.props.dispatch({type:"ADD_EMAIL",payload:e.target.value})} type="email" placeholder='Enter Email...'/>
                            <button onClick={()=>this.sendRequest()}>No Thank You!</button>
                            <button onClick={()=>{this.sendRequest()}}>Submit</button>
                          </div>
                        </Modal>
                    </div>
      </div>
    }
    </div>
    );
  }
}

function mapStateToProps(state){
  return state.request
}

export default connect(mapStateToProps)(Request)
