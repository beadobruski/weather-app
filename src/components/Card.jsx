export function Card({ data }) {
  const { location, current } = data;
  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-lg min-w-[220px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">
          {location.name}
        </span>
        <span className="text-slate-500 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-700 flex justify-center mt-2 mb-2">
        <span className="text-7xl ">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt={current.condition.text} />
        <span className="text-slate-700 font-bold">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}
