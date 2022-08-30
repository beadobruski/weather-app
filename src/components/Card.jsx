export function Card() {
  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-lg">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">
          Fortaleza
        </span>
        <span className="text-slate-500 text-sm font-medium">
          Ceará, Brasil
        </span>
      </div>

      <div className="font-bold text-slate-700 flex mt-2 mb-2">
        <span className="text-7xl ">37</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div className="text-center">
        <span className="block">ícone</span>
        <span className="text-slate-700 font-bold">Nublado</span>
      </div>
    </div>
  );
}
