import React, { useState, useEffect, useReducer } from 'react';

// context
import CountriesContext from './countriesContext';

// reducers
import countriesReducer from './countriesReducer';

// types
import { ADD_COUNTRY, DELETE_COUNTRY } from './countriesTypes';

// packages
import axios from 'axios';

const CountriesState = props => {
  const initialState = {
    countries: []
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);
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

  // add country
  const addCountry = async country => {
    // const res = await axios.post(countriesURL, country);
    // console.log(res.data);

    dispatch({
      type: ADD_COUNTRY,
      payload: 'Add action fired'
    });
  };

  // delete country
  const deleteCountry = async id => {
    dispatch({
      type: DELETE_COUNTRY,
      payload: 'Delete action fired'
    });
  };

  return (
    // wrap context arround child components and pass down any state values
    <CountriesContext.Provider
      value={{ countries: countries, addCountry, deleteCountry }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
