import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function SwiperSlider({
  children,
  centeredSlides,
  autoplay,
  mobileSlides,
  desktopSlides,
  marquee,
}) {
  const swiperRef = useRef(null);
  const arrowWrapperStyle = {
    position: "relative",
    marginTop:"32px",
    display: "flex",
    alignItems: "center",
    zIndex: 10,
    gap:"2px",
    width:"max-content"
  };
  
  const arrowButtonStyle = {
    width: "56px",
    height: "56px",
    border: "none",
    backgroundColor: "#ffffff",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={centeredSlides}
        modules={[Autoplay]}
        autoplay={
          autoplay
            ? {
                delay: marquee ? 0 : 2500,
                disableOnInteraction: false,
              }
            : false
        }
        speed={marquee ? 3000 : 700}
        loop
        breakpoints={{
          0: { slidesPerView: mobileSlides || "auto" },
          1204: { slidesPerView: desktopSlides || "auto" },
        }}
        spaceBetween={30}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      {/* <h1 className="text-3xl text-white font-bold underline">
      Hello world!
    </h1> */}
      {/* Custom Arrow Pagination */}
      <div style={arrowWrapperStyle}>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          style={arrowButtonStyle}
        >
          ←
        </button>


        <button
          onClick={() => swiperRef.current?.slideNext()}
          style={arrowButtonStyle}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default SwiperSlider;
