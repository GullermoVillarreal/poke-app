const PokeCard = ({ ...pokemon }) => {
  console.log(pokemon);

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg border-2  shadow-md h-80">
      <h1 className="text-2xl capitalize font-bold">{pokemon.pokemon.name}</h1>
      <p>#{pokemon.pokemon.id}</p>
      <img
        className="h-72"
        src={pokemon.pokemon.sprites.front_default}
        alt="POKEMON"
      />
      <div className="flex space-x-3">
        <p className="bg-green-400 rounded-lg px-1 ">grass</p>
        <p className="bg-purple-400 rounded-lg px-1 ">poison</p>
      </div>
    </div>
  );
};

export default PokeCard;
