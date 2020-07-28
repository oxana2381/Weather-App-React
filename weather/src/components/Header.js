import React from 'react'
import{ NavLink } from 'react-router-dom'

export function Header(){
    return(
        <header className="header">
   <span> Weather App </span> 
    <div id="date"></div>
    <nav className="navigation">
        <ul>
            
            <li id="index">
                <NavLink exact activeClassName='active' to="/">Home</NavLink>
            </li>
            <li id="list">
                <NavLink exact activeClassName='active'  to="/list">List</NavLink>
            </li>
            <li id="forecast">
                <NavLink exact activeClassName='active' to="/forecast">Forecast</NavLink>
            </li>
            <li id="about">
                <NavLink exact activeClassName='active' to="/about">About</NavLink>
            </li>
           
        </ul>
    </nav>
   

</header>
    )  

}