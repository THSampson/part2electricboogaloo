import React, {useState} from 'react';
import './App.css';
import NasaImg from './components/nasaImg/NasaImg';

function App() {
  const [longitude, setLongitude]= useState();
  const [latitude, setLatitude]= useState();
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
    <div className="main" >
      <div className="mainDiv">
        <div className="nasaImg">
          <h3>Your Current Coordinates:</h3>
            <ul>
              <li>Longitude: {longitude}</li>
              <li>Latitude: {latitude}</li>
            </ul>
          {getLocation()}
          <NasaImg id="nasaImage" longitude={longitude} latitude={latitude}/>
        </div>
      </div>
    </div>
  );
}

export default App;



