import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo.js"
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false}); 
const [city, setCity] = useState(props.defaultCity)
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    date: new Date(response.data.dt * 1000),
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name
  });

}

function search() {
  const apiKey = "094780c710fa4efd669f0df8c3991927";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}



function handleSubmit(event) {
  event.preventDefault();
  search();
}


function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
  return (
    <div className="Weather">
     <form onSubmit={handleSubmit}>
       <div className="row"> 
           <div className="col-9">
              <input type="search" 
              placeholder="Enter a City ..." 
              className="form-control"
               autoFocus="on"
               onChange={handleCityChange}
               />
             </div>
             <div className="col-3">
               <input type="submit" 
               value="Search" 
               className="btn btn-primary w-100"
               />
             </div>
         </div>
        </form>

     <WeatherInfo data={weatherData}/>

    </div>
   );
   
} else {
  search();
return "Loading ...."
}
}