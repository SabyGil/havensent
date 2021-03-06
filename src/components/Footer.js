import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render(){
    console.log(this.props)
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
              <p>Send your questions and comments on our Facebook page</p>
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

let mapStateToProps = (state) => {
  return state.user
}

export default connect(mapStateToProps)(Footer);
