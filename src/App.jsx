
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Weather from "./components/Weather";

const API_KEY = "c7188d3a9f243a113f62eb011063161f";

function App() {

  const [weather, setWeather] = useState({
    city: "",
    country: ""
  })
  const {city, country} = weather;

  const [ alert, setAlert] = useState({
    message: ''
  })

  const[temperature, setTemperature] = useState({
    temp: '',
    feels_like: '',
    temp_min: '',
    temp_max: '',
  })

  useEffect ( () => {
     setAlert({
       message: 'Selecting...'
     })
  }, [city, country])

  const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city},${country}`;

  const searchWeather = async () => {
      await fetch(`${URL}`)
      .then(response => response.json())
      .then( data => {
        if (data.cod === "404"){
          setAlert({
            message: data.message
          })
        }else{
          setAlert({
            message: "success"
          })
          console.log(data);
          setTemperature({
            temperature,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
          })
        }
      })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="container m-auto">
        <div className="w-4/6 bg-blue-100 m-auto rounded-sm p-5 shadow-lg">
          <Header title="Weather App" />
          <div className="flex">
            <div className="w-1/2 px-3">
              <Form 
                weather={weather} 
                setWeather={setWeather}
                searchWeather={searchWeather}
              />
            </div>
              <Weather
                temperature={temperature}
                city={city}
                country={country}
                alert={alert}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
