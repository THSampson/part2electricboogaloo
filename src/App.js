import React, {useState} from 'react';
import './App.css';
import Restaurants from './rest/Restaurants';

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
      longitude: {longitude} latitude: {latitude}
      <Restaurants longitude={longitude} latitude={latitude} />
      
      
    </div>
  );
}

export default App;
