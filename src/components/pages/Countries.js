import React, { useContext, useEffect } from "react";

// scss
import "./Countries.scss";

// context
import CountriesContext from "../../context/countries/countriesContext";

// components
import Country from "./Country";

const Countries = () => {
  const countriesContext = useContext(CountriesContext);
  const { countries, getCountries } = countriesContext;
  console.log(countries);

  useEffect(() => {
    // useEffect like componentDidMount - runs the getPosts function from PostsState via postsContext
    getCountries();
    console.log(countries);
    // eslint-disable-next-line
  }, []);

  // addCountry();
  return (
    <div>
      Coutries App
      {countries !== null ? (
        <div className='countries-container'>
          {/* {countries.length} */}
          {countries.map((country, index) => (
            <div className='country-container' key={index}>
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
