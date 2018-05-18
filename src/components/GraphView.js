import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from './Chart';

class GraphView extends Component {
  componentWillMount () {
    console.log(this.props)
    this.getChartData();
  }

  getChartData () {
    let resource = this.props.history.location.state.resource
    this.setState({
      gender: {
        labels: [ 'Male','Female','Transgender',"None of the Above"],
        datasets: [
          {
            label: 'Requests received',
            data: [
              resource.filter(i=> i.gender == "Male").length,
              resource.filter(i=> i.gender == "Female").length,
              resource.filter(i=> i.gender == "Transgender").length,
              resource.filter(i=> i.gender == "None of the Above").length
            ],
            backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(232, 60, 112, 0.6)'
           ],
           borderWidth: 1,
           borderColor: '#777',
           hoverBorderWidth: 3,
           hoverBorderColor: '#000',
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
      },
      ethnicity: {
        labels: [ 'Hispanic','Black','White',"Latino or Spanish Origin", "Middle Eastern", "Other"],
        datasets: [
          {
            label: 'Requests received',
            data: [
              resource.filter(i=> i.ethnicity == "Hispanic").length,
              resource.filter(i=> i.ethnicity == "Black").length,
              resource.filter(i=> i.ethnicity == "White").length,
              resource.filter(i=> i.ethnicity == "Latino or Spanish Origin").length,
              resource.filter(i=> i.ethnicity == "Middle Eastern").length,
              resource.filter(i=> i.ethnicity == "Other").length,
            ],
            backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(232, 60, 112, 0.6)'
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
      },
      age: {
        labels: ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75 or Above"],
        datasets: [
          {
            label: 'Requests received',
            data: [
              resource.filter(i=> i.age == "13-17").length,
              resource.filter(i=> i.age == "18-24").length,
              resource.filter(i=> i.age == "25-34").length,
              resource.filter(i=> i.age == "35-44").length,
              resource.filter(i=> i.age == "45-54").length,
              resource.filter(i=> i.age == "55-64").length,
              resource.filter(i=> i.age == "65-74").length,
              resource.filter(i=> i.age == "75 or Above").length,
            ],
            backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(232, 60, 112, 0.6)'
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
           top: 100,
           bottom: 100
         }
       }
      }
    })
  }

  render(){
    return (
      <div className='services-chart-container'>
        <h1>{this.props.history.location.state.title}</h1>
        <section className='chart-data-container'>
          <Chart chartData={this.state.gender} title='Gender' legendPosition='right' />
          <Chart chartData={this.state.ethnicity} title='Ethnicity' legendPosition='right' />
          <Chart chartData={this.state.age} title='Age' legendPosition='right' />
        </section>
      </div>
    );
  }
}

export default GraphView
