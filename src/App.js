import React from 'react';
import './App.css';
import Form from './components/Form';
import Headings from './components/Headings';
import Weather from './components/Weather';

function App() {

  return (
    <div className="App">
      <Headings />
      <Form />
      <Weather />
    </div>
  );
}

export default App;
