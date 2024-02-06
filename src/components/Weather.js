import React from 'react'
import { useState ,useEffect } from 'react'
import WeatherItem from './WeatherItem';
const Weather = (props) =>{
    const[location,setLocation] = useState('kurukshtera');
    const[city,setCity] = useState('kurukshtera');
    const[report,setReport] = useState([]);
    const[info,setInfo] = useState({feels_like:0, humidity:0,windSpeed:0})
    const updateWeather = async () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9cdf94f06677fe2cb4eea4c223bceaa6`;
        try {
            let response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let parsedData = await response.json();
            console.log(parsedData);
            setReport(parsedData.weather[0]);
            setInfo({
                feels_like: parsedData.main.feels_like,
                humidity: parsedData.main.humidity,
                windSpeed: parsedData.wind.speed,
              });
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
    }
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            setCity(event.key);
          updateWeather();
        }
      };
    useEffect(()=>{
        updateWeather();
    },[location])
    return(
        <>
            <div className='weather-main '>
                <WeatherItem weatherReport ={report} info ={info} location = {location} setLocation ={setLocation} searchLocation={searchLocation} city={city} />
            </div>
        </>
    )
}
export default Weather;