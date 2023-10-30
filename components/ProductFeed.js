import React from "react";
import axios from "axios";
import Product from "./Product";

const getProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

async function ProductFeed() {
  const products = await getProducts();

  console.log("products", products);
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        );
      })}
    </div>
  );
}

export default ProductFeed;
