import React, {useState} from 'react';
let baseURL = 'https://developers.zomato.com/api/v2.1/geocode';



const RestApi = (props) => {
     const [results, setResults] = useState([]);

    const fetchRest = () => {
        let url = `${baseURL}` + `?lat=${props.latitude}` + `&lon=${props.longitude}`;
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'User-Key': '41ed1c125388a28cc6bdfec9d591478d' 
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    };

    const handleSubmit = (event) => {
        fetchRest();
        event.preventDefault();
    }
return(
<div className="main">
<div className="mainDiv">
    <button onClick={e => handleSubmit(e)}>Press Me!</button>
    {results}
</div>
</div>
)
}


export default RestApi;