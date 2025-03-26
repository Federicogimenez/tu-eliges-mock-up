import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperMultipleSlides = () => {

    const slides = [
        {
            brandUrl:'/img/png/brands/big/box-a/brand-1.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-a/brand-2.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-a/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-a/brand-4.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-a/brand-5.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-a/brand-6.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-b/brand-4.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-b/brand-5.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-b/brand-6.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-a/brand-1.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-a/brand-2.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-a/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-b/brand-1.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-b/brand-2.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-b/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-c/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-d/brand-1.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-d/brand-2.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-d/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-e/brand-1.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-e/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-f/brand-1.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-f/brand-2.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-f/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-g/brand-1.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-g/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/big/box-b/brand-3.webp',
        },
        {
            brandUrl:'/img/png/brands/small/box-h/brand-1.webp',
        },
    ]
  return (
    <div className='w-[95%] mx-auto'> 
            <Swiper
                modules={[ Autoplay ]}
                spaceBetween={10}
                autoplay={{delay: 1000}}
                speed={300}
                

                slidesPerView={5}
                watchSlidesProgress
                breakpoints={
{                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    // when window width is >= 640px
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 40
                    }}
                }
            >
                {
                    slides.map(({ brandUrl }, id )=>{
                        return <SwiperSlide
                            className='w-full p-2 border-[1px] border-black/40 rounded-xl bg-white' key={id}>
                                <img src={brandUrl} alt="brand" className='mx-auto w-[200px] h-[100px] object-contain object-center' />
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
  )
}

export default SwiperMultipleSlides