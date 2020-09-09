import React, { useState } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';



const WeatherResults = (props) => {
    const [degrees, setDegrees] = useState('');
    
    // props.units === 'imperial' ? setDegrees('Fahrenheit') : setDegrees('Celsius');
    return (
        <Card>
            <CardTitle>Current Weather in {props.city}</CardTitle>
            <CardBody>
            <CardSubtitle>Current Temperature: {props.temperature}</CardSubtitle>
            <CardText>Sky Currently: {props.description}</CardText>
            <CardText>Temperature Feels Like: {props.feelsLike} {degrees}</CardText>
            <CardText>Max Temp: {props.maxTemp} {degrees}</CardText>
            <CardText>Min Temp: {props.minTemp} {degrees}</CardText>
            <CardText>Wind Speed: {props.windSpeed}</CardText>
            <CardText>Sun Rise: {props.sunRise}</CardText>
            <CardText>Sun Set: {props.sunSet}</CardText>
            </CardBody>
            
        </Card>
    )
}

export default WeatherResults
