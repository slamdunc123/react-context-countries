import React, { useState, useContext, useEffect } from 'react';

// context
import CountriesContext from '../../context/countries/countriesContext';

const CountriesForm = () => {
  // set context
  const countriesContext = useContext(CountriesContext);
  const { addCountry } = countriesContext;

  // set state
  const [country, setCountry] = useState({
    name: '',
    capital: ''
  });
  const { name, capital } = country;

  // form inputs onChange
  const onChange = e =>
    setCountry({
      ...country,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    addCountry(country);
  };

  return (
    <div>
      Countries Form
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='text'
            placeholder='name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='capital'
            name='capital'
            value={capital}
            onChange={onChange}
          />
        </div>
        <div>
          <input type='submit' />
        </div>
        <div>
          <button onClick=''></button>
        </div>
      </form>
    </div>
  );
};

export default CountriesForm;
