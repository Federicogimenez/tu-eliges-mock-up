import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperBrandSmall(data: string[]) {

  return (
    <div className='small-brand-swiper-wrapper'>
        <Swiper
            modules={[ Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            effect='fade'
            autoplay={{delay: 2000, pauseOnMouseEnter: true}}
            loop={true}
            className='small-brand-swiper-wrapper__swiper'
            >
                {
                    Object.values(data).map( (img, i) => 
                        <SwiperSlide className='small-brand-swiper-wrapper__slider' key={`swiper-small${i}`}>
                            <img  src={img} alt={`brands ${i}`} loading='lazy'/>
                        </SwiperSlide>
                    )
                }
        </Swiper>
    </div>
  )
}
