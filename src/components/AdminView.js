import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRequests,getProviders,getProfile} from "../store/actions/userActions";
import {getResources} from "../store/actions/requestActions"
import { Link,  } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

class AdminView extends Component {
  componentDidMount(){
    this.props.dispatch(getRequests())
    this.props.dispatch(getResources())
    this.props.dispatch(getProfile())
    if(!this.props.providerReceived){
      this.props.dispatch(getProviders())
    }
  }

  render(){
    return (
        !this.props.isLoggedIn?

        <Redirect to="/" />

      :
      <div className='admin-view-page fixed-width global-padding'>
      {this.props.profile && <h1>Here's the link for *haven name here*: {`http://localhost:3000/request?id=${this.props.profile.id}`}</h1>}
       <section className='requests-display'>
         <h1>Requests Received</h1>
        <Table responsive hover>
          <Thead>
             <Tr>
               <Th><div className=" s5 ">Types of Services</div></Th>
               <Th> <div className="center">Number of requests</div></Th>
               <Th> <div className=" right"></div></Th>
             </Tr>
          </Thead>
          <Tbody>
            {
            this.props.resources.map(i => {
              let resource = this.props.requests.filter(req=>req.request_type.includes(i.id))
              return (
                    <Tr>
                      <Td>
                        <div>
                          <Link to={{ pathname: '/graphView',state: { resource: resource,title:i.title }}}>
                            {i.title}
                          </Link>
                        </div>
                      </Td>
                      <Td><div className="center">{resource.length}</div></Td>
                      <Td><div className="right"><Link to={`/serviceProviders/${i.title}`}>Find Service Providers</Link></div></Td>
                    </Tr>
                  )
                }
              )}
             <Tr>
               <Td><Link to="/demographicView">TOTAL</Link></Td>
               <Td className="center"><span className='total-num'>{this.props.requests.length}</span></Td>
               <Td className="right"> </Td>
             </Tr>
         </Tbody>
      </Table>
    </section>
      <br/>
    </div>

    );
  }
}

AdminView.defaultProps ={
  resources:[],
  requests:[]
}
function mapStateToProps(state){
  return {requests: state.user.allRequests,resources:state.request.resources, isLoggedIn: state.user.isLoggedIn,providerReceived:state.user.providerReceived,provider:state.user.allProviders,profile:state.user.profile}
}

export default connect(mapStateToProps)(AdminView);
