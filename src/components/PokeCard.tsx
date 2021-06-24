import pokemonTypes from "../helpers/typeColors";
const PokeCard = ({ ...pokemon }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg border-2  shadow-md h-80">
      <h1 className="text-2xl capitalize font-bold">{pokemon.pokemon.name}</h1>
      <p className="text-lg">#{pokemon.pokemon.id}</p>
      <img
        className="h-44 w-44"
        src={pokemon.pokemon.sprites.front_default}
        alt="POKEMON"
      />
      <div className="flex space-x-3">
        {pokemon.pokemon.types.map((type: any, i: any) => {
          return (
            <div
              key={i}
              style={{ backgroundColor: pokemonTypes[type.type.name] }}
              className="rounded-lg px-1 text-white text-xl capitalize"
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokeCard;
