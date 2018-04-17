import React, { Component } from 'react'

export default class Request extends Component {
  render(){
    return (
      <div>
        <div className='about-us-container'>
          <section className='about-us fixed-width'>
            <div className='about-us-col'>
              <h1>About Us</h1>
              <p>
                Havensent empowers immigrant youth and their families to have essential services provided
                at their safe havens- the schools, houses of worship, and community centers they attend regularly. ith data aggregation,
                safe havens get more funding, legislators have better data to effect policy,
                and more in our communities.
              </p>
            </div>
          </section>
        </div>

        <footer>
          <span>©2018 Havensent</span>
        </footer>
      </div>
    );
  }
}
