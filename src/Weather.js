import React from "react";
import "./Weather.css"

export default function Weather() {
return (
 <div className="Weather">
  <form>
    <div className="row"> 
    <div className="col-9">
    <input type="search" placeholder="Enter a City ..." className="form-control"></input></div>
    <div className="col-3">
    <input type="submit" value="Search" className="btn btn-primary"></input></div></div>
  </form>
    <h1>New York</h1>
    <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
    </ul>
<div className="row">
<div className="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="Mostly Cloudy"/>
6°C</div>
<div className="col-6">
  <ul>
    <li>Precipitation: 53%</li>
    <li>Humidity: 87%</li>
    <li>Wind: 14 km/h</li>
  </ul>


</div>
</div>


 </div>
);


}