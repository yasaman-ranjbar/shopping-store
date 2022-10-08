import Layout from "../../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCaretRight, FaCheckCircle } from "react-icons/fa";
import { BsHandbag, BsFillHandbagFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { useCart, useCartActions } from "../../Providers/CartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useCartActions();
  const { cart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const addHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const removeHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("product added to cart !", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <Layout>
      <div className="px-4 py-4 flex-col items-center justify-center">
        {/* product name */}
        <div className="w-full text-center my-4 font-bold text-sm md:text-xl">{product.title}</div>

        {/* bread crumb */}
        <div className="flex flex-wrap items-center gap-1 text-sm md:text-base mt-4 mb-8 bg-white p-2 md:py-3 md:px-10 rounded-lg shadow-md">
          <Link to="/shop">
            <span className="text-blue-500">products</span>
          </Link>
          <span>
            <FaCaretRight />
          </span>
          <Link to={`/category/${product.category}`}>
            <span className="text-blue-500">{product.category}</span>
          </Link>
          <span>
            <FaCaretRight />
          </span>
          <span className="text-blue-500">{product.title}</span>
        </div>

        {/* image */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full text-center h-auto bg-white py-6 px-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="m-auto md:p-10"
            />
          </div>

          <div className="my-4 md:my-0 bg-white py-3 px-4 md:px-10 md:py-10 rounded-lg shadow-md">
            <div className="text-sm md:text-lg text-gray-400 mb-3">{product.category}</div>
            <div className="flex  justify-between md:flex-col ">
              <div className="font-bold text-base md:text-2xl">{product.title}</div>
              <div className="text-blue-500 font-bold text-base md:text-lg">${product.price}</div>
              <hr className="w-1/6 mt-3 hidden md:block border-b-4" />
            </div>
            {/* <div>
          <ReactStars
                  value={ product.rating.rate }
                  isHalf={true}
                  size={20}
                  edit={false}
                />
          </div> */}
            <div>
              <div className="text-sm md:text-base text-slate-600 font-bold mt-3">
                Description
              </div>
              <div className="text-sm md:text-base text-slate-400 mt-2">
                {product.description}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              {cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-24 h-8 flex justify-around items-center border border-gray-400 rounded-full"
                  >
                    <button onClick={() => removeHandler(item)}> - </button>
                    <span> {item.quantity} </span>
                    <button onClick={() => addHandler(item)}> + </button>
                  </div>
                );
              })}

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" />
                <div>Free Shiping</div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start items-center mt-4 gap-2">
              <Link to="/cart">
                <div className="w-9 h-9 border border-blue-400 flex justify-center items-center rounded-lg">
                  {cart ? (
                    <BsFillHandbagFill className="text-blue-500" />
                  ) : (
                    <BsHandbag className="text-blue-500" />
                  )}
                </div>
              </Link>
              <button
                onClick={() => addProductHandler(product)}
                className="w-full md:w-1/3 bg-blue-500 text-white rounded-lg h-10 "
              >
                Order Now
                <ToastContainer />
              </button>
            </div>
          </div>
        </div>

        {/* seller-detail */}
      </div>
    </Layout>
  );
};

export default SingleProduct;
