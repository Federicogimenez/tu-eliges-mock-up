import { useKeenSlider } from "keen-slider/react";
import { useCallback, useState } from "react";
import ReactPlayer from "react-player";
import LoaderSimple from "../../../shared/components/LoaderSimple";
// import type { AllyDataProps } from "../../../types/ally";
import ButtonPrimary from "../../../shared/components/ButtonPrimary";
import { useAllyContext } from "../../../hooks/useAllyContext";

const slides = [
  { youtubeShortId: "3hSU8lpr5rA", color: "--color-pink-entertainment", icon:'/icons/category/entertainment.png', category: 'Entertainment', preview: '/testimonials/entertainment-preview.png'  },
  { youtubeShortId: "x1DutiUd-Ys", color: "--color-yellow-dining", icon:'/icons/category/dining.png', category: 'Dining', preview: '/testimonials/dining-preview.png'  },
  { youtubeShortId: "ziX-IDfNlt4", color: "--color-blue-travel", icon:'/icons/category/travel.png', category: 'Travel', preview: '/testimonials/travel-preview.png'  },
  { youtubeShortId: "WBJKvF58G9g", color: "--color-purple-shop", icon:'/icons/category/shop.png', category: 'Shop', preview: '/testimonials/shop-preview.png' },
];

// interface TestimonialSectionProps{
//   ally_data: AllyDataProps
// }



export default function TestimonialSection() {

  const { code, recurlyUrl, allyData } = useAllyContext();
  

  const perMonthPrice = Math.floor((allyData.new_price_after_discount * 100 )/12) / 100 ;

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: {
      perView: 2,
      spacing: 0,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 0,
          origin: "center",
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const handleNextSlide = () => {
    instanceRef.current?.next();
  };

  const handleClick = useCallback(
    (idx: number) => {
      if (instanceRef.current) {
        // En modo loop, moveToIdx puede recibir relativeIndex + true
        instanceRef.current.moveToIdx(idx, true);
      }
    },
    [instanceRef]
  );

  return (
    <section className="relative mx-auto w-full lg:w-11/12 max-w-[1400px] h-full min-h-[90dvh]  bg-transparent py-20 flex flex-col  justify-center items-center gap-y-[0vh] gap-x-[2vw]">
      <div className="w-11/12 mb-10">
        <h1 className=" text-center heading-1">
          Happy Members, <br />Real Savings!
        </h1>
        <p className="my-3 subtitle text-center bg-clip-text text-transparent bg-gradient-to-b text-shadow-2xs to-gray-200 from-black dark:from-gray-300  max-w-2xl px-2 mx-auto">
          {/* See how real members save on travel, dining, entertainment and
          shopping every day. */}
          Join smart savers community for only
        </p>
        <p className={`relative w-full text-nowrap font-semibold text-center text-4xl md:text-5xl xl:text-6xl shiny-lightblue-text`}>
            {perMonthPrice}/month
        </p>
        {/* <div className='hidden relative w-full xl:flex justify-center mt-5'>
          <ButtonPrimary src={code ? code : recurlyUrl}  />
        </div> */}
      </div>

      <div className="w-full md:w-11/12 xl:w-7/12 mx-auto relative">

        <div ref={sliderRef} className="keen-slider relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`keen-slider__slide relative w-full before:transition-none  before:absolute before:inset-0 dark:before:bg-black/20 before:z-50 ${
                currentSlide === index ? "before:hidden" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div
              style={{ border: `2px solid var(${slide.color})` }}
              className={`relative rounded-[30px] overflow-hidden transition-all duration-300 ${
                  currentSlide === index ? "scale-100" : "scale-60"
              }`}
              >
                <div className="relative mx-auto  aspect-[9/16]">
                    <ReactPlayer
                      src={`https://www.youtube.com/shorts/${slide.youtubeShortId}`}
                      volume={0.3}
                      width="100%"
                      height="100%"
                      light={slide.preview}
                      style={{
                          position: "absolute",
                          top: 0,
                          left: '50%',
                          aspectRatio: "9/16",
                          objectFit: "cover",
                          maxWidth:'100%',
                          maxHeight:'100%',
                      }}
                      className="-translate-x-1/2"
                      fallback={<div className="h-[250px]">
                            <LoaderSimple />
                          </div>}
                      playing={currentSlide == index}
                      onEnded={handleNextSlide}
                      loop
                      config={{
                          youtube: {},
                      }}
                    />
                </div>
              </div>
              <div className={`mt-3 flex justify-center items-center gap-x-2 transition-all duration-300 ${currentSlide == index ? 'translate-y-0' : '-translate-y-[200%]'}`}>
                <img src={slide.icon} alt="icon" className="size-10 object-contain object-center " />
                <p className="text-center">{slide.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='relative w-full flex justify-center items-center mt-7'>
        <ButtonPrimary src={code ? code : recurlyUrl} customStyle="!w-11/12 !max-w-3xl" />
      </div>
    </section>
  );
}
