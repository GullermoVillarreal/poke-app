import SideBar from "./components/SideBarMenu";
import Search from "./components/Search";
import PokeCard from "./components/PokeCard";
import { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./services/pokemon";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function PokeApp() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function fetchData() {
      let response: any = await getAllPokemon(initialUrl);
      console.log(response.next);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data: any = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    console.log(data.next);

    setPrevUrl(data.previous);
    setLoading(false);
  };
  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data: any = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

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

      <button
        className="absolute left-0 md:left-80  ml-1 top-2/4 opacity-50 bg-yellow-300 w-5 h-44 hover:bg-yellow-500 hover:opacity-100 rounded-full flex items-center justify-center"
        onClick={prev}
      >
        <AiOutlineArrowLeft size={28} />
      </button>
      <button
        className="absolute right-1 top-2/4 bg-red-300 w-5 h-44 hover:bg-red-500 rounded-full flex items-center justify-center"
        onClick={next}
      >
        <AiOutlineArrowRight size={28} />
      </button>

      {loading ? (
        <h1>LAOADING...</h1>
      ) : (
        <div className=" w-full overflow-y-auto grid gap-4 mt-28 mb-6 mx-7  sm:grid-cols-1 md:grid-cols-3">
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
