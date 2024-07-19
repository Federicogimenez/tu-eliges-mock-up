import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperBrandBig(data: string[]) {

  return (
    <div className='big-brand-swiper-wrapper'>
        <Swiper
            key={'swiper-bran-big'}
            modules={[ Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            effect='fade'
            autoplay={{delay: 4000, pauseOnMouseEnter: true}}
            loop={true}
            className='big-brand-swiper-wrapper__swiper'
            >
                {
                    Object.values(data).map( (img, i) => 
                        <SwiperSlide className='big-brand-swiper-wrapper__slider' key={`swiper-big${i}`}>
                            <img src={img} alt="brands" loading='lazy' />
                        </SwiperSlide>
                    )
                }
        </Swiper>
    </div>
  )
}
