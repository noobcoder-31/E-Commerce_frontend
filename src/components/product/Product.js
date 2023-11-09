import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const product = props.product;
  const { name, price } = product;
  const imageSrc = product.images[0];
  const navigate = useNavigate();
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function getRandomDiscount() {
    return Math.floor(Math.random() * (55 - 20 + 1) + 20); // Generates a random number between 20 and 55, inclusive
  }

  const handleAddtoCart = (e) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="w-full  p-4">
      <div className="relative">
        <a href="#product-link">
          <Link to={{ pathname: `/products/${product?.id}` }}>
            <img
              src={imageSrc}
              alt={name}
              className="md:w-fit md:h-fit w-5/6 mx-auto object-cover rounded-t-lg"
            />
          </Link>
          {
            <div className="absolute top-2 right-2 border text-xs border-red-500 bg-transparent text-red-500 text-px md:text-xs font-semibold p-1 rounded-md">
              {getRandomDiscount()}% off
            </div>
          }
        </a>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-3">{name}</h2>
        <p className="text-gray-700">
          ₹{price}
          <span style={{ textDecoration: "line-through" }} className="ml-4">
            ₹XYZ
          </span>
        </p>
        <div>
          <div className=" ml-1 items-center justify-center">
            <div className="border border-gray-300 flex flex-row items-center px-5 md:px-4 py-1 w-fit mx-auto">
              <button
                onClick={decrementQuantity}
                className="text-gray-500 hover:text-black focus:outline-none"
              >
                -
              </button>
              <div className="border-r border-gray-300 h-6 mx-2"></div>
              <span className="mx-2">{quantity}</span>
              <div className="border-r border-gray-300 h-6 mx-2"></div>
              <button
                onClick={incrementQuantity}
                className="text-gray-500 hover:text-black focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <button
              className="bg-black text-white rounded-md py-2 px-4 text-sm mx-auto  hover:bg-white hover:text-black hover:border-black hover:border"
              onClick={handleAddtoCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
