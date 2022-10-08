import Categories from "../Products/Categories";
import FilterProducts from "../Products/FilterProducts";
import PapularProduct from "../Products/PapularProducts";

const SideBar = ({ filterHandler, filterValue }) => {
  return (
    <div className="p-2">
      {/* filter */}
      <FilterProducts changeHandler={filterHandler} value={filterValue} />
      <hr className="hidden md:block my-6" />
      {/* category */}
      <Categories />
      <hr className="hidden md:block my-6" />
      {/* papular products */}
      <PapularProduct />
    </div>
  );
};

export default SideBar;
