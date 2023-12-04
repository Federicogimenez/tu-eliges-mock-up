import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperBrandBig(data: string[]) {

  return (
    <div className='big-brand-swiper-wrapper'>
        <Swiper
            modules={[ Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            effect='fade'
            autoplay={{delay: 5000, pauseOnMouseEnter: true}}
            loop={true}
            className='big-brand-swiper-wrapper__swiper'
            >
                {/* <SwiperSlide className='brand-slider'>
                    <img src={data[0]} alt="brands" />
                </SwiperSlide>
                <SwiperSlide className='brand-slider'>
                    <img src={data[1]} alt="brands" />
                </SwiperSlide>
                <SwiperSlide className='brand-slider'>
                    <img src={data[2]} alt="brands" />
                </SwiperSlide>
                <SwiperSlide className='brand-slider'>
                    <img src={data[3]} alt="brands" />
                </SwiperSlide> */}
                {
                    Object.values(data).map( (img, i) => 
                        <SwiperSlide className='big-brand-swiper-wrapper__slider'>
                            <img key={i} src={img} alt="brands" />
                        </SwiperSlide>
                    )
                }
        </Swiper>
    </div>
  )
}