import React, { useState } from 'react'
import './WeatherItem.css'
const WeatherItem = (props) => {
    const [city, setCity] = useState('Enter your city');
    const { weatherReport, info, setLocation, searchLocation } = props;
    function kelvinToCelsius(kelvin) {
        return  (kelvin - 273.15) ;
      }
      let num = info.feels_like
    let val =kelvinToCelsius(num).toFixed(2);
    return (

        <div className='container'>
            <div className="search">
                <input type="text" onChange={(event) => {
                    setLocation(event.target.value);
                    setCity(event.target.value);
                }} onkeypress={searchLocation} placeholder='Enter Location'
                />
            </div>
            <div className="middle">
                <div className="middle-item">
                    <div className="city">
                        <p>{city}</p>
                    </div>
                    <div className="temp">
                        <p> {val} ° C </p>
                    </div>
                    <div className="description">
                        <p>{weatherReport.description} </p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="bottom">
                    <div className="bottom-item">
                        <div className="feels-like bold">
                            <p> {info.feels_like}° F</p>
                            <p> Feels-like </p>
                        </div>
                        <div className="humidity bold">
                            <p> {info.humidity}% </p>
                            <p> Humidity </p>
                        </div>
                        <div className="wind bold">
                            <p> {info.windSpeed} MPH  </p>
                            <p> Wind flow </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default WeatherItem;