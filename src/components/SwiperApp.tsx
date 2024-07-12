import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';


interface swiperAppProps {
  img: string,
  text: string
}
function SwiperApp(sliders: swiperAppProps[]) {

    return (

      <Swiper
            modules={[ Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 4000, pauseOnMouseEnter: true}}
            effect='fade'
            loop={true}
            className='app-swiper-slider'
          >
            {
              Object.values(sliders).map( (slide, i)=>
                <SwiperSlide
                  key={i}
                  className='app-slider'>
                    <div className='app-slide'>
                      <div className='app-slide__img'>
                        <img src={slide.img} alt={`note ${i}`} loading='lazy' />
                      </div>
                      <p>{slide.text}</p>
                    </div>
                </SwiperSlide>
              )
            }
        </Swiper>
  )
}

export default SwiperApp;