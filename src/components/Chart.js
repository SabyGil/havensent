import React, { Component } from 'react';
import { Bar, Line, Pie, } from 'react-chartjs-2';

// import {connect} from 'react-redux'
// import { getResources, getOrgs } from '../store/actions/requestActions'

class Chart extends Component {

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'center',
    location: 'City',
    defaultFontSize: 40,

  }

  render(){
    return (
      <div className='chart'>
        <Bar
          data={this.props.chartData}
          options={{
            responsive: true,
            layout: {
             padding: {
                 left: 0,
                 right: 0,
                 top: 20,
                 bottom: 20
             },
           },
            title: {
              display: this.props.displayTitle,
              text: `Requests received by ${this.props.title}`,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              "labels": {
                // "fontColor": "blue",
                fontSize: 25
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontSize: 20,
                  fontFamily: "sans-serif",
                  fontStyle: '500',
                  padding: 0
                }
              }],
              xAxes: [{
                ticks: {
                  fontSize: 20,
                  padding: 5
                }
              }],
            }
          }}

        />
        <Pie
          data={this.props.chartData}

          options={{
            responsive: true,
            // maintainAspectRatio: false,
            layout: {
             padding: {
                 left: 0,
                 right: 0,
                 top: 20,
                 bottom: 20
             },
           },
            title: {
              display: this.props.displayTitle,
              text: `Requests received by ${this.props.title}`,
              "fontSize": 30,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              "labels": {
                // "fontColor": "blue",
                fontSize: 25
              }
            },

          }}
        />
        <Line
          data={this.props.chartData}

          options={{
            responsive: true,
            title: {
              display: this.props.displayTitle,
              text: `Requests received by ${this.props.title}`,
              "fontSize": 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              "labels": {
                fontSize: 25
              }
            },
            layout: {
             padding: {
                 left: 0,
                 right: 0,
                 top: 0,
                 bottom: 20
             },
           },
            scales: {
              yAxes: [{
                ticks: {
                  fontSize: 20,
                  fontFamily: "sans-serif",
                  fontStyle: '500',
                  padding: 0
                }
              }],
              xAxes: [{
                ticks: {
                  fontSize: 25,
                  padding: 5
                }
              }],
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;

// function mapStateToProps(state){
//   return state.request
// }
//
// export default connect(mapStateToProps)(Chart);
