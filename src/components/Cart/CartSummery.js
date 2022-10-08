import { Link } from "react-router-dom";

const CartSummery = ({ total }) => {
  return (
    <div>
      <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col">
          <span className="font-bold mb-2">Total:</span>
          <span className="mb-2">Discount:</span>
          <span className="font-bold mb-2">Net Price:</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold mb-2 text-blue-500">{total} $</span>
          <span className="mb-2">0 $</span>
          <span className="font-bold mb-2 text-blue-500">{total} $</span>
        </div>
      </div>
      <Link to="/signup?redirect=checkout">
        <button className="block text-white font-bold bg-blue-500 w-full py-2 mt-3 rounded-lg shadow-sm">
          Check out
        </button>
      </Link>
    </div>
  );
};

export default CartSummery;
