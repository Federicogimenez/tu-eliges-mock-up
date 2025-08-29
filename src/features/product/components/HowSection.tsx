
// const videoCode = 'mKPjMNH88uY'
import ReactPlayer from "react-player";

import iphone_frame from '/frame-iphone.png'
import { useState } from "react";

export default function HowSection() {

  const [videoPlay, setvideoPlay] = useState(false)  

  return (
      <section className='py-[8dvh] flex flex-col justify-center items-center text-white dark:text-black h-full min-h-[90dvh] w-full bg-gradient-to-r from-blue-gradient-start to-blue-uchooseit'>
        <div className="w-full h-full">
          <h2 className=' font-semibold text-4xl sm:text-5xl md:text-6xl text-center'>
            Become a member
            <span className='block text-3xl  lg:text-4xl'>
              Use your discounts in the App Web
            </span>
          </h2>
          <p className="text-center text-xl lg:text-xl my-[1vh] xl:mb-5">
            Discounts are always 1-tap away.
          </p>

          <div className="w-11/12 mx-auto flex justify-center gap-x-[5vw] items-stretch min-h-[300px] ">

            <div className="w-5/12 xl:w-1/2 flex flex-col justify-evenly items-end">
              <div className="flex justify-center gap-x-3 items-center ">
                <span className="font-finger-paint text-8xl">1</span>
                <p className="text-xl">Show &<br /> Redeem </p>
              </div>
              <div className="flex justify-center gap-x-3 items-center ">
                <span className="font-finger-paint text-8xl">2</span>
                <p className="text-xl">Choose a <br /> discount</p>
              </div>
              <div className="flex justify-center gap-x-3 items-center ">
                <span className="font-finger-paint text-8xl">3</span>
                <p className="text-xl">Save <br /> instantly </p>
              </div>
            </div>

            <div className="relative h-fit w-7/12 xl:w-1/2 flex items-center">

              <div className={`relative bg-black h-fit flex items-center justify-center w-fit rounded-[30px] overflow-hidden transition-all
                    after:absolute after:rounded-[28px] after:left-1/2 after:top-1/2 after:-translate-1/2 after:w-full after:h-full after:cursor-pointer after:z-40
                    ${videoPlay ? ' translate-x-[-40%] xl:translate-x-0 scale-[1.5] xl:scale-110 z-50' : 'scale-100'}
                    `}
                    onClick={()=>{setvideoPlay(!videoPlay)}}
              >
                <div className="absolute w-[95%] left-1/2 top-1/2 -translate-1/2 h-full flex justify-center items-center rounded-[40px]">
                  <ReactPlayer
                    src={`https://www.youtube.com/shorts/mKPjMNH88uY`}
                    volume={0.1}
                    width="85%"
                    height="85%"
                    // light={'/how-video-preview-2.png'}
                    style={{
                        position: "relative",
                        // top: 0,
                        // left: '50%',
                        aspectRatio: "9/16",
                        objectFit: "cover",
                        // borderRadius: '45px',
                        // overflow: 'hidden'
                        // maxWidth:'100%',
                        // maxHeight:'100%',
                    }}
                    // className="-translate-x-1/2"
                    // fallback={<LoaderSimple />}
                    playing={videoPlay}
                    // onEnded={handleNextSlide}
                    loop
                    config={{
                        youtube: {},
                    }}
                  />

                </div>
                <img src={iphone_frame} alt="iphone" className=' relative z-30 h-full max-h-[60dvh] xl:max-h-[70dvh] w-auto object-contain object-center max-w-[45dvw] ' />
              </div>
            </div>
          </div>
        </div>
            <a 
              href="https://uchooseitus.enjoymydeals.com/" 
              target="_blank"
              className="uppercase text-center mt-6 w-[90%] max-w-[500px] inline-block mb-8 text-lg px-8 py-4 rounded-full border-3 border-white dark:border-black transition-all font-semibold text-white dark:text-black hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black hover:-translate-y-1"
              >
                Discover More
            </a>
      </section>
  )
}
