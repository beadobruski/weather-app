const KEY = 'a18ac759341b441d9eb20456223008';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);

  console.log(fetchResponse);
};

export default fetchData;
