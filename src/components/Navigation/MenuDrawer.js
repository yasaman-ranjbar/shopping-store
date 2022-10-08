import { AiTwotoneHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import {
  RiShoppingCart2Fill,
  RiShoppingBasketFill,
  RiLoginBoxLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const MenuDrawer = ({ isOpen, setIsOpen }) => {
  const menuItem = [
    { title: "Home", href: "/" , icon: <AiTwotoneHome /> },
    { title: "shop", href: "/shop" , icon: <RiShoppingCart2Fill /> },
    { title: "Cart", href: "/cart" , icon: <RiShoppingBasketFill /> },
    { title: "Login", href: "/login" , icon: <RiLoginBoxLine /> },
  ];
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-[250px] left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-[-300px] ")
        }
      >
        <article className="relative w-screen max-w-[250px] flex flex-col space-y-6 h-full">
          <header className="border-b-2 py-4 px-5 text-2xl">LOGO</header>
          <div className="">
            {menuItem.map((item) => {
              return (
                <div className="flex items-center gap-6 hover:text-blue-500 hover:bg-gray-100 px-5">
                  <div className="text-lg text-gray-600">{item.icon}</div>
                  <Link to={item.href}>
                    <div className="my-4 text-lg text-gray-600 ">
                      {item.title}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default MenuDrawer;
