import React, { Component } from 'react';
import {filterProviders} from "../store/actions/userActions";
import {connect} from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Redirect } from 'react-router-dom';

class ServiceProviders extends Component {
  componentWillMount(){
    this.props.dispatch(filterProviders(this.props.match.params.type,this.props.allProviders))
  }

  renderProviders(provider){
    return(
        <Tr>
            <Td>
              {provider.name}
            </Td>
            <Td>
              <a target="_blank" href={provider.website} > {provider.website} </a>
            </Td>
            <Td>
              {provider.email !== "nan" ? provider.email : "N/A"}
            </Td>
            <Td>
              {provider.address !== "nan" ? provider.address : "N/A"}
            </Td>
            <Td>
              {provider.phone_number !== "nan" ? provider.phone_number : "N/A"}
            </Td>
        </Tr>
      )
  }
  render(){
    console.log(this.props)
    return (
      this.props.allProviders.length === 0 ?
       <Redirect to="/adminView" />
      :
      <div className='service-providers-container fixed-width global-padding'>
        <h1>Service Providers</h1>
        {
          this.props.provider.length == 0?
          <h2>Currently no Providers</h2>
          :
          <Table responsive hover>
            <Thead>
             <Tr>
               <Th><div className="center">Orgs</div></Th>
               <Th><div className="center">Website</div></Th>
               <Th><div className="center">Email</div></Th>
               <Th><div className="center">Address</div></Th>
               <Th><div className='center'>Phone #</div></Th>
             </Tr>
            </Thead>
            <Tbody>
              {this.props.provider.map(this.renderProviders)}
            </Tbody>
          </Table>
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {provider:state.user.filteredProviders,allProviders:state.user.allProviders}
}
export default connect(mapStateToProps)(ServiceProviders);
