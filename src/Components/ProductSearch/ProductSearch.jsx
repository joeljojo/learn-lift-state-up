import React, { useEffect, useState } from "react";
import "./ProductSearch.css";
import { filterProducts } from "../Utils/filterProducts";
import Search from "../Search/Search";
import Product from "../Product/Product";

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await filterProducts(query);
      setProducts(data);
    };
    fetchData();
  }, [query]);
  return (
    <div className="product-search">
      <Search onChange={handleSearch} />
      <div className="product-list">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductSearch;
