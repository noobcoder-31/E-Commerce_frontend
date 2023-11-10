import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DisplayError from "../DisplayError";
import Nothing from "../Nothing";
import LoadingComponent from "../LoadingComponent";
import deleteImage from "./../../images/delete.png";
import URL from "../Url";
import Swal from "sweetalert2";

export default function CartComponent() {
  //coupon state
  const [couponCode, setCouponCode] = useState(null);
  const applyCouponSubmit = (e) => {
    e.preventDefault();
    setCouponCode("");
  };
  let [finalTotal, SetfinalTotal] = useState(null);
  let [coupons, setCoupons] = useState(null);

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

  let Total = 0;
  let loading = false;
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  console.log(cartItems);

  const removeFromCart = (itemId) => {
    // Use filter to remove the item from the cart
    const updatedCart = cartItems.filter((item) => item !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const applyCopon = (e) => {
    e.preventDefault();
    if (couponCode === coupons.code) {
      let v = Total;
      Total = null;
      SetfinalTotal(v - (v * coupons?.discount) / 100);
      Swal.fire({
        icon: "success",
        title: "Congratulations",
        text: "Coupon Applied",
      });
    }
  };

  //check if coupon found
  // if (coupon) {
  //   sumTotalPrice =
  //     sumTotalPrice - (sumTotalPrice * coupon?.coupon?.discount) / 100;
  // }
  //price of the product - (price of product x discount/100)
  //remove cart  Item handler
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-t border-b border-gray-200"
            >
              {cartItems.length === 0 ? (
                <p className="font-semibold md:text-lg  text-sm m-4">
                  {" "}
                  your cart is Empty Add items to your cart
                </p>
              ) : (
                cartItems.map((product) => (
                  <li key={product._id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src={product.product.images[0]}
                        alt={product.product.name}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <p className="font-semibold text-gray-700 hover:text-gray-800 md:text-xl">
                                {product.product.name}
                              </p>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">{product.color}</p>

                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {product.size}
                            </p>
                          </div>
                          <p className="mt-1 text-sm font-medium text-gray-900 text-left">
                            ₹{product?.product?.price} x {product?.quantity} = ₹
                            {
                              (Total +=
                                product?.product?.price * product?.quantity)
                            }
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9 text-left">
                          <label className=" p-2 ">
                            Quantity : {product.quantity}
                          </label>

                          {/* remove */}
                          <div className="absolute top-0 right-0">
                            <button
                              onClick={() => removeFromCart(product)}
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Remove</span>
                              <img src={deleteImage}></img>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ₹ {Total}.00
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4"></div>
              {/* add coupon */}
              <dt className="flex items-center text-sm text-gray-600">
                <span>Have coupon code? </span>
              </dt>
              {/* errr */}
              {/* {error && <DisplayError message={error?.message} />}
              {isAdded && (
                <Nothing
                  message={`Congratulation you got ${coupon?.coupon?.discount} %`}
                />
              )} */}
              {/* success */}

              <form onSubmit={applyCopon}>
                <div className="mt-1">
                  <input
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    type="text"
                    className="block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Coupon Code"
                  />
                </div>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <button className="inline-flex  text-center mt-4 items-center rounded border border-transparent bg-green-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Apply coupon
                  </button>
                )}
              </form>

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className=" text-xl font-medium text-gray-900">
                  ₹ {finalTotal || Total}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link
                //  pass data to checkout page
                to="/order-payment"
                state={{
                  Total,
                }}
                className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Proceed to Checkout
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
