import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function SwiperApp(data:string[]) {

    return (

      <Swiper
            modules={[ Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            effect='fade'
            loop={true}
          >
            {
              Object.values(data).map( (img, i)=>
                <SwiperSlide
                  key={i}
                  className='app-swiper-slider'>
                    <div className='app-slide'>
                      <img src={img} alt="" />
                    </div>
                </SwiperSlide>
              )
            }
        </Swiper>
  )
}

export default SwiperApp;