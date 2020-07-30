import React  from 'react'
import { cities } from '../data/citiesList';
import {CityForecast} from '../components/CityForecast';

export function Forecast(props){

    return (
        <CityForecast cityName={cities[props.selectedCity].name}/>
    )
}