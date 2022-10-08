import { useProducts } from "../../Providers/ProductsProvider";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const PapularProduct = () => {
  const product = useProducts();
  const filterPro = product.filter((item) => item.rating.rate >= 4);

  return (
    <div className="hidden md:block">
      <div className="py-2 font-bold text-xl">papular products</div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-2">
        {filterPro.map((item, index) => {
          return (
            <Link to={`/products/${item.id}`}>
              <div key={index} className="bg-gray-100 rounded-lg p-2 hover:scale-105 transition-all ease-in-out">
                <div className=" flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20"
                  />
                </div>
                <div className="flex items-center justify-center mt-2">
                  <ReactStars
                    value={item.rating.rate}
                    isHalf={true}
                    size={15}
                    edit={false}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PapularProduct;
{
  /* <div className="flex items-center">
                  <ReactStars
                    value={item.rating.rate}
                    isHalf={true}
                    size={20}
                    edit={false}
                  />
                </div> */
}
