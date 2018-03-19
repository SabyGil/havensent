import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Request extends Component {

  render(){
    return (
      <div className='request-page'>
        <div className='fixed-width'>
          <section className='map-area'>
            <h1>Request Resources in East LA</h1>
            <div className='map-container'>
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=18lOqWVK_CNIF0G9fhn6kybIZ3nQ" width="700" height="500"></iframe>
            </div>
          </section>

          <section className='haven-info-container'>
            <div className="haven-info">
              <label>Haven Name</label>

                  <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Dolores Mission Church</option>
                    <option value="2">Boyle Heights Community Center</option>
                    <option value="3">Huntington Park Community Center</option>
                    <option value="4">Central Americans Resource Center</option>
                    <option value="5">Hillsong LA</option>
                    <option value="6">Abraham Lincoln HS</option>
                    <option value="6">St Mary Catholic School</option>
                    <option value="6">Cathedral of Our Lady of the Angels</option>
                    <option value="6">Theodore Roosevelt High School</option>
                    <option value="6">First Street Elementary School</option>
                    <option value="6">Bridge Street Elementary School</option>
                    <option value="6">Breed Street Elementary School</option>
                    <option value="6">Euclid Avenue Elementary School</option>
                    <option value="6">Hollenbeck Middle School</option>
                    <option value="6">Lorena Street Elementary School</option>
                    <option value="6">Bishop Mora Salesian High School</option>
                    <option value="6">Evergreen Ave Elementary School</option>
                    <option value="6">Second Street Elementary School</option>
                    <option value="6">Malabar Street Elementary School</option>
                    <option value="6">Robert Louis Stevenson Middle School</option>
                    <option value="6">Sheridan Street Elementary School</option>
                    <option value="6">Sunrise Elementary School</option>
                    <option value="6">Oscar De La Hoya Ánimo Charter High School</option>
                    <option value="6">Christopher Dena Elementary School</option>
                    <option value="6">Boyle Heights Technology Youth Center</option>
                    <option value="6">Evergreen Recreation Center</option>
                    <option value="6">Wabash Recreation Center</option>
                    <option value="6">East La Community Corporation</option>
                    <option value="6">L.A. Care Family Resource Center - Boyle Heights</option>
                    <option value="6">Boyle Heights Sports Center</option>
                    <option value="6">Pueblo Del Sol Community Center</option>
                    <option value="6">Hollenbeck Youth Center</option>
                    <option value="6">Plaza Community Services-Youth Services Division</option>
                    <option value="6">Garfield High School</option>
                    <option value="6">Belvedere Elementary School</option>
                    <option value="6">David Wark Griffith Junior High School</option>
                    <option value="6">Brooklyn Avenue Elementary School</option>
                    <option value="6">Eastman Avenue Elementary School</option>
                    <option value="6">East Los Angeles Performing Arts Academy</option>
                    <option value="6">Our Lady of Lourdes School</option>
                    <option value="6">Fourth Street Elementary School</option>
                    <option value="6">SEA Charter School, East L.A Education Center</option>
                    <option value="6">Weber Community Center</option>
                    <option value="6">The Salvation Army Siemon Center</option>
                    <option value="6">All Peoples Community Center</option>
                    <option value="6">South Park Recreation Center</option>
                    <option value="6">St Andrews Recreation Center</option>
                    <option value="6">Baldwin Hills Recreation Center</option>
                    <option value="6">African American Community Center</option>
                  </select>
                </div>

                {/* ---- */}
              <div className="haven-info">
                <label>Requested Resources</label>
               <select >
                 <option value="" disabled selected>Choose your option</option>
                 <option value="1">Food Pantry</option>
                 <option value="2">Food Benefits</option>
                 <option value="3">Temporary Housing</option>
                 <option value="4">Paying Utilities and Rent</option>
                 <option value="5">Immigration Services</option>
                 <option value="6">Medical Screening</option>
                 <option value="7">Dental Screening</option>
                 <option value="8">College Information</option>
                 <option value="9">Other</option>
               </select>
             </div>
             <div className='next-btn'>

                <NavLink exact to='/requestscript'><button>Next</button></NavLink>
             </div>

          </section>
        </div>
      </div>
    );
  }
}
