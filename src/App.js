import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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

  return (
    <div className="App">
      {getLocation()}
      <p>{latitude}</p>
      <p>{longitude}</p>
    </div>
  );
}

export default App;
