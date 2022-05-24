// import axios from 'axios';
import React, { useState } from 'react'

const api_key = process.env.REACT_APP_API_KEY;
const base_url = 'https://api.openweathermap.org/data/2.5/';

function Search() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})

    const search = (e) => {
        if (e.key === 'Enter') {
            fetch(`${base_url}weather?q=${query}&units=metric&APPID=${api_key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                    console.log(result)
                })
        }
    }

    return (
        <div className='text-center mt-3'>
            <input
                type="text"
                name=""
                id=""
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyDown={search}
                placeholder='Search'
                className='px-3 py-3 bg-yellow-400 text-black placeholder:text-black rounded'
            />
            <button className='px-5 py-3 bg-red-500 rounded text-white' type='submit'>Search</button>

            {(typeof weather.main != 'undefined') ? (
                <div >

                    <div>{weather.name}, {weather.sys.country}</div>
                    <div>{weather.main.temp}</div>
                    <div>{weather.weather[0].main}</div>
                    <div>{weather.main.temp_max} / {weather.main.temp_min}</div>

                </div>
            ) : ('')}



        </div>
    )
}

export default Search