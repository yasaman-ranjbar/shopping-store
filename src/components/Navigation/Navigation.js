import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import MenuDrawer from "./MenuDrawer";
import { useState } from "react";
import SearchBox from "./SearchBox";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userData = useAuth();
  const { cart } = useCart();

  const openMenuDrawer = () => {
    setIsOpen(true);
  };

  return (
    <div className="bg-white py-3 md:px-[85px]">
      <div className="flex item-center justify-between pl-4 text-lg gap-10">
        {/* menu */}
        <div className="flex items-center gap-10">
          <button onClick={openMenuDrawer}>
            <GrMenu  className="text-2xl" />
          </button>
          <Link to="/">
            <span className="md:text-3xl">LOGO</span>
          </Link>
        </div>

        {/* search */}
        <div className="grow border rounded-lg ">
          <SearchBox/>
        </div>

        <div className="flex items-center pr-4">
          {/* cart */}
          <div className="">
            <Link to="/cart" className="group m-2 flex items-center ">
              <AiOutlineShopping
                className="h-6 w-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="h-6 w-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500">
                {cart && cart.length}
              </span>
            </Link>
          </div>

          {/* login */}
          <div className="flex">
            <Link
              to={userData ? "/profile" : "/login"}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <button className="flex items-center">
                {userData ? (
                  `wellcom ${userData.name}  !`
                ) : (
                  <FiLogIn className="text-gray-600" />
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navigation;
