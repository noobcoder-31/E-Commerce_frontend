import axios from "axios";
import URL from "../Url";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // Import useNavigate
import ShowProducts from "./ShowProduct";
import LoadingComponent from "../LoadingComponent";
import Nothing from "../Nothing";

export default function ProductFilter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldReloadProducts, setShouldReloadProducts] = useState(true);

  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const brand = params.get("brand");

  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();

    axios
      .get(`${URL}/products${category ? `?category=${category}` : ""}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        //console.log("category");
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          // Request was canceled, ignore the error
        } else {
          console.log(err);
        }
      });

    return () => source.cancel("Request canceled");
  }, [category]);

  useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();

    axios
      .get(`${URL}/products${brand ? `?brand=${brand}` : ""}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        //console.log("brand");
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          // Request was canceled, ignore the error
        } else {
          console.log(err);
        }
      });

    return () => source.cancel("Request canceled");
  }, [brand]);

  const navigateToCategory = (newCategory) => {
    setProducts(null);
    navigate(`/products-filters?category=${newCategory}`);
  };

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
