import React from 'react';
import CountriesState from './context/countries/CountriesState';
import './App.scss';

import CountriesForm from './components/paritals/CountriesForm';
import Countries from './components/pages/Countries';

function App() {
  return (
    <div className='App'>
      <CountriesState>
        <div>
          <CountriesForm />
        </div>
        <div>
          <Countries />
        </div>
      </CountriesState>
    </div>
  );
}

export default App;
