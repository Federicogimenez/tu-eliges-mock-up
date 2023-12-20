import { Swiper as SwiperType} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useState } from 'react';
import { useLanguageContext } from '../hooks/UseLanguageContext';

function SwiperCategories() {

  const [thumbsSwiper, setThumbsSwiper]  = useState<SwiperType | null>(null);
  const data = useLanguageContext();  
  
  return (
    <div className='category-swiper-wrapper'>
      <Swiper 
        modules={[ Thumbs ]}
        spaceBetween={10}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        className='category-swiper-thumb'
      >
        <SwiperSlide className='category-swiper-thumb__thumb' > { data["cat_thumbs_1"] } </SwiperSlide>
        <SwiperSlide className='category-swiper-thumb__thumb' > { data["cat_thumbs_2"] } </SwiperSlide>
        <SwiperSlide className='category-swiper-thumb__thumb' > { data["cat_thumbs_3"] } </SwiperSlide>
        <SwiperSlide className='category-swiper-thumb__thumb' > { data["cat_thumbs_4"] } </SwiperSlide>
      </Swiper>

      <Swiper
            modules={[Thumbs,  Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            autoplay
            effect={"fade"}
            watchSlidesProgress
          >
              <SwiperSlide
                className='category-swiper-slider'>
                  <div className='category-slide'>
                    <div className='category-slide__data-box'>
                        <h6> { data["cat_1_title"] } </h6>
                        <p> { data["cat_1_text_1"] } </p>
                        <p> { data["cat_1_text_2"] } </p>
                        <button> { data["cat_1_cta"] } </button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-1.webp'/>
                      <button> { data["cat_1_cta"] } </button>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='category-swiper-slider'>
                  <div className='category-slide'>
                    <div className='category-slide__data-box'>
                        <h6> { data["cat_2_title"] } </h6>
                        <p> {data["cat_2_text_1"]} </p>
                        <button> { data["cat_2_cta"] } </button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-2.webp'/>
                      <button> { data["cat_2_cta"] } </button>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='category-swiper-slider'>
                  <div className='category-slide'>
                    <div className='category-slide__data-box'>
                        <h6> { data["cat_3_title"] } </h6>
                        <p> { data["cat_3_text_1"] } </p>
                        <p> { data["cat_3_text_2"] } </p>
                        <button> { data["cat_3_cta"] } </button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-3.webp'/>
                      <button> { data["cat_3_cta"] } </button>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='category-swiper-slider'>
                  <div className='category-slide'>
                    <div className='category-slide__data-box'>
                        <h6> { data["cat_4_title"] } </h6>
                        <p> { data["cat_4_text_1"] } </p>
                        <p> { data["cat_4_text_2"] } </p>
                        <button> { data["cat_4_cta"] } </button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-4.webp'/>
                      <button> { data["cat_4_cta"] } </button>
                    </div>
                  </div>
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default SwiperCategories;