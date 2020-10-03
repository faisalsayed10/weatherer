import React, { useState } from "react";
import Form from "./components/Form";
import Headings from "./components/Headings";
import Weather from "./components/Weather";

function App() {
  // states
  const [temperature, setTemperature] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [humidity, setHumidity] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [error, setError] = useState(undefined);

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const fetch_data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await fetch_data.json();
    if (city && country) {
      console.log(data);
      setTemperature(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
    } else {
      setError("Not Found");
      setTemperature(undefined);
      setCity(undefined);
      setCountry(undefined);
      setHumidity(undefined);
      setDescription(undefined);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="row">
            <div className="col-5 title-container">
              <Headings />
            </div>
            <div className="col-7 form-container">
              <Form getWeather={getWeather} />
              <Weather
                temperature={temperature}
                city={city}
                country={country}
                humidity={humidity}
                description={description}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
