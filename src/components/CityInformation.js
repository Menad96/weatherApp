import React from 'react'
import './CityInformation.css'
import {getIconWeather} from './../API/weatherApi'

function CityInformation({nameVille,hatitude,langitude,code}) {

    return (
        <div className="city-information">
        <div className="weather-icon">
            <i className={'lg-icon icon-'+code}></i>
        </div>
        <div className="city-long_haptitude">
            <span>H : {hatitude}°</span><span>L : {langitude}°</span>
        </div>
        <h1 className="city-name">{nameVille.toUpperCase()}</h1>
        </div>
    )
}

export default CityInformation
