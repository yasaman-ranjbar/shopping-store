import React from 'react'
import Slide from './Slide';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";


const sliderData = [
  {
    title: 'Online Shopping',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: slide1,
    bgColor: '8d42a1'
  },
  {
    title: 'Best Seller Items',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: slide2,
    bgColor: 'e6e6e6',
  },
  {
    title: 'The New Lady',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: slide3,
    bgColor: 'edb834'
  },
]

export default function Slider() {

  return (
    <>
      <div className="h-[250px] md:h-[450px] ">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          loop={true}
          modules={[Autoplay]}
        >
          {
            sliderData.map((slide, index) => {
              return (
                <SwiperSlide key={index} >
                  <Slide title={slide.title} info={slide.info} bgImage={slide.bgImage} bgColor={slide.bgColor} />
                </SwiperSlide>
              )
            })
          }

        </Swiper>

      </div>
    </>
  )
}