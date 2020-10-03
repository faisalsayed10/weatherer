import React from "react";

function Form({ getWeather }) {
  return (
    <form className="form" autoComplete='off' onSubmit={getWeather}>
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="country" placeholder="Country" />
      <button>Fetch</button>
    </form>
  );
}

export default Form;
