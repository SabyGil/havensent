import React, { Component } from 'react';

export default class AdminView extends Component {
  render(){
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
                  <tr>
                    <th><div className=" ">Food Pantry</div></th>
                    <th> <div className=" center ">3</div></th>
                    <th> <div className=" right"><a href="" className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                  <tr>
                    <th><div className=" ">Food Benefits</div></th>
                    <th> <div className=" center">2</div></th>
                    <th> <div className=" right"><a className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                  <tr>
                    <th><div className=" ">Paying Utilities and Rent</div></th>
                    <th> <div className=" center ">1</div></th>
                    <th> <div className=" right"><a className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                  <tr>
                    <th><div className=" ">Immigration Services</div></th>
                    <th> <div className=" center">10</div></th>
                    <th> <div className=" right"><a href="findServices.html" className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                  <tr>
                    <th><div className=" ">Medical Screening</div></th>
                    <th> <div className=" center">3</div></th>
                    <th> <div className=" right"><a className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                  <tr>
                    <th><div className=" ">Dental Screening</div></th>
                    <th> <div className=" center">6</div></th>
                    <th> <div className=" right"><a className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                  <tr>
                    <th><div className=" s4 ">College Information</div></th>
                    <th> <div className=" s10 center">9</div></th>
                    <th> <div className=" s10 right"><a className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                   <tr>
                    <th><div className=" s4 ">Other</div></th>
                    <th> <div className=" s10 center">0</div></th>
                    <th> <div className=" s10 right"><a className="waves-effect waves-light btn">Find Services</a></div></th>
                  </tr>
                   <tr>
                    <th><div className=" s4 ">Total</div></th>
                    <th> <div className=" s10 center">34</div></th>
                    <th> <div className=" s10 right"></div></th>
                  </tr>
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
