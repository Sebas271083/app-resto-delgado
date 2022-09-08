
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Inicio = () => {
  return (
    <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 500,
                disableOnInteraction: true,
            }}
   
        >
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    src="../imagen/carousel3.jpg"
                    alt="imageslide1"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    src="../imagen/carousel2.jpg"
                    alt="imageslide2"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    src="../imagen/carousel1.jpg"
                    alt="imageslide3"
                />
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Inicio