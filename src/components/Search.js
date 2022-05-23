import React from 'react'

const api_key = process.env.REACT_APP_API_KEY;
const base_url = 'https://api.openweathermap.org/data/3.0/';

function Search() {

    return (
        <div className='text-center mt-3'>
            <input type="text" name="" id="" placeholder='Search' className='px-3 py-3 bg-yellow-400 text-black placeholder:text-black rounded' />
            <button className='px-5 py-3 bg-red-500 rounded text-white' >Search</button>
        </div>
    )
}

export default Search