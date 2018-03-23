import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import { getResources, getOrgs } from '../store/actions/requestActions'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
  >
    {(props.isMarkerShown && props.organizations) && 
    props.organizations.map(i=> <Marker onClick={()=>{props.dispatch({type:"PICK_HAVEN",payload:{id: i.id,title:i.username}})}} position={{ lat: parseFloat(i.organization.latitude), lng: parseFloat(i.organization.longitude) }} />)
  }
  </GoogleMap>
  ))

class Request extends Component {
  componentDidMount(){
    this.props.dispatch(getResources())
    this.props.dispatch(getOrgs())
  }
  render(){
    console.log(this.props)
    return (
      <div className='request-page'>
        <div className='fixed-width'>

          <section className='map-area'>
            <h1>Request Resources in NYC</h1>
            <div className='map-container'>
              <MyMapComponent isMarkerShown
              organizations = {this.props.allOrganizations && this.props.allOrganizations.filter(i=> i.organization != null )}
              dispatch={this.props.dispatch}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />} 
              />
            </div>
          </section>

          <section className='haven-info-container'>
                <h1>Resources</h1>
                 {
                  this.props.resources && this.props.resources.map(i=>
                    <h2 value={i.id} onClick={(e)=>{this.props.dispatch({type:"ADD_TO_REQUEST",payload:{id: e.target.value,title:i.title}})}}>{i.title}</h2>
                  )}
             <div className='next-btn'>
                <NavLink exact to='/requestscript'><button>Next</button></NavLink>
             </div>

          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.request
}

export default connect(mapStateToProps)(Request)