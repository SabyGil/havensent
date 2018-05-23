import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from './Chart';
import { Redirect } from 'react-router-dom';

class GraphViewByDemographic extends Component {
  componentWillMount () {
    if(this.props.resources){
      this.getChartData();
    }
  }
  componentWillUnmount () {
    this.props.dispatch({type:"CLEANUP_FILTERS"})
  }

  getChartData () {

    this.setState({
      data: {
        labels: this.props.resources.map(i=>i.title),
        datasets: [
          {
            label: 'Requests received',
            data: this.props.resources.map(i=>{
              return this.props.requests.filter(j=>
                j.request_type.includes(i.id) &&
                j.gender.startsWith(this.props.filters.gender) &&
                j.age.startsWith(this.props.filters.age) &&
                j.ethnicity.startsWith(this.props.filters.ethnicity)
                ).length
            }),

            backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(255, 99, 132, 0.6)',
             'rgba(255, 73, 120, 0.6)'
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
    console.log(this.state)
    console.log(this.props)

    return (

      !this.props.resources?
      <Redirect to="/" />
      :
      <div className='demographic-graph'>
        <label>Gender</label>
        <select onChange={ (e)=>{this.props.dispatch({type:"SELECT_FILTER",payload: {type:"gender", data: e.target.value}}); this.getChartData()}} >
          <option value={""}>----</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
          <option value="None">None of the Above</option>
        </select>

        <label>Ethnicity</label>
        <select onChange={ (e)=>{this.props.dispatch({type:"SELECT_FILTER",payload: {type:"ethnicity", data: e.target.value}}); this.getChartData()}} >
            <option value={""}>-----</option>
            <option value="Hispanic">Hispanic</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Latino/Spanish">Latino or Spanish Origin</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Other">Other</option>
        </select>

        <label>Age</label>
        <select onChange={ (e)=>{this.props.dispatch({type:"SELECT_FILTER",payload: {type:"age", data: e.target.value}}); this.getChartData()}} >
          <option value={""}>-----</option>
          <option value="13-17">13-17</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55-64">55-64</option>
          <option value="65-74">65-74</option>
          <option value="75 or Above">75 or Above</option>
        </select>
        <section className='demographic-data-container panel'>
        {/* <section className='feature panel'>
          <div className='feature-chart'> */}
            <Chart chartData={this.state.data} title='' legendPosition='right' />
          {/* </div> */}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {requests: state.user.allRequests,resources:state.request.resources,filters:state.user.filters}
}

export default connect(mapStateToProps)(GraphViewByDemographic)
