import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getRequests} from "../store/actions/userActions"
import {getResources} from "../store/actions/requestActions"
import { Link } from 'react-router-dom';

class AdminView extends Component {
  componentDidMount(){
    this.props.dispatch(getRequests())
    this.props.dispatch(getResources())
  }

  render(){
    console.log(this.props)
    return (
      <div className='admin-view-page'>
        <div className='fixed-width'>
        {/* <!--   Icon Section   --> */}
          <section className='requests-display'>
            <div className="">
              <h5 className='center'>Requests received for Dolores Mission Church</h5>
              <br/>
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
                              <td><div className=" right">Find Services</div></td>
                            </tr>)}
                      )}
                </tbody>
              </table>
            </div>
          </section>
          <br/>
        </div>
      </div>
    );
  }
}

AdminView.defaultProps ={
  resources:[],
  requests:[]
}
function mapStateToProps(state){
  return {requests: state.user.allRequests,resources:state.request.resources}
}

export default connect(mapStateToProps)(AdminView)