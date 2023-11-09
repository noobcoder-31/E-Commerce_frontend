import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import URL from "../Url";
import cntImage from "./../../images/adidas.png";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Swal from "sweetalert2";
import LoadingComponent from "../LoadingComponent";
import { useNavigate } from "react-router-dom";

const ProductDescript = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const userData = JSON.parse(localStorage.getItem("userInformation"));
  console.log(userData);
  let islogin = userData ? true : false;

  const navigate = useNavigate();
  const handleRadioChange = (event) => {
    const radioButton = event.target;

    if (radioButton.checked) {
      radioButton.classList.add("bg-green-300");
    } else {
      radioButton.classList.remove("bg-green-300");
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const swalOptions1 = {
    customClass: {
      // Apply Tailwind CSS classes to the modal
      container: "fixed inset-0 flex items-center justify-center z-50",
      popup: "bg-white rounded-lg shadow-lg w-1/2 mr-4",
      title: "text-red-600 text-2xl font-bold",
      htmlContainer: "p-4", // Add padding to the modal content
      confirmButton:
        "bg-red-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-red-700",
      cancelButton:
        "bg-gray-300 text-gray-600 font-semibold rounded-md px-4 py-2 hover:bg-gray-400",
    },
    title: "Oops...!",
    text: "please Select a Color",
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
  };
  const swalOptions2 = {
    customClass: {
      // Apply Tailwind CSS classes to the modal
      container: "fixed inset-0 flex items-center justify-center z-50",
      popup: "bg-white rounded-lg shadow-lg w-1/2 mr-4",
      title: "text-red-600 text-2xl font-bold",
      htmlContainer: "p-4", // Add padding to the modal content
      confirmButton:
        "bg-red-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-red-700",
      cancelButton:
        "bg-gray-300 text-gray-600 font-semibold rounded-md px-4 py-2 hover:bg-gray-400",
    },
    title: "Oops...!",
    text: "Please Select a Size...",
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
  };

  const addToCartHandler = () => {
    if (!islogin) {
      Swal.fire({
        icon: "error",
        title: "Oops!!!",
        text: "You are Not Logged in",
      });
      navigate("/login");
      return;
    }
    if (selectedColor === "") {
      return Swal.fire(swalOptions1);
    }
    if (selectedSize === "") {
      return Swal.fire(swalOptions2);
    }
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
    //push to storage
    cartItems.push({
      product: product,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setQuantity(1);
    Swal.fire({
      icon: "success",
      title: "Congratulations",
      text: "Item Added SuccessfullY",
    });
  };

  useEffect(() => {
    axios
      .get(`${URL}/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data.product);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // Sample product data with color and size options
  const productData = {
    name: "Product Name",
    image: cntImage, // Replace with the actual product image
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [
      { rating: 4, review: "Great product!" },
      { rating: 5, review: "Love it!" },
      // Add more reviews
    ],
  };
  return isLoading ? (
    <LoadingComponent />
  ) : (
    <div className="bg-white">
      <main className="mx-auto mt-8 max-w-2xl px-4  pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold text-gray-900">
                {product?.name}
              </h1>
              <p className="text-xl font-medium text-gray-900">
                ₹ {product?.price}.00
              </p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {product?.reviews?.length > 0 ? product?.averageRating : 0}
                  {/* <span className="sr-only"> out of 5 stars</span> */}
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        +product?.averageRating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="ml-4 text-sm text-gray-300"
                ></div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {product?.totalReviews} total reviews
                  </a>
                </div>
              </div>
              {/* leave a review */}

              <div className="mt-4 text-left">
                {islogin ? (
                  <Link to={`/add-review/${product?._id}`}>
                    <h3 className="text-sm font-medium text-left text-blue-600">
                      Leave a review
                    </h3>
                  </Link>
                ) : (
                  <Link to={`/login`}>
                    <p className="text-sm font-medium text-left text-blue-600">
                      Please log in to leave a review
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-4  flow-root md:hidden">
            <div className="-my-2 ">
              <div className="relative box-content h-fit  overflow-x-auto py-2 w-full xl:overflow-visible">
                <div className="min-w-screen-xl  flex flex-no-wrap  md:overflow-y-auto space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-6 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {product?.images?.map((image) => (
                    <img
                      key={image.id}
                      src={image}
                      alt={image.imageAlt}
                      className={classNames(
                        image.primary
                          ? "lg:col-span-2 lg:row-span-2"
                          : "lg:block",
                        "rounded-lg width-wrap"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8  lg:col-span-7 lg:col-start-1 hidden md:block lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
              {product?.images?.map((image) => (
                <img
                  key={image.id}
                  src={image}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary ? "lg:col-span-2 lg:row-span-2" : " lg:block",
                    "rounded-lg width-wrap"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8  lg:col-span-5">
            <>
              {/* Color picker */}
              <div>
                <h2 className="text-sm md:text-lg font-semibold text-left text-gray-900">
                  Color
                </h2>
                <div className="flex items-center space-x-3">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                    <div className="mt-4 flex items-center space-x-3">
                      {product?.colors?.map((color) => (
                        <RadioGroup.Option
                          key={color}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color}
                          </RadioGroup.Label>
                          <span
                            style={{ backgroundColor: color }}
                            aria-hidden="true"
                            className={classNames(
                              "h-8 w-8 border border-black border-opacity-10 rounded-full"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm md:text-lg font-semibold text-gray-900">
                    Size
                  </h2>
                </div>
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-2"
                >
                  {/* Choose size */}
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product?.sizes?.map((size) => (
                      <RadioGroup.Option
                        key={size}
                        value={size}
                        className={({ active, checked }) => {
                          return classNames(
                            checked
                              ? "bg-indigo-600 border-transparent  text-white hover:bg-indigo-700"
                              : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                            "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer"
                          );
                        }}
                      >
                        <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <h1 className="text-sm font-semibold text-left mt-4 mb-4">Qty</h1>
              <div className="border border-gray-300 flex flex-row  w-fit h-fit px-5 md:px-4 py-1 ">
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

              {/* add to cart */}
              {product?.qtyLeft <= 0 ? (
                <button
                  style={{ cursor: "not-allowed" }}
                  disabled
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-whitefocus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              ) : (
                <button
                  onClick={() => addToCartHandler()}
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              )}
              {/* proceed to check */}
            </>
            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                {product?.description}
              </div>
            </div>
            <section
              aria-labelledby="reviews-heading"
              className="mt-16 sm:mt-24"
            >
              <h2
                id="reviews-heading"
                className="text-lg font-medium md:font-semibold text-gray-900"
              >
                Recent reviews
              </h2>

              <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
                {product?.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
                  >
                    <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                      <div className="flex items-center xl:col-span-1">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating
                                  ? "text-yellow-400"
                                  : "text-gray-200",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          {review.rating}
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                      </div>

                      <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0 text-left">
                        <h3 className="text-sm font-medium text-gray-900">
                          {review?.message}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                      <p className="font-medium text-gray-900">
                        {review.user?.fullname}
                      </p>
                      <time
                        dateTime={review.datetime}
                        className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                      >
                        {new Date(review.createdAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ProductDescript;
