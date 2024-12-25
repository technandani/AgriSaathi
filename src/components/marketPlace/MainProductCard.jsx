import React from "react";
import CategoryFilter from "./CatageryFilter";
import ProductCards from "./ProductCards";

const MainProductCard = () => {
  return (
    <div className="container mx-auto p-4">
      <CategoryFilter />
      <ProductCards />
    </div>
  );
};

export default MainProductCard;
