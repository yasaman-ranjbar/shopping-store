import { useEffect, useState } from "react";
import axios from "axios";

const FilterProducts = ({ changeHandler, value }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);

  return (
    <div className="md:mb-3">
      <select
        className="py-2 px-4 bg-gray-100 text-sm md:text-base w-full rounded-lg"
        onChange={changeHandler}
        value={value}
      >
        <option value="" className="text-sm md:text-base py-2">
          All Products
        </option>
        {category.map((c, index) => {
          return (
              <option
                value={c}
                key={index}
              >
                {c}
              </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterProducts;
