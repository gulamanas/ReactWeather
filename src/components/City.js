import axios from 'axios';
import React, { useState, useEffect } from 'react';

function City({ fetchUrl }) {
    const [city, setCity] = useState()
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
            {/* {(typeof city.main !== 'undefined') ? ( */}
            <div>
                <div >
                    {city.name}, {city.sys.country}
                </div>
                <div >
                    {city.weather[0].main}
                </div>
                <div >
                    {city.main.temp} &#176;C
                </div>
                <div>
                    <span>
                        {city.wind.speed}km/h
                    </span>
                    <span>
                        {city.main.humidity}
                    </span>
                </div>
                <div >
                    {city.main.temp_max} &#176;C / {city.main.temp_min} &#176;C
                </div>
            </div>

            {/* ) : ('')} */}
        </>
    )
}

export default City;