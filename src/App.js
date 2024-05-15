import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (

    <div className="App">
      <div className="container">
    
      <Weather />
     <footer>
      This project was coded by{" "} <a href="https://responsive-portfolio-marilu.netlify.app/" target="_blank" rel="noreferrer">Marilu Chacon</a> and is  
      <a href="https://github.com/lilbxbori/weather-react-app-final" target="_blank" rel="noreferrer"> open-sourced on GitHub </a> {" "} and {" "} <a href="https://weather-react-app-final-mchacon.netlify.app/" target="_blank" rel="noreferrer"> hosted on Netlify </a>
    
    </footer> </div>
    </div>
  );
}

export default App;
