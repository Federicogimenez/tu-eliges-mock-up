import { useCallback, useEffect, useRef, useState } from "react";
import { useAllyContext } from "../../hooks/useAllyContext";
import ButtonPrimary from "../components/ButtonPrimary";
import { useKeenSlider } from "keen-slider/react";

// import super_discount from '/icons/super-discount.svg'


export interface HeroTrendyArticleProps{
  discount?: string;
  description: string;
  brandImg: string;
  articleImg?: string;
}

interface HeroTrendyProps{
    color: string;
    wrapperClass: string;
    title: string;
    subtitle: string;
    description: string;
    ctaGradientFrom: string, 
    ctaGradientTo: string,
    expiration?: string;
    articles: HeroTrendyArticleProps[] ;
}

export default function HeroTrendy(
  { 
    color,
    wrapperClass,
    title, 
    subtitle, 
    description, 
    // banner, 
    ctaGradientFrom, 
    ctaGradientTo,
    expiration,
    articles 
  }: HeroTrendyProps) {
    
    const { code, recurlyUrl } = useAllyContext();

    const [currentSlide, setCurrentSlide] = useState(0)
    const isPausedRef = useRef(false)
    const intervalRef = useRef<number | null>(null)
    
    const [sliderRef, instanceRef] = useKeenSlider({
      loop: true,
      initial: 0,
      // slideChanged(s) {
      //   setCurrentSlide(s.track.details.rel)
      // },
      slides: {
        perView: 1,
        origin: 'auto',
        spacing: 20,
      },
      breakpoints:{
        "(min-width: 600px)":{
          slides: {
            perView: 2,
            origin: 'auto',
            spacing: 20,
          }
        },
        "(min-width: 980px)":{
          slides: {
            perView: 3,
            origin: 'auto',
            spacing: 20,
          }
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created(s) {
        instanceRef.current = s
      },
    });
  
    // Gestión del autoplay separada del slider
    useEffect(() => {
      const startAutoplay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
          if (!isPausedRef.current && instanceRef.current) {
            instanceRef.current?.next();
          }
        }, 4000);
      }
  
      if (instanceRef.current) {
        startAutoplay()
      }
  
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, [instanceRef.current])
  
    const handleMouseEnter = useCallback(() => {
      isPausedRef.current = true
    }, [])
  
    const handleMouseLeave = useCallback(() => {
      isPausedRef.current = false
    }, [])

      const handleDotClick = useCallback((idx: number) => {
    isPausedRef.current = true
    instanceRef.current?.moveToIdx(idx)
    setTimeout(() => {
      isPausedRef.current = false
    }, 3000)
  }, [instanceRef])

    const dotsLength = instanceRef.current?.track.details.slides.length || 0;    


  return (
    <section className={`flex flex-col justify-center items-center w-full h-full py-8 ${wrapperClass}`} id="trendy">
        <div className="relative z-10 w-full flex flex-col justify-between items-center ">
     
            <h1 className="px-2 text-black text-center font-bold text-4xl sm:text-5xl md:text-5xl xl:text-7xl leading-[1] mb-6" 
              style={{color: `var(${color})`}}>
              {title}
              <span className="block font-semibold text-4xl sm:text-4xl md:text-5xl xl:text-5xl text-white ">
                {subtitle}
              </span>
            </h1>
            <p className="w-[80%] text-center md:w-full text-sm lg:text-lg xl:text-2xl max-w-lg text-white mb-6 mx-auto">
                {description}
            </p>
            {/* <picture className="relative mb-6 w-full h-fit">
              <img src={bannerImg} alt="banner" className="min-h-[200px] rounded-3xl w-full portrait:h-[40dvh] portrait:object-cover portrait:object-left-top landscape:h-auto object-center object-contain" />
            </picture> */}
            {/* <picture className="relative w-full h-[200px] xl:h-[300px] 2xl:h-[400px] flex justify-between items-stretch gap-x-3" style={{background: `var(${color})`}}>
              {
                banner.map(( img, i ) => {
                  return <img src={img} alt="banner" className={`w-1/3 md:w-1/4 h-full object-center object-cover ${i == (banner.length - 1) ? 'hidden md:block': '' }`}/>
                })
              }
            </picture> */}


            <div className="w-[95dvw] mx-auto my-[5vh]">
              <div
                ref={sliderRef}
                className="keen-slider w-full max-w-[1200px] max-h-[50dvh] mx-auto overflow-visible"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseEnter}
              >
                {
                  articles.map(( article, index )=>{
                    return <div key={index} className="keen-slider__slide w-full ">
                        <div className="relative min-h-[300px] text-black p-4 flex flex-col justify-evenly items-center w-full h-full overflow-hidden rounded-2xl bg-white/95" 
                          style={{border:`2px solid var(${color})`}}>
                          {
                            article.articleImg ? 
                              <picture className="relative grow w-full h-1/3 mb-2">
                                <img src={article.articleImg} alt="article" className="relative block mx-auto w-full h-full  object-contain" />
                              </picture>
                              : null
                          }
                          <picture className={`relative w-full flex justify-center items-center ${article.articleImg ? 'h-[50px]' : 'h-1/2' }`}>
                            <img src={article.brandImg} alt="brand" className={`relative block mx-auto w-2/3 h-full object-contain `} />
                          </picture>
                          <p className="text-center my-2">
                            {article.description}
                          </p>
                          <p className="text-center text-sm">
                            Reference image | T&Cs apply
                            <br />
                            {
                              expiration ? `Valid until: ${expiration}` : null
                            }
                          </p>

                          {article.discount ? 
                            <picture className="absolute left-0 top-0 -translate-1/4 size-32 flex justify-center items-center">
                              {/* <img src={super_discount} alt="star" className="relative w-full h-full object-contain object-center" 
                              style={{fill: `var(${color})`}} /> */}
                              <svg xmlns="http://www.w3.org/2000/svg" fill={`var(${color})`} width="75" zoomAndPan="magnify" viewBox="0 0 56.25 56.249997" height="75" version="1.2" className="relative w-full h-full object-contain object-center" ><defs><clipPath id="159d65b481"><path d="M 0 0 L 54.875 0 L 54.875 54.875 L 0 54.875 Z M 0 0 "/></clipPath><clipPath id="b7c47c990c"><path d="M 27.4375 0 L 32.761719 7.558594 L 41.15625 3.675781 L 41.988281 12.886719 L 51.199219 13.71875 L 47.3125 22.113281 L 54.875 27.4375 L 47.3125 32.761719 L 51.199219 41.15625 L 41.988281 41.988281 L 41.15625 51.199219 L 32.761719 47.3125 L 27.4375 54.875 L 22.113281 47.3125 L 13.71875 51.199219 L 12.886719 41.988281 L 3.675781 41.15625 L 7.558594 32.761719 L 0 27.4375 L 7.558594 22.113281 L 3.675781 13.71875 L 12.886719 12.886719 L 13.71875 3.675781 L 22.113281 7.558594 Z M 27.4375 0 "/></clipPath><clipPath id="9ee4481b3e"><path d="M 0 0 L 54.875 0 L 54.875 54.875 L 0 54.875 Z M 0 0 "/></clipPath><clipPath id="37647da754"><path d="M 27.4375 0 L 32.761719 7.558594 L 41.15625 3.675781 L 41.988281 12.886719 L 51.199219 13.71875 L 47.3125 22.113281 L 54.875 27.4375 L 47.3125 32.761719 L 51.199219 41.15625 L 41.988281 41.988281 L 41.15625 51.199219 L 32.761719 47.3125 L 27.4375 54.875 L 22.113281 47.3125 L 13.71875 51.199219 L 12.886719 41.988281 L 3.675781 41.15625 L 7.558594 32.761719 L 0 27.4375 L 7.558594 22.113281 L 3.675781 13.71875 L 12.886719 12.886719 L 13.71875 3.675781 L 22.113281 7.558594 Z M 27.4375 0 "/></clipPath><clipPath id="4ef1dfd94a"><rect x="0" width="55" y="0" height="55"/></clipPath></defs><g id="d71baf4bf6"><g clip-rule="nonzero" clip-path="url(#159d65b481)"><g clip-rule="nonzero" clip-path="url(#b7c47c990c)"><g transform="matrix(1,0,0,1,0,-0.000000000000010214)"><g clip-path="url(#4ef1dfd94a)"><g clip-rule="nonzero" clip-path="url(#9ee4481b3e)"><g clip-rule="nonzero" clip-path="url(#37647da754)"><path d="M 0 0 L 54.875 0 L 54.875 54.875 L 0 54.875 Z M 0 0 "/></g></g></g></g></g></g></g></svg>
                              <div className="absolute w-11/12 h-fit left-1/2 top-1/2 -translate-1/2 text-white leading-[1.2] text-lg text-center ">
                                Save <br />
                                {article.discount}
                              </div>
                            </picture>
                            : null  
                          }
                        </div>
                    </div>
                  })
                }
              </div>
              <div className="flex justify-center mt-6 gap-2">

                {Array.from({ length: dotsLength }, (_, idx) => (
                      <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
                          currentSlide === idx
                          ? ` w-5 mx-1 bg-black dark:bg-white `
                          : ' bg-gray-400 dark:to-white/50 '
                      }`}
                      ></button>
                  ))}
              </div>
            </div>
              
            <div className="flex justify-center mx-auto w-full">
                <ButtonPrimary src={code ? code : recurlyUrl} customStyle="!max-w-lg" fromColor="from-black" fromColor2={ctaGradientFrom} toColor={ctaGradientTo} toColor2="to-black" />
            </div>
        </div>
    </section>
  )
}
