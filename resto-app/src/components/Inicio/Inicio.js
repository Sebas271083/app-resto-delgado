
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
                    src="../../imagen/carousel3.jpg"
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

        <div className="sm:flex" >
            <img className="m-5 rounded-xl" src="../imagen/carousel1.jpg" style={{width:"300px", boxShadow: "10px 5px 5px gray"}} alt="imagen" />
            <p className="m-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p className="m-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
    </>
  )
}

export default Inicio