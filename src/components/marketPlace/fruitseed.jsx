import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fruitseeds = [
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
const Fruitseed = () => {
  return (
   <>
   <div className="flex flex-row items-center justify-between text-white h-20 mb-2">
  <div className="font-semibold">Fruit seeds</div>
  <div className="font-semibold">View all</div>
</div>

    <Swiper
      modules={[Navigation]}
      slidesPerView={3}
      navigation
      
    >
      {fruitseeds.map((fruitseed, index) => (
        <SwiperSlide key={index}>
          <ProductCard
            title={fruitseed.title}
            price={fruitseed.price}
            originalPrice={fruitseed.originalPrice}
            discount={fruitseed.discount}
            image={fruitseed.image}
        />
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};
export default Fruitseed;