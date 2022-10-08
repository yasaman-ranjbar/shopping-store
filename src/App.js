import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import CheckOut from "./Pages/CheckOut";
import CartProvider from "./Providers/CartProvider";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./Providers/AuthProvider";
import Profile from "./Pages/Profile";
import ProductProvider from "./Providers/ProductsProvider";
import ProductsPage from "./Pages/ProductsPage";
import SingleProduct from "./Pages/ProductsPage/SingleProduct";
import CategoriesPage from "./Pages/CategoriesPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/shop" element={<ProductsPage />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/category/:name" element={<CategoriesPage />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
