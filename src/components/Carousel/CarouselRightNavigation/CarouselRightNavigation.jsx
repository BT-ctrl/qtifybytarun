import React from "react";
import { useSwiper } from "swiper/react";
import { ArrowForward } from "@mui/icons-material"; // Material-UI arrow forward icon

function CarouselRightNavigation() {
  const swiper = useSwiper(); // Get Swiper instance

  return (
    <button
      className="carousel-right-btn"
      onClick={() => swiper.slideNext()} // Go to next slide
    >
      <ArrowForward />
    </button>
  );
}

export default CarouselRightNavigation;
