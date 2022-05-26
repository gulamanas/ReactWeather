import React from 'react';
import City from './components/City';
import requests from './components/request';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <div className='flex justify-between'>
        <City fetchUrl={requests.fetchCityDelhi} />
        <City fetchUrl={requests.fetchCityMumbai} />
        <City fetchUrl={requests.fetchCityBangalore} />
        <City fetchUrl={requests.fetchCityKolkata} />
      </div>
    </div>
  );
}

export default App;
