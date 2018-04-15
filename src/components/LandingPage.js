import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <div>
      <section className='jumbo-container filter'>
        <div className=''>
          {/* <img src={require("./images/bg.jpg")} alt="" height="" /> */}
          <div className='fixed-width'>
            <h1 className="display-3">Fluid jumbotron</h1>
            <button>
              <NavLink exact="exact" to='/request'>Make a request</NavLink>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
