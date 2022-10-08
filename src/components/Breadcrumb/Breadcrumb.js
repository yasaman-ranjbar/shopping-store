import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="bg-gray-100 text-gray-700 h-[235px] flex flex-col justify-center items-center">
      <h1 className="font-bold text-6xl">{title}</h1>
      <div className="flex items-center gap-3 mt-4">
        <Link to="/">
          <h4 className="text-gray-700 text-lg">Home</h4>
        </Link>
        <FaChevronRight className="text-gray-700 text-xs" />
        
        <Link to={`/${title}`}>
         <h4 className="text-gray-700 text-lg">{title}</h4>
        </Link>
        
      </div>
    </div>
  );
};

export default Breadcrumb;
