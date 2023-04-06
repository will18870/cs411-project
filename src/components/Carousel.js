// import React, { useRef, useState } from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {EffectFade, Navigation, Pagination} from "swiper";

export default function Carousel() {
    return (
        <>
            <div className={"carwrap"}>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                        clickable: true,

                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    loop={true}
                    className="carousel"
                >
                    <SwiperSlide>
                        <img src={require('../Resources/poster1.jpeg')} alt={"1"} />
                    </SwiperSlide>
                    <SwiperSlide><img src={require('../Resources/poster2.png')} alt={"1"}/>
                    </SwiperSlide>
                    <SwiperSlide><img src={require('../Resources/poster3.jpeg')} alt={"1"}/>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}
