import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayError from "../DisplayError";
import URL from "../Url";
import cartImage from "./../../images/cart.png";
import profileImage from "./../../images/profile.png";
import logoutImage from "./../../images/logout.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [coupons, setCoupons] = useState(null);
  const [cartItemSizes, setCartItemSizes] = useState(0);
  let navigate = useNavigate();
  let men = "men";
  const userData = JSON.parse(localStorage.getItem("userInformation"));
  let isLoggedIn = userData?.token ? true : false;

  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
  //   if (storedCartItems) {
  //     setCartItemSizes(storedCartItems);
  //   }
  // }, [cartItemSizes]);

  const getCoupons = () => {
    axios
      .get(`${URL}/coupons`)
      .then((response) => {
        setCoupons(response.data.coupons[0]);
      })
      .catch((err) => {
        DisplayError(err);
      });
  };
  useEffect(getCoupons, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLogoutClick = (e) => {
    localStorage.removeItem("userInformation");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <>
      {/* {!currentCoupon?.isExpired && ( */}
      <div className="bg-yellow-600">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p
            style={{ textAlign: "center", width: "100%" }}
            className="flex-1 text-center text-xs md:text-sm font-medium text-white lg:flex-none"
          >
            {coupons
              ? `${coupons.code}- ${coupons.discount}% , ${coupons.daysLeft}`
              : "No Flash sale at moment"}
          </p>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"></div>
        </div>
      </div>

      <div className="bg-gray-200 md:h-20 md:p-4 p-2 md:flex md:items-center md:justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="md:text-3xl text-2xl font-semibold text-center"
          >
            SHOPIFY
          </Link>
          {isLoggedIn ? (
            <div className="flex md:text-lg text-sm pl-14 md:pl-0 md:hidden ml-12 items-center">
              {/* Show cart image */}
              <Link
                to="/cart"
                className="p-2 md:p-4 md:pl-0 ml-4 md:ml-8 flex items-center"
              >
                <img
                  src={cartImage}
                  alt="Cart"
                  className="md:w-6 md:h-6 w-5 h-5"
                />
                <span className="ml-2"></span>
              </Link>
              <div className="bg-black h-8 w-px"></div>
              <Link to="/profile" className=" md:p-4 ml-4">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="md:w-6 md:h-6 w-5 h-5"
                />
              </Link>
              <button className="px-4 md:p-1" onClick={handleLogoutClick}>
                <img
                  src={logoutImage}
                  alt="Logout"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </button>
            </div>
          ) : (
            // Show Login/Register link when not logged in
            <Link to="/login" className="text-sm md:hidden  ml-24 md:text-lg ">
              Login/Register
            </Link>
          )}
        </div>
        <div className="flex items-center flex-row space-x-4 md:space-x-6 mt-2 md:mt-0">
          <Link to="/" className="text-sm md:text-lg">
            Home
          </Link>
          <Link key="trending" to="/products" className="text-sm md:text-lg">
            Trending
          </Link>
          <Link
            key="men"
            to="/products-filters?category=men"
            className="text-sm md:text-lg"
          >
            Men
          </Link>
          <Link
            key="women"
            to="/products-filters?category=women"
            className="text-sm md:text-lg"
          >
            Women
          </Link>
          <Link
            key="mobiles"
            to="/products-filters?category=mobiles"
            className="text-sm md:text-lg"
          >
            Mobiles
          </Link>
          <Link to="/products" className="text-sm md:text-lg">
            All
          </Link>

          {isLoggedIn ? (
            <div className=" md:text-lg text-sm hidden md:flex pl-14 md:pl-0 items-center">
              {/* Show cart image */}
              <Link
                to="/cart"
                className="p-2 md:p-4 md:pl-0 ml-4 md:ml-8 flex items-center"
              >
                <img
                  src={cartImage}
                  alt="Cart"
                  className="md:w-6 md:h-6 w-5 h-5"
                />
                <span className="ml-2"></span>
              </Link>
              <div className="bg-black h-8 w-px"></div>
              <Link to="/profile" className=" md:p-4 ml-4">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="md:w-6 md:h-6 w-5 h-5"
                />
              </Link>
              <button className="px-4 md:p-1" onClick={handleLogoutClick}>
                <img
                  src={logoutImage}
                  alt="Logout"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </button>
            </div>
          ) : (
            // Show Login/Register link when not logged in
            <Link to="/login" className="text-sm md:text-lg md:block hidden">
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
