import React, {useState, useEffect} from 'react';
import { Row, Col} from 'reactstrap';
let baseURL = 'https://developers.zomato.com/api/v2.1/geocode';




const RestApi = (props) => {
     const [results, setResults] = useState([]);
     const [rest, setRest] = useState('');
     const [name, setName] = useState('');

        
        let url = `${baseURL}?lat=${props.latitude}&lon=${props.longitude}`;
                   fetch(url, {
                    method: 'GET',
                     headers: new Headers({
                    'Content-Type': 'application/json',
                    'User-Key': '41ed1c125388a28cc6bdfec9d591478d',
                                       
                })
         
            })
            .then(res => res.json())
            .then(data => {console.log(data); setResults(data); grabName(data)})
            .catch(err => console.log(err))



 function grabName(r) {
     console.log(r.nearby_restaurants[0].restaurant.name);
     return setName(r.nearby_restaurants[0].restaurant.name)
 }
 return(
   <div>
       <h1>Nearby Restaurant: {name}</h1>
   </div> 
   
    )
        }
     
        
    

export default RestApi;