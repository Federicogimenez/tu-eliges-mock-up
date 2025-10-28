
// const videoCode = 'mKPjMNH88uY'
import ReactPlayer from "react-player";

import iphone_frame from '/frame-iphone.png'
import { useState } from "react";
import ButtonSecondary from "../../../shared/components/ButtonSecondary";

export default function HowSection() {

  const [videoPlay, setvideoPlay] = useState(false)  

  return (
      <section className='pb-[8dvh] flex flex-col justify-center items-center  h-full min-h-[90dvh] w-full bg-gradient-to-b to-blue-gradient-start from-blue-gradient-end'>
        
          <h2 className=' heading-1 text-center'>
            Learn how to save
          </h2>
          <p className="subtitle text-center my-[1vh] xl:mb-5">
            Discounts are always 1-tap away.
          </p>

          <div className="lg:hidden relative h-fit  flex justify-center items-center">

                <div className={`relative bg-black h-fit flex items-center justify-center w-fit rounded-[30px] overflow-hidden transition-all
                      after:absolute after:rounded-[28px] after:left-1/2 after:top-1/2 after:-translate-1/2 after:w-full after:h-full after:cursor-pointer after:z-40
                      `}
                      onClick={()=>{setvideoPlay(!videoPlay)}}
                      >
                    {/* ${videoPlay ? ' translate-x-[-40%] xl:translate-x-0 scale-[1.5] xl:scale-110 z-50' : 'scale-100'} */}
                  <div className="absolute w-[93%] left-1/2 top-1/2 -translate-1/2 h-full flex justify-center items-center rounded-[40px]">
                    <ReactPlayer
                      src={`https://www.youtube.com/shorts/gJDiS9vW4uQ`}
                      volume={0.1}
                      width="83%"
                      height="85%"
                      title=""
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
          <div className="hidden lg:flex relative h-fit justify-center items-center w-10/12 max-w-5xl mx-auto">

                <div className={`relative bg-black h-full flex items-center justify-center w-full transition-all rounded-3xl overflow-hidden
                      after:absolute after:rounded-[28px] after:left-1/2 after:top-1/2 after:-translate-1/2 after:w-full after:h-full after:cursor-pointer after:z-40
                      `}
                      onClick={()=>{setvideoPlay(!videoPlay)}}
                      >
                    {/* ${videoPlay ? ' translate-x-[-40%] xl:translate-x-0 scale-[1.5] xl:scale-110 z-50' : 'scale-100'} */}
                  <div className="relative w-full h-full flex justify-center items-center ">
                    <ReactPlayer
                      src={`https://www.youtube.com/watch?v=_QtXvDbpVcQ`}
                      volume={0.1}
                      width="100%"
                      height="100%"
                      style={{
                          position: "relative",
                          // top: 0,
                          // left: '50%',
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          // borderRadius: '45px',
                          // overflow: 'hidden'
                          // maxWidth:'100%',
                          maxHeight:'80dvh',
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
                </div>
          </div>
      
      <div className="mt-10 w-11/12 mx-auto flex justify-center">
        <ButtonSecondary text={"Discover More"} anchor redirect="https://uchooseitus.enjoymydeals.com/" classnames="bg-white border-white !text-black" />
      </div>

      

        {/* <ButtonTertiary text={"Discover More"} redirect="https://uchooseitus.enjoymydeals.com/" anchor /> */}
      </section>
  )
}
