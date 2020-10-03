import React from "react";

function Form({ getWeather }) {
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="country" placeholder="Country" />
      <button className="fetch-btn">Fetch</button>
    </form>
  );
}

export default Form;
