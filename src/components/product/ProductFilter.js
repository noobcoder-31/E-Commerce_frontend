import axios from "axios";
import URL from "../Url";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ShowProducts from "./ShowProduct";
import LoadingComponent from "../LoadingComponent";
import Nothing from "../Nothing";

export default function ProductFilter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldReloadProducts, setShouldReloadProducts] = useState(true); // New state

  // Get query string
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const brand = params.get("brand");

  // Filters
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");

  let productUrl = `${URL}/products`;

  if (category) {
    productUrl = `${productUrl}?category=${category}`;
  }

  if (brand) {
    productUrl = `${productUrl}${category ? "&" : "?"}brand=${brand}`;
  }

  if (size) {
    productUrl = `${productUrl}${category || brand ? "&" : "?"}size=${size}`;
  }

  if (price) {
    productUrl = `${productUrl}${
      category || brand || size ? "&" : "?"
    }price=${price}`;
  }

  if (color) {
    productUrl = `${productUrl}${
      category || brand || size || price ? "&" : "?"
    }color=${color?.name}`;
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(productUrl)
      .then((res) => {
        console.log(productUrl);
        console.log(res.data.products);
        setProducts(res.data.products);
        setLoading(() => !loading);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productUrl]);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : products && products.length > 0 ? (
        <ShowProducts products={products} />
      ) : (
        <Nothing />
      )}
    </>
  );
}
