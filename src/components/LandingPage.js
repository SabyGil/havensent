import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const LandingPage = (props) => {
  return (
    <div>
    <section>
      <Jumbotron className='bg' fluid>
        <div className='fixed-width'>

        {/* <Container fluid> */}
          <div className='bgTwo'>
            <img src="bg.jpg" alt="" height="100" />
          </div>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        {/* </Container> */}
      </div>
      </Jumbotron>
    </section>

    <div className='about-us-container'>
      <div className='fixed-width'>
      <section className='about-us'>
        <div>
          <h1>About Us</h1>
          <p>
            Havensent empowers immigrant youth and their families to have essential services provided
            at their safe havens- the schools, houses of worship, and community centers they attend regularly. ith data aggregation,
            safe havens get more funding, legislators have better data to effect policy,
            and more in our communities.
          </p>
        </div>
        <div>
          <span>Social</span>
          <br />
          <span>Facebook</span>
        </div>
      </section>
    </div>

  </div>
  <footer>
    <span>©2017 Havensent</span>
  </footer>
</div>
  );
};

export default LandingPage;
