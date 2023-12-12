import React, { useState } from "react";
import Products from "./components/Products";
import ShoppingCar from "./components/ShoppingCar";
import ProductsObservers from "./observers/products";
import * as contexts from "./contexts";
import { useObserver } from "hermes-io";
const filterSelected = (collection) =>
  collection.filter((item) => item.selected);

const sneakerList = [
  {
    id: "1",
    name: "Jordan",
    description: "Air Jordan 3 Retro OG",
    price: "250",
    selected: false,
  },
  {
    id: "2",
    name: "Adidas Forum",
    description: "Bad Bunny Forum Buckle Low sneakers",
    price: "200",
    selected: false,
  },
];

function HermesIndex() {
  const [products, setProducts] = useState(sneakerList);

  const handleRemoveProduct = ({ value: product = {} }) => {
    product.selected = false;
    setProducts([...sneakerList]);
  };

  const handleAddProduct = ({ value: product = {} }) => {
    product.selected = true;
    setProducts([...sneakerList]);
  };

  useObserver({
    observer: ProductsObservers.add,
    listener: handleAddProduct,
    contexts: [contexts.products],
  });

  useObserver({
    observer: ProductsObservers.remove,
    listener: handleRemoveProduct,
    contexts: [contexts.shoppingCar, contexts.products],
  });

  return (
    <>
      <ShoppingCar data={filterSelected(products)} />
      <Products data={products} />
    </>
  );
}

export default HermesIndex;
