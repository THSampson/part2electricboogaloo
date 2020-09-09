import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap'
import WeatherResults from './WeatherResults';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather';
const key = '4bdec29f5cd6d1ed8f21c91571219cf8'

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState({})
    const [temperature, setTemperature] = useState();
    const [description, setDescription] = useState('');
    const [feelsLike, setFeelsLike] = useState();
    const [maxTemp, setMaxTemp] = useState();
    const [minTemp, setMinTemp] = useState();
    const [windSpeed, setWindSpeed] = useState();
    const [sunRise, setSunRise] = useState('');
    const [sunSet, setSunSet] = useState('');
    const [units, setUnits] = useState('imperial');
    const [unitButton, setUnitButton] = useState(false);
    const [city, setCity] = useState('')
    let url = `${baseURL}?lat=${props.latitude}&lon=${props.longitude}&appid=${key}&units=${units}`;
    
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'appid': `${key}`
            })
        })
        .then(res => res.json())
        .then(json => {grabCity(json); grabTemperature(json); grabDescription(json); grabFeelsLike(json); grabHigh(json); grabLow(json); grabWindSpeed(json); grabSunrise(json); grabSunset(json)})
        .catch(err => console.log(err));
    }, [url])
        
        function grabCity(c) {
            return (setCity(c.name))
        }

        function grabTemperature(w) {
            return (setTemperature(w.main.temp)); 
        };

        function grabDescription(d) {
            return (setDescription(d.weather[0].description));
        }

        function grabFeelsLike(f) {
            return (setFeelsLike(f.main.feels_like))
        }

        function grabHigh(t) {
            return (setMaxTemp(t.main.temp_max))
        }

        function grabLow(m) {
            return (setMinTemp(m.main.temp_min))
        }

        function grabWindSpeed(ws) {
            return (setWindSpeed(ws.wind.speed))
        }

        function grabSunrise(sr) {
            let timeStamp = sr.sys.sunrise;
            let dateObj = new Date(timeStamp * 1000);
            let time = dateObj.toLocaleTimeString();
            return (setSunRise(time))
        }

        function grabSunset(set) {
            let timeStamp = set.sys.sunset;
            let dateObj = new Date(timeStamp * 1000);
            let time = dateObj.toLocaleTimeString();
            return (setSunSet(time))
        }

    const switchUnits = (event) => {
        event.preventDefault();
        setUnitButton(!unitButton);
        unitButton ? setUnits('imperial') : setUnits('metric');
    }

    return (
        <div>
            <WeatherResults city={city} temperature={temperature} description={description} feelsLike={feelsLike} maxTemp={maxTemp} minTemp={minTemp} windSpeed={windSpeed} sunRise={sunRise} sunSet={sunSet} units={units}/>
            <Button onClick={(e) => {switchUnits(e)}}>Switch between Fahrenheit and Celsius</Button>
        </div>
    )
}

export default Weather
