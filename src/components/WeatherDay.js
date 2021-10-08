import React from 'react'
import './WeatherDay.css'

function WeatherDay({day,degree,code}) {
    return (
        <div className="weather-day">
          <h1 className="name-day">{day}</h1>
          <div className="icon"><i className={'lg-icon icon-'+code}></i></div>
          <h1 className="day-temp">{degree}°</h1>
        </div>
    )
}

export default WeatherDay
