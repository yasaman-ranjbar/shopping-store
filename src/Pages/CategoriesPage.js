import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Layout from "../Layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Products from "../components/Products/Products";


const CategoriesPage = () => {

    const [loading, setLoading] = useState(false);
    const [category, setcategory] = useState([]);

   const { name } = useParams()

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/category/${name}`).then((res) => {
        setcategory(res.data);
          setLoading(false);
        });
      }, []);
    

    return ( <div>
        <Layout>
            <Breadcrumb title={name} />
            <div className="md:px-44 bg-white py-10">
            {loading ? (
                <div className="flex flex-wrap items-center justify-center">
                  <ReactLoading type="spinningBubbles" color="#3b82f6" />
                </div>
              ) : (
                <Products product={category}/>
              )}
            </div>
        </Layout>
    </div> );
}
 
export default CategoriesPage;