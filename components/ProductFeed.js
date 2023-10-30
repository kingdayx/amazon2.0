import React from "react";

function ProductFeed({ products }) {
  return (
    <div>
      ProductFeed
      {products?.map((products) => {
        <p>{products.title} </p>;
      })}
    </div>
  );
}

export default ProductFeed;
