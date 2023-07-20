import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product-card">
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">&#36; {product.price}</p>
      </div>
    </div>
  );
};

export default Product;
