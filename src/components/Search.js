// import axios from 'axios';
import React, { useState } from 'react';
import { Wind, Droplet } from 'react-feather';

let api_key = process.env.REACT_APP_API_KEY;
let base_url = 'https://api.openweathermap.org/data/2.5/';

function Search() {
    let [query, setQuery] = useState('');
    let [weather, setWeather] = useState({});

    let search = (e) => {
        if (e.key === 'Enter') {
            fetch(`${base_url}weather?q=${query}&units=metric&APPID=${api_key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                    // console.log(result)
                })
        }
    };

    return (
        <div className='inline-flex items-center flex-col w-full mt-7'>
            <input
                type="text"
                name=""
                id=""
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyDown={search}
                placeholder='Search city...'
                className='px-3 py-3 bg-yellow-400 text-black placeholder:text-black rounded w-1/2'
            />

            {(typeof weather.main !== 'undefined') ? (
                <div className='mt-8 text-center'>

                    <div className='text-4xl font-semibold'>
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className='text-3xl font-medium'>
                        {weather.weather[0].main}
                    </div>
                    <div className='text-7xl text-white my-1 font-bold rounded-xl px-8 py-4 bg-slate-600'>
                        {weather.main.temp} &#176;C
                    </div>
                    <div className='flex justify-around'>
                        <span className='flex'>
                            <Wind />&nbsp;{weather.wind.speed}km/h
                        </span>
                        <span className='flex'>
                            <Droplet />&nbsp;{weather.main.humidity}
                        </span>
                    </div>
                    <div className='text-3xl font-medium'>
                        {weather.main.temp_max} &#176;C / {weather.main.temp_min} &#176;C
                    </div>

                </div>
            ) : ('')}

        </div>
    )
}

export default Search;