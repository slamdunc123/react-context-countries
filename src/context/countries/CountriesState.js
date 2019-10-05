import React, { useReducer } from 'react';

// context
import CountriesContext from './countriesContext';

// reducers
import countriesReducer from './countriesReducer';

// types
import {
  GET_COUNTRIES,
  ADD_COUNTRY,
  DELETE_COUNTRY,
  UPDATE_COUNTRY,
  SET_CURRENT_COUNTRY
} from './countriesTypes';

// packages
import axios from 'axios';

const CountriesState = props => {
  const initialState = {
    countries: null,
    currentCountry: null
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);
  // set useState
  // const [countries, setCountries] = useState([]);
  // console.log(countries);

  // set url and headers variables
  // const countriesURL = 'https://restcountries-v1.p.rapidapi.com/region/europe';
  // const countriesHeaders = {
  //   headers: {
  //     'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
  //     'x-rapidapi-key': 'aefdb1087amshf6beea202a55a08p13d314jsn04e7876c6190'
  //   }
  // };

  const countriesURL = 'http://localhost:3100/countries';

  // get countries
  const getCountries = async () => {
    try {
      // const res = await axios.get(countriesURL, countriesHeaders);
      const res = await axios.get(countriesURL);

      console.log(res.data);
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data
      });
    } catch (err) {}
  };

  // add country
  const addCountry = async country => {
    const res = await axios.post(countriesURL, country);
    console.log(res.data);

    dispatch({
      type: ADD_COUNTRY,
      payload: res.data
    });
  };

  // delete country
  const deleteCountry = async id => {
    await axios.delete(countriesURL + '/' + id);
    dispatch({
      type: DELETE_COUNTRY,
      payload: id
    });
  };

  // update country
  const updateCountry = async country => {
    try {
      const res = await axios.put(countriesURL + '/' + country.id, country);
      console.log(res.data);

      dispatch({
        type: UPDATE_COUNTRY,
        payload: res.data
      });
    } catch (err) {}
  };

  // set current country
  const setCurrentCountry = country => {
    dispatch({
      type: SET_CURRENT_COUNTRY,
      payload: country
    });
  };

  return (
    // wrap context arround child components and pass down any state values
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        currentCountry: state.currentCountry,
        getCountries,
        addCountry,
        deleteCountry,
        updateCountry,
        setCurrentCountry
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
