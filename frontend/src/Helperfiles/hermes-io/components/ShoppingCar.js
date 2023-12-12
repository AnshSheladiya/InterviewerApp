// components/ShoppingCar.js
import React from "react";
import ProductsObservers from "../observers/products";
import { useObserver } from "hermes-io";
import * as contexts from "../contexts";

const listItemStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "5px",
};

const ShoppingCar = (props = {}) => {
  const { data = [] } = props;

  const handleRemoveProduct = (product = {}) => {
    ProductsObservers.remove.notify({
      value: product,
      context: contexts.shoppingCar,
    });
  };

  return (
    <div>
      <ul>
        {data.map((product = {}) => (
          <li key={product.id} style={listItemStyle}>
            <span>{product.name}</span>
            <p>{product.description}</p>
            <small>${product.price}</small>
            <button onClick={() => handleRemoveProduct(product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCar;
