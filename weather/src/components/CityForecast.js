import React, { Component, useState, useEffect} from 'react'
import{getWeatherByCity} from '../services'

export function CityForecast (props){
    const[data,setData] = useState(null);

    useEffect(()=>{
        getWeatherByCity(props.cityName).then((data )=>{
            setData(
                (data)
              // isLoading:false
            )
        })//.catch(err =>setData({isLoading:false}))
    },[props.cityName])


    
   /* componentDidMount(){
        getWeatherByCity(this.props.cityName).then((data )=>{
            this.setState({
                data,
                isLoading:false
            })
        }).catch(err =>this.setState({isLoading:false}))
    }*/
        /*handleReload = (cityName) => {
            this.setState({ isLoading: true})
            getWeatherByCity(this.props.cityName).then((data) => {
                this.setState({ 
                    data,
                    isLoading: false
                })
            }).catch(err => this.setState({isLoading: false}))*/
     


        
         //  if(isLoading){
            //    return(<p>Loading...</p>)
           // }
            if(data){
            return(
                <div>
                    {props.cityName} 
                 :  { Math.floor (data.main.temp)} <span>&#x2103;</span>
                </div>
            )}
       // return (<p>Sorry could not get data, please refresh page</p>)
        }
