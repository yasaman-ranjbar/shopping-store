import Layout from "../../Layout/Layout";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SideBar from "../../components/SideBar/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import Products from "../../components/Products/Products.js";

const ProductsPage = () => {
  const route = useLocation();
  const location = route.pathname.slice(1);

  const [filterValue, setFilterValue] = useState("");
  const [product, setProduct] = useState([]);
  const [productFilter, setProductFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const filterHandler = (e) => {
    if (e.target.value === "") {
      setProduct(productFilter);
      setFilterValue(e.target.value);
    } else {
      const filterdProducts = productFilter.filter((p) => {
        return p.category.indexOf(e.target.value) >= 0;
      });
      setProduct(filterdProducts);
      setFilterValue(e.target.value);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
      setProductFilter(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Breadcrumb title={location} />
      <div className="grid grid-cols-12 gap-8 px-4 bg-white py-10">
        <div className="col-span-3 hidden md:block">
          <SideBar filterHandler={filterHandler} filterValue={filterValue} />
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="block md:hidden bg-gray-100 mb-5">
            <SideBar filterHandler={filterHandler} filterValue={filterValue} />
          </div>
          {loading ? (
            <div className="flex flex-wrap items-center justify-center">
              <ReactLoading type="spinningBubbles" color="#3b82f6" />
            </div>
          ) : (
            <Products product={product} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
