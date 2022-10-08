import ScrollToTop from "../common/ScrollToTop";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import TopBar from "../components/TopBar/TopBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Navigation />
      <>{children}</>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
