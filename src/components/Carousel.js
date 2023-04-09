// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import 'swiper/swiper-bundle.min.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Carousel() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-auto">
        <Swiper
          spaceBetween={30}
          effect="fade"
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
          loop={true}
        >
          <SwiperSlide>
            <img src={require("../Resources/poster1.jpeg")} alt={"1"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../Resources/poster2.png")} alt={"2"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../Resources/poster3.jpeg")} alt={"3"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
