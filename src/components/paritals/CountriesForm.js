import React, { useState, useContext, useEffect } from 'react';

// context
import CountriesContext from '../../context/countries/countriesContext';

// scss
import './CountriesForm.scss';

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

  const clearForm = () => {
    clearCurrentCountry();
  };

  return (
    <div className='form-container'>
      Countries Form
      <form onSubmit={onSubmit}>
        <h2>{currentCountry ? 'Edit Form' : 'Add Form'}</h2>
        <div className='form-input'>
          <input
            type='text'
            placeholder='name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-input'>
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
      </form>
      <div>
        <button onClick={clearForm}>Clear</button>
      </div>
    </div>
  );
};

export default CountriesForm;
