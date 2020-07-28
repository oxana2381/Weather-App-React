import React , { Component } from 'react'
import { cities } from '../data/citiesList';
import { getWeatherByCity } from '../services'


export  class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
         data: null,
         city: ''
        }
    
}

CityRow=()=>{
    return this.state.data.map(city=>{

        Math.floor(city.temp)
    }

    )

    }


/*componentDidMount(){
   
    if(this.props.city) {
        this.setState({ city: this.props.city});
        getWeatherByCity(cities[this.props.city].name).then(data => this.setState({ data}))
       
    }
}*/


    render() {
        const citiesKeys = Object.keys(cities);
       

    return (
       
       
              citiesKeys.map(city => {
             return (<div id={city} key={city} value={city}>{cities[city].name}: {this.CityRow}<span>&#x2103;</span></div>)
               })
    )
              
                  
}}