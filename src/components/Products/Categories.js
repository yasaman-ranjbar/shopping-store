import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);

  

  return (
    <div className="mb-3 hidden md:block">
      <div className="py-2 font-bold text-xl">categories</div>
      {category.map((item , index) => {
        return (
          <Link key={index} to={`/category/${item}`}>
            <div className="text-base pl-4 mt-2 hover:text-blue-500">{item} </div>
          </Link>
        );  
      })}
    </div>
  );
};

export default Categories;
