import image1 from "assets/images/slider/1.webp";
import image2 from "assets/images/slider/2.webp";
import image3 from "assets/images/slider/3.webp";
import image4 from "assets/images/slider/4.webp";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const DSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
