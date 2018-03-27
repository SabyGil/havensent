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
                    <h2 value={i.id} onClick={(e)=>{this.props.dispatch({type:"ADD_TO_REQUEST",payload:{id: e.target.value,title:i.title}})}}>{i.title}</h2>
                  )}
             <div className='next-btn'>
                <NavLink exact to='/requestscript'><button>Next</button></NavLink>
             </div>
           </div>
          </div>

          <div className='top-box top-box-b'>
            <div className='container'>

            {/* <h1>Demographics</h1> */}
              {/* <p>Gender</p> */}
              {this.loopIcons()}
              <br />
              <select>
                <option>-Please Select-</option>
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
                <option>None of the Above</option>
              </select>
              <p>Ethnicity</p>
              <select>
                <option>-Please Select-</option>
                <option>Hispanic</option>
                <option>Black</option>
                <option>White</option>
                <option>Latino or Spanish Origin</option>
                <option>Middle Eastern</option>
                <option>Other</option>
              </select>
              <p>Age</p>
              <select>
                <option>-Please Select-</option>
                <option>13-17</option>
                <option>18-24</option>
                <option>25-34</option>
                <option>35-44</option>
                <option>45-54</option>
                <option>55-64</option>
                <option>65-74</option>
                <option>75 or Above</option>
              </select>
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
