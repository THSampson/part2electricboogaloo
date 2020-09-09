import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './weather/Weather';
import 'bootstrap/dist/css/bootstrap.css';
import NasaImg from './components/nasaImg/NasaImg';

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  window.onload = getLocation();

  return (
    <div className="App">
      <Weather latitude={latitude} longitude={longitude}/>
    <div className="main" >
      <div className="mainDiv">
        <div className="nasaImg">
          <h3>Your Current Coordinates:</h3>
            <ul>
              <li>Longitude: {longitude}</li>
              <li>Latitude: {latitude}</li>
            </ul>
          <NasaImg id="nasaImage" longitude={longitude} latitude={latitude}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;



