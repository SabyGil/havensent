import React, { Component } from 'react'
import {connect} from 'react-redux'

class RequestScript extends Component {
  render(){
    return(
      <div className='request-script-page'>
        <div className='fixed-width'>
          <section className='script-container'>
            <h1>We already wrote a script for you!</h1>
            <div className=''>
              Hi {this.props.haven.title} Administrators/Staff,
              <br/>
              <br/>
              My family and I have benefited from {this.props.haven.title}’s mission, and we are thankful for your dedication. However, we now need help with these services, you need {this.props.requestedResources.map(i=>i.title)}. We strongly urge you to reach out to other organizations to provide these services for us so that we can continue to support {this.props.haven.title}.
              <br/>
              <br/>
              Thank you.
            </div>
          </section>

          <section className='request-methods'>
            <h4>Select Request Method</h4>
            <p>Once you select the mothod of request, we will send your resquet to the provided organization along with the link to our website. Admins from the organization can sign up and review requests in detail.</p>
            <div className='contacts-container'>
              <button>Call(+2)</button>
              <button>FaceBook(+5)</button>
              <button>Email(+1)</button>
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

export default connect(mapStateToProps)(RequestScript)