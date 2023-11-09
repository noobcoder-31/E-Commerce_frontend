import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import homeImage from "./../../images/Home.jpg";
import gucciImage from "./../../images/gucci.png";
import appleImage from "./../../images/apple.png";
import samsungImage from "./../../images/samsung.png";
import adidasImage from "./../../images/adidas.png";
import nikeImage from "./../../images/nike.png";
import zaraImage from "./../../images/zara.png";
import hmImage from "./../../images/hm.png";
import hpImage from "./../../images/hp.png";
import h2Image from "./../../images/home-2.jpg";
import payImage from "./../../images/paymentIcon.png";
import exchangeImage from "./../../images/exchange.png";
import returnImage from "./../../images/return.png";
import supportImage from "./../../images/support.png";
import rangeImage from "./../../images/products.png";
import reliableImage from "./../../images/delivery.png";
import homeImageMobile from "./../../images/HomeMobile.jpg";
import DisplayError from "../DisplayError";
import Homecategory from "./Homecategory";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");

  const brands = [
    { name: "apple", image: appleImage },
    { name: "samsung", image: samsungImage },
    { name: "nike", image: nikeImage },
    { name: "adidas", image: adidasImage },
    { name: "zara", image: zaraImage },
    { name: "gucci", image: gucciImage },
    { name: "hm", image: hmImage },
  ];

  const userData = JSON.parse(localStorage.getItem("userInformation"));
  let isLoggedIn = userData?.token ? true : false;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <>
      <div className="relative">
        {/* Use responsive images and conditional rendering */}
        <div className="relative">
          {/* Show the appropriate image based on screen size */}
          <img
            src={homeImage}
            alt="Your Image"
            className="w-full hidden md:block"
            load="lazy"
          />
          <img
            src={homeImageMobile}
            alt="Your Image (Mobile)"
            className="w-full block md:hidden"
            load="lazy"
          />
          {/* Center the text container on mobile devices */}
          <div className="absolute top-0 right-0 bottom-0 left-0 p-4 content-center md:p-8 mx-2 md:mx-40 my-8 md:my-40 text-gray-200 bg-black bg-opacity-20 flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-7xl font-bold">
              Welcome To Shopify
            </h1>
            {/* Conditional rendering for mobile overlay text with smaller font size */}
            <p className="text-sm md:text-lg my-4 hidden md:block">
              Discover a world of endless possibilities at our online store.
              From fashionable attire that keeps you on-trend to cutting-edge
              electronics that define the future, and top-tier beauty products
              that enhance your beauty regime, we offer it all.
            </p>
            <p className="text-xs md:text-base my-4 md:hidden">
              Shop the latest trends and cutting-edge electronics at Shopify.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-2 md:mx-60 my-2 md:my-10 items-center">
        <div className="text-sm md:text-xl font-bold">TOP PICKS:</div>
        <div className="flex flex-row justify-center mx-2 md:mx-60 my-2 md:my-10">
          <div className="w-1/4 text-center m-2 group relative">
            <img
              src={hpImage}
              alt="HP"
              className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
            />
          </div>
          <div className="w-1/4 text-center m-2 group relative">
            <Link to={`/products-filters?brand=${brands[0].name}`}>
              <img
                src={appleImage}
                alt="Apple"
                className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-1/4 text-center m-2 group relative">
            <Link to={`/products-filters?brand=${brands[1].name}`}>
              <img
                src={samsungImage}
                alt="Samsung"
                className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-1/4 text-center m-2 group relative">
            <Link to={`/products-filters?brand=${brands[2].name}`}>
              <img
                src={nikeImage}
                alt="Nike"
                className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center mx-2 md:mx-20 md:w-1/2">
          <div className="w-1/4 text-center m-2 group relative">
            <Link to={`/products-filters?brand=${brands[3].name}`}>
              <img
                src={adidasImage}
                alt="Adidas"
                className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-1/4 text-center m-2 group relative">
            <Link to={`/products-filters?brand=${brands[4].name}`}>
              <img
                src={zaraImage}
                alt="Zara"
                className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-1/4 text-center m-2 group relative">
            <Link to={`/products-filters?brand=${brands[5].name}`}>
              <img
                src={gucciImage}
                alt="Gucci"
                className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-1/4 text-center m-2 group relative">
            <Link to={`/products-filters?brand=${brands[6].name}`}>
              <img
                src={hmImage}
                alt="H&M"
                className="w-12 md:w-20 h-12 md:h-20 m-2 block transition-transform transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto md:mx-40 md:mb-40 mb-20 mt-20 p-4">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
        </div>
        <Homecategory />
      </div>
      <div className="bg-gray-100">
        <div className="bg-gray-100 flex flex-col md:ml-20   md:flex-row justify-center md:justify-evenly items-center md:h-96">
          <img
            src={h2Image}
            alt="H2"
            className="object-scale-down w-40 md:w-96 h-68 md:h-96 m-2"
          />

          <div className="w-60 md:w-auto text-center md:text-left md:ml-20 p-2">
            <h3 className="text-sky-600 text-base md:text-2xl">ABOUT US</h3>
            <h2 className="text-2xl md:text-5xl font-small mt-4 md:mt-5 mb-2 md:mb-3">
              Your One Stop Solution
            </h2>
            <p className="text-sm md:text-base">
              At Shopify, we bring the world’s best products right to your
              fingertips. Our online store offers a vast selection of
              high-quality clothing, cutting-edge electronics, and
              top-of-the-line beauty products, all backed by our hassle-free
              return policy and dependable delivery service. Whether you’re
              looking for the latest fashion trends or the newest tech gadgets,
              we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-gray-200 h-px rounded-sm mx-auto my-20 md:my-20"></div>
        <div className="text-center my-4 md:my-10">
          <h1 className="text-2xl md:text-5xl">Why Choose Shopify ?</h1>
          <p className="text-sm md:text-base w-full md:w-1/2 mx-auto mt-2 md:mt-4 mb-4 md:mb-6">
            Our website offers a wide range of services to ensure a convenient
            and reliable shopping experience. From secure payments to easy
            returns, we have you covered. Shop with confidence and enjoy the
            convenience of our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-0 mx-2 md:mx-4 my-2 md:my-8">
          <div className="md:border-r md:border-b border-black text-center flex flex-col items-center justify-center p-2">
            <img
              src={payImage}
              alt="Secure Payments"
              className="w-12 md:w-20"
            />
            <h2 className="text-sm md:text-xl font-bold">Secure Payments</h2>
            <p className="text-xs md:text-base mt-2 md:mt-4">
              We prioritize the security of your transactions and offer secure
              payment options. Your financial information is protected, and you
              can shop with peace of mind. Choose from various payment methods
              and complete your purchase hassle-free.
            </p>
          </div>
          <div className="md:border-l md:border-r md:border-b border-black text-center flex flex-col items-center justify-center p-4">
            <img
              src={returnImage}
              alt="Easy Returns"
              className="w-16 md:w-20"
            />
            <h2 className="text-sm md:text-xl font-bold">Easy Returns</h2>
            <p className="text-xs md:text-base mt-2 md:mt-4">
              Not satisfied with your purchase? No worries! Our easy return
              policy allows you to return products hassle-free. Simply initiate
              a return request, and our customer support team will guide you
              through the process.
            </p>
          </div>
          <div className="md:border-l md:border-b border-black text-center flex flex-col items-center justify-center p-4">
            <img
              src={supportImage}
              alt="24/7 Customer Support"
              className="w-16 md:w-20"
            />
            <h2 className="text-sm md:text-xl font-bold">
              24/7 Customer Support
            </h2>
            <p className="text-xs md:text-base mt-2 md:mt-4">
              We value your satisfaction and provide 24/7 customer support.
              Whether you have queries about products, orders, or any other
              concerns, our dedicated support team is here to assist you.
              Contact us anytime, and we'll be happy to help.
            </p>
          </div>
          <div className="md:border-r md:border-t border-black text-center flex flex-col items-center justify-center p-4">
            <img
              src={rangeImage}
              alt="Wide Range of Products"
              className="w-16 md:w-20"
            />
            <h2 className="text-sm md:text-xl font-bold">
              Wide Range of Products
            </h2>
            <p className="text-xs md:text-base mt-2 md:mt-4">
              Browse through our extensive collection of products, ranging from
              electronics to fashion, home decor, and more. We curate the best
              products from top brands and offer them to you at competitive
              prices. Find your perfect product now.
            </p>
          </div>
          <div className="md:border-r md:border-l md:border-t border-black text-center flex flex-col items-center justify-center p-4">
            <img
              src={reliableImage}
              alt="Fast and Reliable Delivery"
              className="w-16 md:w-20"
            />
            <h2 className="text-sm md:text-xl font-bold">
              Fast and Reliable Delivery
            </h2>
            <p className="text-xs md:text-base mt-2 md:mt-4">
              We understand the importance of timely delivery, and that's why we
              ensure fast and reliable shipping. Sit back and relax while we
              deliver your products to your doorstep. Experience hassle-free
              shopping with us.
            </p>
          </div>
          <div className="md:border-l md:border-t border-black text-center flex flex-col items-center justify-center p-4">
            <img
              src={exchangeImage}
              alt="Easy Returns and Exchange"
              className="w-16 md:w-20"
            />
            <h2 className="text-sm md:text-xl font-bold">
              Easy Returns and Exchange
            </h2>
            <p className="text-xs md:text-base mt-2 md:mt-4">
              Not satisfied with your purchase or need a different size? No
              worries! Our easy returns and exchanges policy allows you to
              return or exchange products hassle-free. Shop with confidence and
              enjoy our flexible return options.
            </p>
          </div>
        </div>
      </div>
      {!isLoggedIn && (
        <div className="text-center border mx-10 md:mx-20 border-black rounded-md my-4 md:my-20 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl">Sign Up to Start Shopping</h1>

          <div className="flex flex-col justify-center items-center mt-4 md:mt-6 space-y-4">
            <input
              type="text"
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your mail"
            />
            <Link
              to="/login"
              className="w-full md:w-1/3 px-4 md:px-6 py-2 md:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
