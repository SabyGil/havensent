import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getRequests} from "../store/actions/userActions"
import {getResources} from "../store/actions/requestActions"
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class AdminView extends Component {
  componentDidMount(){
    this.props.dispatch(getRequests())
    this.props.dispatch(getResources())
  }

  render(){
    console.log(this.props)
    return (
      !this.props.isLoggedIn?

      <Redirect to="/" />

      :

      <div className='admin-view-page fixed-width'>
        {/* <div className='fixed-width'> */}
        {/* <!--   Icon Section   --> */}
          <section className='requests-display'>
              <h1>Requests received</h1>
              {/* <br/> */}
              <table className='center'>
                <tbody>
                  <tr>
                    <th><div className=" s5 ">Types of Services</div></th>
                    <th> <div className=" center">Number of requests</div></th>
                    <th> <div className=" right"></div></th>
                  </tr>
                  {
                    this.props.resources.map(i=>{
                      let resource = this.props.requests.filter(req=>req.request_type.includes(i.id))
                      return(<tr>
                              <td><div><Link to={{ pathname: '/graphView',state: { resource: resource,title:i.title }}}>{i.title}</Link></div></td>
                              <td><div className=" center">{resource.length}</div></td>
                              <td><div className=" right">Find Service Providers</div></td>
                            </tr>)}
                      )}
                  <tr>
                    <td><Link to="/demographicView">TOTAL</Link></td>
                    <td className=" center">{this.props.requests.length}</td>
                    <td className=" right"> </td>
                  </tr>
                </tbody>
              </table>
          </section>
          <br/>
        {/* </div> */}
      </div>
    );
  }
}

AdminView.defaultProps ={
  resources:[],
  requests:[]
}
function mapStateToProps(state){
  return {requests: state.user.allRequests,resources:state.request.resources, isLoggedIn: state.user.isLoggedIn}
}

export default connect(mapStateToProps)(AdminView)
