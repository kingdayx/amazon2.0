import React from "react";
import axios from "axios";

const getProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res;
};

async function ProductFeed() {
  const products = await getProducts();

  console.log("products", products);
  return (
    <div>
      {/* ProductFeed
      {products.map((products) => {
        <p>{products.title} </p>;
      })} */}
    </div>
  );
}

export default ProductFeed;
