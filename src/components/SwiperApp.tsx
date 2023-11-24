import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function SwiperApp() {

    return (
    <div className='app-swiper-wrapper'>

      <Swiper
            modules={[ Autoplay ]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            loop={true}
          >
              <SwiperSlide
                className='app-swiper-slider'>
                  <div className='app-slide'>
                    <img src="/img/png/app.jpeg" alt="" />
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='app-swiper-slider'>
                  <div className='app-slide'>
                    <img src="/img/png/app.jpeg" alt="" />
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='app-swiper-slider'>
                  <div className='app-slide'>
                    <img src="/img/png/app.jpeg" alt="" />
                  </div>
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default SwiperApp;