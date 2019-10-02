import React from 'react';
import CountriesState from './context/countries/CountriesState';
import './App.css';

import Countries from './components/pages/Countries';

function App() {
  return (
    <div className='App'>
      <CountriesState>
        <Countries />
      </CountriesState>
    </div>
  );
}

export default App;
