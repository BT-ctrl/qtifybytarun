import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

// Controls Component to reset Swiper to the first slide on data change
const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);  // Reset to first slide whenever the data changes
  }, [data, swiper]);  // Make sure swiper is also included in dependencies

  return <></>;
};

// Main Carousel Component
function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        {/* Controls to reset the carousel slide */}
        <Controls data={data} />

        {/* Navigation buttons */}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {/* Render each item dynamically */}
        {data.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
