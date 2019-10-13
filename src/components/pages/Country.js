import React, { useContext } from 'react';

import CountriesContext from '../../context/countries/countriesContext';

import './Country.scss';

const Country = ({ country }) => {
  // context
  const countriesContext = useContext(CountriesContext);
  const { deleteCountry, setCurrentCountry } = countriesContext;

  const { id } = country;

  // edit function
  const handleEdit = () => {
    console.log(country.name);
    setCurrentCountry(country);
  };

  // delete function
  const handleDelete = () => {
    // console.log(country.name, 'delete button clicked');
    deleteCountry(id);
  };

  return (
    <div className='card'>
      <div className='card-item'>Name: {country.name}</div>
      {/* <div className='card-item'>Population: {country.population}</div> */}
      <div className='card-item'>Capital: {country.capital}</div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Country;
