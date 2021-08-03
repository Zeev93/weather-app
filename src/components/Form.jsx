import React from 'react';

const Form = ({weather, setWeather, searchWeather}) => {

  const {city, country} = weather

  const handleChange = e => {
    setWeather({
      ...weather,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    searchWeather()
  }

    return (
      <form className="form" onSubmit={handleSubmit}>
        <select
          name="country"
          id="country"
          className="w-full h-8 rounded-sm shadow-sm px-2"
          value={country}
          onChange={handleChange}
        >
            <option value="">-- Select a country --</option>          
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
        </select>
        <input
          type="text"
          className="w-full h-8 rounded-sm shadow-sm mt-5 px-2"
          placeholder="Select a city"
          value={city}
          name="city"
          id="city"
          onChange={handleChange}
        />

        <button
          className="duration-200 bg-gray-500 
                    hover:bg-gray-200 hover:text-gray-500 
                    p-2 text-gray-200 font-bold shadow-sm 
                    rounded-sm mt-10 w-full"
          type="submit"
        >
          Search
        </button>
      </form>
    );
}
 
export default Form;