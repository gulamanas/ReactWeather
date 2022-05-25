let api_key = process.env.REACT_APP_API_KEY;
let base_url = 'https://api.openweathermap.org/data/2.5/';

const requests = {
    fetchCityDelhi: `${base_url}weather?q=delhi&units=metric&APPID=${api_key}`,
    fetchCityMumbai: `${base_url}weather?q=mumbai&units=metric&APPID=${api_key}`,
    fetchCityBangalore: `${base_url}weather?q=bangalore&units=metric&APPID=${api_key}`,
    fetchCityKolkata: `${base_url}weather?q=kolkata&units=metric&APPID=${api_key}`
}

export default requests;