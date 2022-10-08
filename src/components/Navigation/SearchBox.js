import React, { useState, useTransition, useEffect } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";

const SearchBox = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setFilteredData(res.data);
    });
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    if (searchTerm === "") {
      setProducts(products);
      setShowResult(false);
    } else {
      const filterdProducts = filteredData.filter((p) =>
       p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filterdProducts);
      setShowResult(true);
    }

  };

  return (
    <div>
      <input
        className="w-full pl-5 h-10 focus:outline-none rounded-lg shadow-sm border-slate-300  focus:ring-1 focus:ring-gray-500 text-base"
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={searchHandler}
      />
      {showResult && (
        <div className="overflow-y-scroll h-60 absolute z-50 bg-gray-100 mt-3 shadow-lg rounded-lg mr-20 md:min-w-[600px] lg:min-w-[900px]">
          {products.map((item) => (
            <SearchResult key={item.id} resultData={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
