import React, { useState } from 'react';

// const baseURL='https://api.nasa.gov/planetary/earth/imagery';
// const key ='1XFhPkw82Rx977TcYcUcCFHWqhQZFpwdvckZYbIq';

const NasaImg = (props) => {
    const [image, setImage]= useState();
        fetch (`https://api.nasa.gov/planetary/earth/assets?lon=${props.longitude}&lat=${props.latitude}&date=2019-01-09&&dim=0.20&api_key=1XFhPkw82Rx977TcYcUcCFHWqhQZFpwdvckZYbIq`)
        .then(res => res.json())
        .then(json => {console.log(json); setImage(json)})
        .catch(err => console.log(err))

    if (!image) return <div />

      return (
          <div>
             <img id="nasaImage"src={image.url} alt="img"/>
            </div>
    );

}
export default NasaImg;