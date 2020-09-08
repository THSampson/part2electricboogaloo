import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap'

const baseURL = 'api.openweathermap.org/data/2.5/weather';
const key = '4bdec29f5cd6d1ed8f21c91571219cf8'

const Weather = (props) => {

    const fetchResults = () => {
        let url = `${baseURL}?lat=${props.latitude}&lon=${props.longitude}&appid=${key}`;
        
        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    const callFetch = (event) => {
        event.preventDefault();
        fetchResults();
    }

    return (
        <div>
            <Button onClick={(e) => {callFetch(e)}}>Get Weather</Button>
        </div>
    )
}

export default Weather
