import API_KEY from './apikey.js';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);

  return fetchResponse;
};

export default fetchData;
