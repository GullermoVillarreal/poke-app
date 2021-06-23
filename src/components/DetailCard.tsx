const DetailCard = () => {
  return (
    <div className="shadow-lg border-2 w-3/12 px-11 py-14 font-semibold">
      <h1 className="font-bold text-4xl">Bulbasaur</h1>
      <div className="flex flex-row space-x-2 mt-4">
        <p className="rounded-3xl bg-green-300 px-2">tipo</p>
        <p className="rounded-3xl bg-red-300 px-2">elemento</p>
      </div>
      <div className="details--card space-y-4 mt-8">
        <div className="border-b-2 border-gray-300">
          <p>Pokedex Number</p>
          <p>1</p>
        </div>
        <div className="border-b-2 border-gray-300">
          <p>Height</p>
          <p>7</p>
        </div>
        <div className="border-b-2 border-gray-300">
          <p>Weight</p>
          <p>69</p>
        </div>
        <div className="border-b-2 border-gray-300">
          <p>Shiny</p>
          <p>imagen</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
