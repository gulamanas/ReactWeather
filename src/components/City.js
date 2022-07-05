import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Wind, Droplet } from 'react-feather';

function City({ fetchUrl }) {
    const [city, setCity] = useState({})
    // const [data,setData] = useState({})
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setCity(request.data)
            console.log(request.data)
            // return request;
        }
        fetchData()
    }, [fetchUrl])
    return (
        <>
            {
                Object.keys(city).length > 0 &&

                <div className='text-center my-3 mx-5 p-8 border-2 rounded-xl w-80 h-80'>
                    <div className='text-4xl font-semibold'>
                        {city.name}, {city.sys.country}
                    </div>
                    <div className='text-3xl font-medium mt-2' >
                        {city.weather[0].main}
                    </div>
                    <div className='text-4xl text-white my-1 font-bold rounded-xl px-8 py-4 bg-cyan-600'>
                        {city.main.temp} &#176;C
                    </div>
                    <div className='flex justify-around items-center'>
                        <span className='flex text-xl items-center'>
                            <Wind /> &nbsp; {city.wind.speed}km/h
                        </span>
                        <span className='flex text-xl items-center'>
                            <Droplet /> &nbsp; {city.main.humidity}
                        </span>
                    </div>
                    <div className='text-2xl font-medium mt-2'>
                        {city.main.temp_max} &#176;C / {city.main.temp_min} &#176;C
                    </div>
                </div>
            }
        </>

    )
}

export default City;

