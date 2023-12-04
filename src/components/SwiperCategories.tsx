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

function SwiperCategories() {

  const [thumbsSwiper, setThumbsSwiper]  = useState<SwiperType | null>(null);

  
  
  return (
    <div className='category-swiper-wrapper' id='categories'>
      <Swiper 
        modules={[ Thumbs ]}
        spaceBetween={10}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        className='category-swiper-thumb'
      >
        <SwiperSlide className='category-swiper-thumb__thumb' >Compras</SwiperSlide>
        <SwiperSlide className='category-swiper-thumb__thumb' >Comidas</SwiperSlide>
        <SwiperSlide className='category-swiper-thumb__thumb' >Juegos</SwiperSlide>
        <SwiperSlide className='category-swiper-thumb__thumb' >Viajes</SwiperSlide>
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
                        <h6>Shop</h6>
                        <p>La terapia de compras ahora es aún mejor.</p>
                        <p>De la A a la Z, disfruta de los descuentos más top de más de 150,000 minoristas en todo, desde salud y belleza hasta hogar y jardín.</p>
                        <button>compra y ahorra</button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-1.webp'/>
                      <button>compra y ahorra</button>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='category-swiper-slider'>
                  <div className='category-slide'>
                    <div className='category-slide__data-box'>
                        <h6>Ofertas Deliciosas</h6>
                        <p>
                          Súmate en la búsqueda para descubrir
                          sabores exquisitos en más de 50.000 lugares,
                          que te esperan con descuentos irresistibles.
                        </p>
                        <button>únite y disfrutá</button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-2.webp'/>
                      <button>únite y disfrutá</button>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='category-swiper-slider'>
                  <div className='category-slide'>
                    <div className='category-slide__data-box'>
                        <h6>Jugar</h6>
                        <p>Cada día es una nueva oportunidad para sumergirte en una aventura sin igual.</p>
                        <p>Ahorra en grande con descuentos en más de 50,000 parques temáticos, teatros, centros de diversión y un sinfín de opciones más.</p>
                        <button>divertite ahorrando</button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-3.webp'/>
                      <button>divertite ahorrando</button>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide
                className='category-swiper-slider'>
                  <div className='category-slide'>
                    <div className='category-slide__data-box'>
                        <h6>Viajar</h6>
                        <p>Embárcate en un viaje de ensueño a través de montañas y valles, o simplemente sumérgete en una cama de plumas esponjosas. </p>
                        <p>¡Aprovecha los descuentos en nuestros casi 1 millón de hoteles y asociaciones de viaje para que tu viaje sea aún más inolvidable!</p>
                        <button>empeza tu aventura</button>
                    </div>
                    <div className='category-slide__img-box'>
                      <img src='/img/png/slider-4.webp'/>
                      <button>empeza tu aventura</button>
                    </div>
                  </div>
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default SwiperCategories;