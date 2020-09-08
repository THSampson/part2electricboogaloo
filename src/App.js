import React, {useState} from 'react';
import './App.css';
import NasaImg from './components/nasaImg/NasaImg';

function App() {
  const [longitude, setLongitude]= useState('');
  const [latitude, setLatitude]= useState('');
  const getLocation = () => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

  }


  return (
    <div >
       <h3>Your Current Coordinates:</h3>
      <ul>
        <li>Latitude: {latitude}</li>
        <li>Longitude: {longitude}</li>
      </ul>
      {getLocation()}
      <NasaImg longitude={longitude} latitude={latitude}/>

    </div>
  );
}

export default App;
