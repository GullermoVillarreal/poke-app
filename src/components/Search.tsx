import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="absolute top-14 right-8 w-72 rounded-xl mt-3">
      <form action="">
        <input
          type="text"
          placeholder="Search"
          className="w-full border-2 rounded-lg outline-none"
        />
        <button className="absolute right-0 h-7  bg-blue-500 rounded-r-xl rounded-l-xl px-2">
          <BsSearch size={20} color="white" />
        </button>
      </form>
    </div>
  );
};

export default Search;
