import SideBar from "./components/SideBarMenu";
import Search from "./components/Search";
import PokeCard from "./components/PokeCard";
import { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./services/pokemon";
function PokeApp() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function fetchData() {
      let response: any = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setNextUrl(response.previous);
      let pokemon: any = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data: any) => {
    let _pokemonData: any = await Promise.all(
      data.map(async (pokemon: any) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div className="flex max-h-screen">
      <SideBar />
      {loading ? (
        <h1>LAOADING...</h1>
      ) : (
        <div className=" w-full overflow-y-auto grid grid-cols-2 gap-4 mt-28 mb-6 mx-7 sm:grid-cols-3">
          {pokemonData.map((pokemon: any, i: any) => {
            return <PokeCard key={i} pokemon={pokemon} />;
          })}
        </div>
      )}
      <Search />
    </div>
  );
}

export default PokeApp;
