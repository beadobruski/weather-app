import { useState } from 'react';
import { Card } from './components/Card';
import fetchData from './services/weather-api';
import initialData from './helpers/initialData';

export function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col items-center sm:justify-center p-4 w-full h-screen ">
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full flex p-4 sm:relative justify-center"
      >
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="p-3 rounded-lg bg-blue-600 ml-3 text-white font-semibold"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}
