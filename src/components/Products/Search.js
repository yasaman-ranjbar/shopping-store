import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className=" md:bg-white flex gap-x-2 items-center bg-gray-100 py-1 px-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
      <FaSearch className="text-orange-500 " />
      <input type="text" placeholder="search" className="bg-gray-100 md:bg-white md:w-full md:py-2 px-3" />
    </div>
  );
};

export default Search;
