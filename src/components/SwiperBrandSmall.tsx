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
            autoplay={{delay: 5000, pauseOnMouseEnter: true}}
            loop={true}
            className='small-brand-swiper-wrapper__swiper'
            >
                {
                    Object.values(data).map( (img, i) => 
                        <SwiperSlide className='small-brand-swiper-wrapper__slider'>
                            <img key={i} src={img} alt="brands" />
                        </SwiperSlide>
                    )
                }
        </Swiper>
    </div>
  )
}
