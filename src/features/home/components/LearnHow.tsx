import { useState } from "react";
import ReactPlayer from "react-player";
import ButtonSecondary from "../../../shared/components/ButtonSecondary";


export default function LearnHow() {
  const [videoPlay, setvideoPlay] = useState(false);

  return (
    <div className="relative bg-white dark:bg-black w-full pt-16 pb-10 ">
      <h2 className=" heading-1 text-center">Learn how to save</h2>
      <p className="subtitle text-center text-gray-600 dark:text-gray-400 my-[1vh] xl:mb-5">
        Discounts are always 1-tap away.
      </p>

      <div className="flex relative h-fit justify-center items-center w-11/12 max-w-5xl mx-auto">
        <div
          className={`relative bg-black h-full flex items-center justify-center w-full transition-all rounded-3xl overflow-hidden
                      after:absolute after:rounded-[28px] after:left-1/2 after:top-1/2 after:-translate-1/2 after:w-full after:h-full after:cursor-pointer after:z-40
                      `}
          onClick={() => {
            setvideoPlay(!videoPlay);
          }}
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
                maxHeight: "80dvh",
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
      <div className="mt-8 w-11/12 mx-auto flex justify-center">
        <ButtonSecondary text={"Explore Platform"} redirect={"https://uchooseitus.enjoymydeals.com/"} anchor/>
      </div>
    </div>
  );
}
