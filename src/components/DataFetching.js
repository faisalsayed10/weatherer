import React, { useState } from "react";
import Form from "./Form";
import Headings from "./Headings";
import Weather from "./Weather";

function DataFetching() {
  const [data, setData] = useState({});

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const fetch_data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await fetch_data.json();
    if (!data.message) {
      setData({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      });
    } else {
      setData({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Not Found"
      });
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
              <Weather data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataFetching;
