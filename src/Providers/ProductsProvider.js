import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const productProviderContext = createContext();
const productProviderDispatcherContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <productProviderContext.Provider value={products}>
      <productProviderDispatcherContext.Provider value={setProducts}>
        {children}
      </productProviderDispatcherContext.Provider>
    </productProviderContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(productProviderContext);
export const useProductsActions = () =>
  useContext(productProviderDispatcherContext);
