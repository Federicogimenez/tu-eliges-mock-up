import { useAllyContext } from "../../../hooks/useAllyContext";
import { useInlineVideo } from "../../../hooks/useInlineVideo";
import ScrollToSection from "../../../hooks/useScrollSection";
import ButtonPrimary from "../../../shared/components/ButtonPrimary";
import LazyLoadImage from "../../../shared/components/LazyLoadImage";

interface HeroVideoSectionProps{
    videoHero: string;
    videoHeroPreview: string;
}

export default function HeroVideoSection({videoHero, videoHeroPreview}: HeroVideoSectionProps) {

    const { code, recurlyUrl } = useAllyContext();

  const videoRef = useInlineVideo<HTMLVideoElement>();

    
  return (
    <section className="relative h-dvh min-h-[500px] w-full flex justify-center items-stretch">
        <div className="absolute inset-0 bg-black">
            <div className="relative w-full h-full opacity-50">
                <LazyLoadImage
                    src={videoHeroPreview}
                    alt={"preview"}
                    classnames={`absolute z-0 w-full h-full object-cover object-center`}
                />
                {/* <img src={videoHeroPreview} alt="preview" className="absolute z-0 w-full h-full object-cover object-center" /> */}
                <video 
                    className="relative z-50 w-full h-full object-cover object-center "
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    controls={false} 
                    >
                    <source src={videoHero} type="video/mp4" />
                    {/* <source src="img/video.webm" type="video/webm" /> */}
                    Your browser can't support this video
                </video>
            </div>
        </div>

        <div className="relative z-20 w-fit flex flex-col justify-between items-center pt-[30dvh] md:pt-[20dvh] xl:pt-[25dvh] pb-[2dvh] ">
      

            <div className="w-full text-white">
                <h1 className="  text-center  font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1] lg:pt-7  max-w-[600px] lg:max-w-[600px] xl:max-w-[720px] mb-5 ">
                    One Million Deals
                    <span className="block shiny-lightblue-text text-2xl sm:text-4xl md:text-4xl xl:text-5xl text-shadow-none mx-3">
                        One VIP Membership
                    </span> 
                </h1>
                <p className="w-[95%] text-center md:w-full text-xl md:text-2xl lg:text-3xl font-semibold  mb-1 mx-auto">
                    You Choose Where to Save
                </p>
                <p className="w-[80%] text-center md:w-full text-sm lg:text-lg mb-2 mx-auto">
                    Travel - Shop - Dining - Entertainment
                </p>
                <button onClick={()=>{ScrollToSection("calculator")}} className="group relative flex justify-center items-center cursor-pointer w-fit px-2 font-semibold text-xl mx-auto mt-5 before:absolute before:rounded-full before:-bottom-0.5 before:w-1/3 before:bg-white before:h-0.5 before:left-1/2 before:-translate-x-1/2 before:transition-all hover:before:w-full ">
                    <span className="transition-all group-hover:-translate-y-1/4">
                        Calculate
                        Savings
                    </span>
                    <img src="/icons/dollar.svg" alt="dollar" className="w-7 ml-2 transition-all group-hover:-translate-y-1/4" />
                </button>
            </div>

            <div className="relative w-full">
                <div className="relative flex justify-center mx-auto">
                    <ButtonPrimary src={code ? code : recurlyUrl} />
                </div>
                <p className="text-sm text-gray-200 flex gap-x-2 justify-center items-center mt-4">
                    <img src="/icons/stars.svg" alt="guarantee" className='w-[50px]' />
                    Trusted by families nationwide
                </p>
            </div>
        </div>
    </section>
  )
}
