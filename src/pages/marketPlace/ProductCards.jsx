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
    <div className="w-full mb-8">
      <div className="w-full text-white h-10 mb-2 text-xl">
        <div className="flex items-center justify-between px-4">
          <div className="font-semibold">Vegetables seeds</div>
          <div className="font-semibold">View all</div>
        </div>
        <div className="w-full h-[0.1rem] bg-white mt-1"></div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
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
    </div>
  );
};

export default ProductCards;