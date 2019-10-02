import React, { useState, useEffect } from 'react';
import CountriesContext from './countriesContext';

import axios from 'axios';

const CountriesState = props => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  const countriesURL = 'https://restcountries-v1.p.rapidapi.com/all';
  const countriesHeaders = {
    headers: {
      'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
      'x-rapidapi-key': 'aefdb1087amshf6beea202a55a08p13d314jsn04e7876c6190'
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios.get(countriesURL, countriesHeaders);

        console.log(res.data);
        await setCountries(res.data);
      } catch (err) {}
    };
    getCountries();
  }, []);
  return (
    <CountriesContext.Provider value={{ countries: countries }}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
