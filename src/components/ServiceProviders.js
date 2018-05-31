import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

class ServiceProviders extends Component {
  render(){
    return (
      <div className='service-providers-container fixed-width global-padding'>
        <h1>Service Providers</h1>
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
            <Tr>
              <Td>
                test
              </Td>
              <Td>
                test
              </Td>
              <Td>
                test
              </Td>
              <Td>
                test
              </Td>
              <Td>
                test
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  }
}

export default ServiceProviders;
