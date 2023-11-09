import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ShowProducts from "./components/product/ShowProduct";
import CartComponent from "./components/cart/CartComponent";
import ProductDescription from "./components/product/ProductDescript";
import { Routes, Route } from "react-router-dom";
import iphone from "./images/adidas.png";
import LoginRender from "./components/Login/Render";
import ProductFilter from "./components/product/ProductFilter";
import ProductDescript from "./components/product/ProductDescript";
import AddReview from "./components/Review/AddReview";
import Profile from "./components/Profile/Profile";

const product = {
  name: "Product",
  description: "Product description",
  price: 1233,
  image: iphone,
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductFilter />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/products-filters" element={<ProductFilter />} />
        <Route path="/add-review/:id" element={<AddReview />} />
        <Route exact path="/login" element={<LoginRender />} />

        <Route exact path="/products/:id" element={<ProductDescript />} />
        <Route exact path="/cart" element={<CartComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
