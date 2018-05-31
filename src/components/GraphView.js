import React, { Component } from 'react'
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
        labels: [ 'Male','Female','Transgender',"Non-Binary", "Prefer not to say"],
        datasets: [
          {
            label: 'Requests received',
            data: [
              resource.filter(i=> i.gender === "Male").length,
              resource.filter(i=> i.gender === "Female").length,
              resource.filter(i=> i.gender === "Transgender").length,
              resource.filter(i=> i.gender === "Non-Binary").length,
              resource.filter(i=> i.gender === "Prefer not to say").length
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
      race: {
        labels: [ 'Hispanic','Black','White',"American Indian or Alaska Native", "Native Hawaiian or Other Pacific Islander","Asian"],
        datasets: [
          {
            label: 'Requests received',
            data: [
              resource.filter(i=> i.race === "Hispanic").length,
              resource.filter(i=> i.race === "Black").length,
              resource.filter(i=> i.race === "White").length,
              resource.filter(i=> i.race === "American Indian or Alaska Native").length,
              resource.filter(i=> i.race === "Native Hawaiian or Other Pacific Islander").length,
              resource.filter(i=> i.race === "Asian").length,
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
      ethnicity: {
        labels: [ 'Hispanic, Latino or of Spanish origin','Not of Hispanic, Latino, or of Spanish origin'],
        datasets: [
          {
            label: 'Requests received',
            data: [
              resource.filter(i=> i.ethnicity === "Hispanic, Latino or of Spanish origin").length,
              resource.filter(i=> i.ethnicity === "Not of Hispanic, Latino, or of Spanish origin").length,
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
              resource.filter(i=> i.age === "13-17").length,
              resource.filter(i=> i.age === "18-24").length,
              resource.filter(i=> i.age === "25-34").length,
              resource.filter(i=> i.age === "35-44").length,
              resource.filter(i=> i.age === "45-54").length,
              resource.filter(i=> i.age === "55-64").length,
              resource.filter(i=> i.age === "65-74").length,
              resource.filter(i=> i.age === "75 or Above").length,
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
          <Chart chartData={this.state.race} title='Race' legendPosition='right' />
          <Chart chartData={this.state.ethnicity} title='Ethnicity' legendPosition='right' />
          <Chart chartData={this.state.age} title='Age' legendPosition='right' />
        </section>
      </div>
    );
  }
}

export default GraphView
