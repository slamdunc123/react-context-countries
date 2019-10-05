import React, { useState, useContext, useEffect } from 'react';

// context
import CountriesContext from '../../context/countries/countriesContext';

const CountriesForm = () => {
  // set context
  const countriesContext = useContext(CountriesContext);
  const {
    addCountry,
    updateCountry,
    clearCurrentCountry,
    currentCountry
  } = countriesContext;

  useEffect(() => {
    if (currentCountry !== null) {
      setCountry(currentCountry);
    } else {
      setCountry({
        name: '',
        capital: ''
      });
    }
  }, [countriesContext, currentCountry]);

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
    if (currentCountry === null) {
      addCountry(country);
    } else {
      updateCountry(country);
    }
    clearCurrentCountry();
  };

  // TODO clearCurrentCountry

  return (
    <div>
      Countries Form
      <form onSubmit={onSubmit}>
        <h2>{currentCountry ? 'Edit Form' : 'Add Form'}</h2>
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
          <input type='submit' value={currentCountry ? 'Update' : 'Add'} />
        </div>
        <div>
          <button onClick=''></button>
        </div>
      </form>
    </div>
  );
};

export default CountriesForm;
