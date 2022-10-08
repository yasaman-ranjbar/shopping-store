import women from "../../assets/images/woman-clothes.png";
import men from "../../assets/images/cotton-polo-shirt.png";
import jewelry from "../../assets/images/jewelry.png";
import electronic from "../../assets/images/responsive.png";
import { Link } from "react-router-dom";

const CategoryIcon = () => {
  const itemCategory = [
    { title: "electronics", icon: electronic },
    { title: "jewelery", icon: jewelry },
    { title: "men's clothing", icon: men },
    { title: "women's clothing", icon: women },
  ];
  return (
    <div className="bg-white md:px-44 flex flex-col justify-center items-center pb-20">
      <h1 className="py-20 text-2xl md:text-6xl font-bold">
        Browse <span className="text-blue-500">60000+</span> products
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 ">
        {itemCategory.map((item, index) => {
          return (
            <Link key={index} to={`/category/${item.title}`}>
              <div className="bg-gray-100 flex flex-col flex-wrap justify-center items-center rounded-2xl shadow-md hover:ring hover:ring-blue-400 hover:transition hover:ease-in-out hover:duration-700">
                <img src={item.icon} alt={item.title} className="py-6 px-8" />
                <div className="pb-4 font-bold text-lg">{item.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryIcon;
