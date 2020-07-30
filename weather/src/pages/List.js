import React  from 'react'
import { cities } from '../data/citiesList';
import {CityRow} from '../components/CityRow';

//import { getWeatherByCity } from '../services'


export  function List(props){

    const citiesKeys = Object.keys(cities);
    const getFilteredCities = () =>{
        return citiesKeys.filter(city =>{
            if(city !==props.selectedCity){
               
               return city
          }
            
        })
    }
    console.log( getFilteredCities())
 return(
     <React.Fragment>
     <h1>List of Cities</h1>
     {getFilteredCities().map(city=>{
         return (<CityRow key={city} cityName={cities[city].name}/>)
     }

     )}
    
         
         
     

     
     </React.Fragment>
 )



 }

