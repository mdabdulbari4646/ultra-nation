import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import SelectedCountry from './components/SelectedCountry/SelectedCountry';

function App() {
 const [countries, setCountries] = useState([]);
 const [selectedCountry, setSelectedCountry] = useState([]);

 useEffect(()=>{
  fetch('https://restcountries.com/v2/all')
  .then(res => res.json())
  .then(data => setCountries(data))
  .catch(error => console.log(error))
 }, [])

const handleAddCountry = (country) =>{
  const newSelectedCountry = [...selectedCountry, country];
  setSelectedCountry(newSelectedCountry);
}

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country Added: {selectedCountry.length}</h4>
      <SelectedCountry selectedCountry={selectedCountry}></SelectedCountry>
      
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>) 
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
