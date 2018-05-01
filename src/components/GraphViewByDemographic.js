import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from './Chart';

class GraphViewByDemographic extends Component {
  componentWillMount () {
    console.log(this.props)
    this.getChartData();
  }

  getChartData () {
    this.setState({
      gender: {
        labels: this.props.resources.map(i=>i.title),
        datasets: [
          {
            label: 'Requests received',
            data: this.labels.map(i=>{
              this.props.requests.filter(j=>j.title==i && j.gender.startsWith(this.props.gender) && j.age.startsWith(this.props.age) && j.ethnicity.startsWith(this.props.ethnicity))
            }),

            backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(255, 99, 132, 0.6)'
           ],
           borderWidth: 1,
           borderColor: '#777',
           hoverBorderWidth: 3,
           hoverBorderColor: '#000'
         }
       ],
       layout: {
         padding: {
           left: 100,
           right: 100,
           top: 50,
           bottom: 50
         }
       }
      }
    })
  }

  render(){
    return (
      <div>
        <h1>{this.props.history.location.state.title}</h1>
        <Chart chartData={this.state} title='Gender' legendPosition='right' />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {requests: state.user.allRequests,resources:state.request.resources,filters:state.user.filters}
} 

export default connect(mapStateToProps)(GraphViewByDemographic)