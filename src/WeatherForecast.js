import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
function handleResponse(response) {
  console.log(response.data);
}


let apiKey = "094780c710fa4efd669f0df8c3991927";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
       <div className="WeatherForecast-day">Thu</div>
       <WeatherIcon code="01d" size={36}/>
        <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-Temperature-max">19°C</span>
        <span className="WeatherForecast-Temperature-min">10°C</span>
        </div>
      </div>
    </div>
  </div>
  );
}