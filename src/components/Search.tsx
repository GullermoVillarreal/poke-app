import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex absolute top-5 right-11 w-72">
      <input
        type="text"
        placeholder="Search"
        className="rounded-3xl shadow-lg w-full h-8 p-2 border-2"
      />
    </div>
  );
};

export default Search;
