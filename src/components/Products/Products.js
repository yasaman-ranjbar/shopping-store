import { useCart, useCartActions } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";

function checkInCart(cart, product) {
  return cart.find((item) => item.id === product.id);
}

const Products = ({ product }) => {
  const dispatch = useCartActions();
  const { cart } = useCart();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("product added to cart !", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {product.map((p, index) => {
        return (
          <div className="bg-white rounded-xl p-2 shadow-md flex flex-col justify-between h-auto hover:ring-blue-500 hover:ring-1" key={index}>
            <div>
              <Link to={`/products/${p.id}`}>
                <div className="mb-5 bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                  <img src={p.image} alt={p.image} className="w-40 h-40" />
                </div>
              </Link>
              {/* product description */}
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-slate-400 text-sm">{p.category}</span>
                <div className="flex items-center">
                  <ReactStars
                    value={p.rating.rate}
                    isHalf={true}
                    size={20}
                    edit={false}
                  />
                </div>
              </div>
              {/* product title */}
              <div className="text-slate-800 text-base font-bold mb-2">
                {p.title.slice(0,30)}
              </div>
              <div className="text-blue-600 font-bold text-center text-base mb-3">
                {p.price} $
              </div>
            </div>
            <div>
              <hr className="bg-blue-500" />
              <button
                onClick={() => addProductHandler(p)}
                className="text-center text-blue-500 w-full font-bold py-1"
              >
                {checkInCart(cart, p) ? "in cart" : "Add to Cart"}
                <ToastContainer />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
