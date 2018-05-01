import React, { Component } from 'react'

export default class Request extends Component {
  render(){
    return (
        <div className='about-us-container'>
          <section className='about-us fixed-width'>
            <div className='about-us-col'>
              <h1>About Us</h1>
              <p>
                Havensent safely voices your needs so that important resources are brought to
                your safe havens - the schools, houses of worship, and community centers you attend regularly. With Havensent,
                these safe havens can get more funding and our communities get what they need. 
              </p>
            </div>

            <div className='about-us-col social-media'>
              <span><i className="fab fa-facebook"></i></span>
            </div>
          </section>

        <footer>
          <span>©2018 Havensent</span>
        </footer>
      </div>
    );
  }
}
