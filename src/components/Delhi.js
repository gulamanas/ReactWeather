import axios from 'axios';
import React, { useState, useEffect } from 'react';
import requests from './request';

function Delhi() {
    const [delhi, setDelhi] = useState()
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchCityDelhi);
            setDelhi(request.data)
            console.log(request.data)
            // return request;
        }
        fetchData()
    }, [requests.fetchCityDelhi])

    return (
        <div>
            <div >
                {delhi.name}, {delhi.sys.country}
            </div>
            <div >
                {delhi.weather[0].main}
            </div>
            <div >
                {delhi.main.temp} &#176;C
            </div>
            <div>
                <span>
                    {delhi.wind.speed}km/h
                </span>
                <span>
                    {delhi.main.humidity}
                </span>
            </div>
            <div >
                {delhi.main.temp_max} &#176;C / {delhi.main.temp_min} &#176;C
            </div>
        </div>
    )
}

export default Delhi;