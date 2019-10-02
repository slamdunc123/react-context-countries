import React, { useContext } from 'react';
import CountriesContext from '../../context/countries/countriesContext';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);
  const { countries } = countriesContext;
  console.log(countries);
  return (
    <div>
      Coutries App
      {countries !== null ? (
        <div>
          {countries.length}
          {countries.map((country, index) => (
            <div key={index}>{country.name}</div>
          ))}
        </div>
      ) : (
        <div>no countries</div>
      )}
    </div>
  );
};

export default Countries;
