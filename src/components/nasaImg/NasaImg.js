import React, { useState } from 'react';
// import {Button} from 'reactstrap';
import "./Nasa.css";

const baseURL='https://api.nasa.gov/planetary/earth/imagery';
const key ='1XFhPkw82Rx977TcYcUcCFHWqhQZFpwdvckZYbIq';


const NasaImg = () => {
    const [lon, setLon]= useState('');
    const [lat, setLat]= useState('');
    const [date, setDate]= useState();


    const fetchResults = () => {
        let url= `${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${key}`;
        
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(results => console.log(results) )
        .catch(err => console.log(err))
        
    };
    const handleSubmit= (event) => {
        event.preventDefault();
        fetchResults();
    }

    return (
        <div className="main" >
            <div className="mainDiv">
            <form>
                <span>Enter a longitude: </span>
                <input type="float" name="lon" onChange={(e) => setLon(e.target.value)} /> 
                <br />
                <span>Enter a latitude: </span>
                <input type="float" name="lat"  onChange={(e) => setLat(e.target.value)} />
                <br />
                <span>Enter Date: </span>
                <input type="date" name="date" pattern="[0-9]{8}" onChange={(e) => setDate(e.target.value)} />
                <br />
                <button className="submit" onClick={e => handleSubmit(e)}>Submit search</button>
            </form>

            </div>
        </div>
    )
}

export default NasaImg;
