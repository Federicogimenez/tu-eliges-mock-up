import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function SwiperApp() {

    return (
    <div className='app-swiper-wrapper'>

      <Swiper
            modules={[ Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            effect='fade'
            loop={true}
          >
              <SwiperSlide
                className='app-swiper-slider'>
                  <div className='app-slide'>
                    <img src="/img/png/app-1.webp" alt="" />
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='app-swiper-slider'>
                  <div className='app-slide'>
                    <img src="/img/png/app-2.webp" alt="" />
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='app-swiper-slider'>
                  <div className='app-slide'>
                    <img src="/img/png/app-3.webp" alt="" />
                  </div>
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default SwiperApp;