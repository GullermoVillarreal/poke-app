import SideBar from "./components/SideBarMenu";
import Search from "./components/Search";
import PokeCard from "./components/PokeCard";

function PokeApp() {
  return (
    <div className="flex max-h-screen">
      <SideBar />
      <Search />
      <div className=" w-full overflow-y-auto grid grid-cols-2 gap-4 mt-28 mb-6 mx-7 sm:grid-cols-3">
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    </div>
  );
}

export default PokeApp;
