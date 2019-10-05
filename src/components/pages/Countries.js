import React, { useContext, useEffect } from 'react';

// css
import './Countries.css';

// context
import CountriesContext from '../../context/countries/countriesContext';

// components
import Country from './Country';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);
  const { countries, getCountries, addCountry } = countriesContext;
  console.log(countries);

  useEffect(() => {
    // useEffect like componentDidMount - runs the getPosts function from PostsState via postsContext
    getCountries();
    // eslint-disable-next-line
    console.log(countries);
  }, []);

  // addCountry();
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
