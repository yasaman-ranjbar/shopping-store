import Swipper from "../common/Swipper";
import Layout from "../Layout/Layout";

import ProductSectionSlider from "../components/HomeComponents/ProductSectionSlider";
import CategoryIcon from "../components/HomeComponents/CategoryIcon";
import TopProducts from "../components/HomeComponents/TopProducts";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col">
          <Swipper />
          <CategoryIcon />
          <ProductSectionSlider />
          <TopProducts />
      </div>
    </Layout>
  );
};

export default HomePage;
