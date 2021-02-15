import './App.css';
import React,{useState,useEffect} from 'react';
function App() {

  const [city,setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(()=>{
     const fetchApi =()=>{
       fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={YOUR API ID}`)
       .then(res=>res.json())
       .then(
         (result)=>{
           setWeatherData(result.main);
         }
       )
       
     }
    if(city!='')
    {
      fetchApi();
      console.log(weatherData)
    }
  },[city])

  const handleInputChange = (event)=>{
   setCity(event.target.value);
  }

  return (
    <>
    <div className="container box">
      <div className="div_input">
       <input type="search" className="input_type" placeholder="Enter City Name" onChange={handleInputChange} value={city}/>
       
       {
         weatherData!=null?
         <div className="div__info">
         <h2 className="location">
           <i className="fa fa-street-view">{city}</i>
         </h2>
         <h1 className="temp">{(weatherData.temp-273.15).toFixed(2)}<sup>o</sup>C</h1>
         <h3 className="temp_min_max">Min: {(weatherData.temp_min-273.15).toFixed(2)}<sup>o</sup>C| Max: {(weatherData.temp_max-273.15).toFixed(2)}<sup>o</sup>C</h3>
       </div>
       :
       <div className="div_info">
         <p className="error_msg">No Data Found</p>
         </div>
       }

       </div>
       </div>
    </>
  );
}

export default App;
