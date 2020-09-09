import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './weather/Weather';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }
  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    
  }

  window.onload = getLocation();

  return (
    <div className="App">
      {/* {getLocation()} */}
      <Weather latitude={latitude} longitude={longitude}/>
    </div>
  );
}

export default App;
