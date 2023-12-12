// components/Products.js
import React from "react";
import ProductsObservers from "../observers/products";
import { useObserver } from "hermes-io";
import * as contexts from "../contexts";

const Products = (props = {}) => {
  const { data = [] } = props;

  const handleAddProduct = (product = {}) => {
    ProductsObservers.add.notify({
      value: product,
      context: contexts.products,
    });
  };

  return (
    <ul>
      {data.map((product = {}) => (
        <li key={product.id}>
          <span>{product.name}</span>
          <p>{product.description}</p>
          <small>${product.price}</small>
          <button
            disabled={product.selected}
            onClick={() => handleAddProduct(product)}
          >
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Products;
