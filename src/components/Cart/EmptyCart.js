import { BsFillCartXFill } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 bg-white py-20">
      <div className="ring-1 ring-blue-500 w-24 h-24 rounded-full p-2 flex justify-center items-center">
        <BsFillCartXFill className=" text-blue-500 text-5xl" />
      </div>

      <p className="text-2xl">YOUR CART IS EMPTY. LET'S CHANGE THAT!</p>
      <button className="bg-blue-500 text-white rounded-full px-6 py-2">
        Back to Shop
      </button>
    </div>
  );
};

export default EmptyCart;
