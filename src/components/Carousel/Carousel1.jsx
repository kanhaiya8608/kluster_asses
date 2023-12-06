import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide1 from '../Slides/Slide1';

import { storeData } from '../../data';

export default function Carousel1() {
  const [swiper, setSwiper] = useState(null);

  const handleMouseEnter = () => {
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper.autoplay.start();
    }
  };

  const featuredSlides = storeData.filter((item) => item.featured === 'Yes');

  return (
    <>

      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper2"
        slidesPerView={1}
        onSwiper={setSwiper}
      >
        {featuredSlides.map((item) => (
          <SwiperSlide
            key={item.productId}
            className='bslide1'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img className='' src={item.image} alt={item.name} />
            <Slide1
              name={item.name}
              description={item.description}
              position={`Author: ${item.author}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
