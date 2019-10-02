import React from 'react';

import './Country.css';

const Country = ({ country }) => {
  return (
    <div className='card'>
      <div className='card-item'>Name: {country.name}</div>
      <div className='card-item'>Population: {country.population}</div>
    </div>
  );
};

export default Country;
