import React, { useContext } from 'react';

// css
import './Countries.css';

// context
import CountriesContext from '../../context/countries/countriesContext';

// components
import Country from './Country';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);
  const { countries, addCountry, deleteCountry } = countriesContext;
  console.log(countries);
  addCountry();
  deleteCountry();
  return (
    <div>
      Coutries App
      {countries !== null ? (
        <div>
          {countries.length}
          {countries.map((country, index) => (
            <div className='countries-container' key={index}>
              <Country country={country} />
            </div>
          ))}
        </div>
      ) : (
        <div>no countries</div>
      )}
    </div>
  );
};

export default Countries;
