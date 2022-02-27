import React from "react";

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h4>{product}</h4>
        <p>Product Price</p>
      </div>
    </div>
  );
};
