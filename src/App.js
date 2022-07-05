import React from 'react';
import City from './components/City';
import requests from './components/request';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <h2 className='text-center mt-12 font-semibold text-4xl'>Weather of Major Cities</h2>
      <div className='mt-5 flex flex-wrap justify-center'>
        <City fetchUrl={requests.fetchCityDelhi} />
        <City fetchUrl={requests.fetchCityMumbai} />
        <City fetchUrl={requests.fetchCityBangalore} />
        <City fetchUrl={requests.fetchCityKolkata} />
      </div>
    </div>
  );
}

export default App;
