import React, { useState, useEffect } from 'react';

// context
import CountriesContext from './countriesContext';

// packages
import axios from 'axios';

const CountriesState = props => {
  // set useState
  const [countries, setCountries] = useState([]);
  console.log(countries);

  // set url and headers variables
  const countriesURL = 'https://restcountries-v1.p.rapidapi.com/region/europe';
  const countriesHeaders = {
    headers: {
      'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
      'x-rapidapi-key': 'aefdb1087amshf6beea202a55a08p13d314jsn04e7876c6190'
    }
  };

  // useEffect hook for retrieving api data
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios.get(countriesURL, countriesHeaders);

        console.log(res.data);
        await setCountries(res.data);
      } catch (err) {}
    };
    getCountries();
  }, []); //add empty array as second parameter to prevent re-render loop

  return (
    // wrap context arround child components and pass down any state values
    <CountriesContext.Provider value={{ countries: countries }}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
