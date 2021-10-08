import React from 'react'
import './DayInformation.css'
import iconHumidity from './../icons/wi-raindrop.svg'
import iconWind from './../icons/wi-small-craft-advisory.svg'
function DayInformation({temp,time,humidity,wind}) {
    return (
        <div className="day-weather-information">
        <div className="temp">
             <h1>{temp} <span>°</span><span>C</span></h1>
             <p>Updated : {time}</p>
        </div>
        <div className="more-info">
           <div className="humidity">
               <span><img src={iconHumidity} alt="Humidity"/></span>
               <span>{humidity}%</span>
           </div>
           <div className="wind">
               <span><img src={iconWind} alt="Wind"/></span>
               <span>{wind} km/h</span>
           </div>
        </div>
   </div>
    )
}

export default DayInformation
