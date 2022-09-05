import { Card } from './components/Card';
import fetchData from './services/weather-api';

export function App() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(fetchData('fortaleza'));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="p-3 rounded-lg bg-blue-600 ml-3 text-white font-semibold"
        >
          Pesquisar
        </button>
      </form>

      <Card />
    </div>
  );
}
