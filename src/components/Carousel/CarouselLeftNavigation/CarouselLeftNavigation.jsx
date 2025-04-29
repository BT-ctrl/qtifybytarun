import React from "react";
import { useSwiper } from "swiper/react";
import { ArrowBack } from "@mui/icons-material"; // Material-UI arrow back icon

function CarouselLeftNavigation() {
  const swiper = useSwiper(); // Get Swiper instance

  return (
    <button
      className="carousel-left-btn"
      onClick={() => swiper.slidePrev()} // Go to previous slide
    >
      <ArrowBack />
    </button>
  );
}

export default CarouselLeftNavigation;
