import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    title: "Exfoliated Vermiculite - 1 kg",
    price: 200,
    originalPrice: 240,
    discount: 18,
    image: "images/Organic.jpg",
  },
  {
    title: "Organic Fertilizer - 2 kg",
    price: 150,
    originalPrice: 180,
    discount: 17,
    image: "images/Organic.jpg",
  },
  {
    title: "Compost - 5 kg",
    price: 350,
    originalPrice: 400,
    discount: 13,
    image: "images/Organic.jpg",
  },
  {
    title: "Organic Fertilizer - 2 kg",
    price: 150,
    originalPrice: 180,
    discount: 17,
    image: "images/Organic.jpg",
  },
  {
    title: "Compost - 5 kg",
    price: 350,
    originalPrice: 400,
    discount: 13,
    image: "images/Organic.jpg",
  },
  {
    title: "Organic Fertilizer - 2 kg",
    price: 150,
    originalPrice: 180,
    discount: 17,
    image: "images/Organic.jpg",
  },
  {
    title: "Compost - 5 kg",
    price: 350,
    originalPrice: 400,
    discount: 13,
    image: "images/Organic.jpg",
  },
];
const ProductCards = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={3}
      navigation
      className=" rounded-lg shadow-lg p-4"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            image={product.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCards;