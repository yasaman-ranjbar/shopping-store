import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SearchResult = ({ resultData }) => {
  return (
    <div className="flex flex-wrap items-center justify-between px-5 py-5 border-b-2">
      <div className="w-1/2 md:w-1/4 flex flex-wrap justify-center">
        <Link to={`/products/${resultData.id}`}>
          <img src={resultData.image} alt="" className="w-24 h-24" />
        </Link>
      </div>

      <div className="w-1/2 md:w-1/4 text-center">{resultData.title}</div>
      <div className="mt-3 md:mt-0 w-1/2 md:w-1/4 flex flex-wrap justify-center">
        <ReactStars
          value={resultData.rating.rate}
          isHalf={true}
          size={20}
          edit={false}
        />
      </div>
      <div className="mt-3 md:mt-0 w-1/2 md:w-1/4 text-center">
        {resultData.price}
      </div>
    </div>
  );
};

export default SearchResult;
