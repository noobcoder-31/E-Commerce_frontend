// ProductList.js
import React, { useEffect, useState } from "react";
import imageApple from "./../../images/adidas.png";
import Product from "./Product";
import axios from "axios";
import URL from "./../Url";
import DisplayError from "../DisplayError";
import LoadingComponent from "../LoadingComponent";
import scrollToTop from "../Scroll";
import Nothing from "../Nothing";

const ShowProducts = (props) => {
  scrollToTop();
  const [products, setProducts] = useState(props.products);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className="bg-gray-100 py-10 md:py-10">
        {
          <div className="flex flex-col  bg-white md:w-2/3 w-5/6 mx-auto items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-auto gap-4">
              {products &&
                products.map((product, index) => (
                  <Product key={product.id} product={product} />
                ))}
            </div>
          </div>
        }
      </div>
      {products.size === 0 && <Nothing />}
    </>
  );
};

export default ShowProducts;
