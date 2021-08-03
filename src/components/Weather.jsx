import React, { useEffect } from 'react';


const Weather = ({temperature, city, country, alert}) => {

    let new_temp = {...temperature}

    const {message} = alert

    const { temp, feels_like, temp_min, temp_max } = new_temp

    return (
      <>
        <div className="w-1/2 px-3">
          { message !== "success" || message === "" && message !== "loading" ? 
            <p className="text-center font-bold text-gray-500"> {message === ""?  "Select a city" : message} </p>
          : 
            <div className="text-center text-gray-800">
              <h2 className="font-bold text-center">
                Weather in {city}, {country}
              </h2>
              <p>Temperatue: {temp} </p>
              <p>Feels Like: {feels_like} </p>
              <p>Temperatue Min: {temp_min} </p>
              <p>Temperatue Max: {temp_max} </p>
            </div>
          }
        </div>
      </>
    );
}
 
export default Weather;