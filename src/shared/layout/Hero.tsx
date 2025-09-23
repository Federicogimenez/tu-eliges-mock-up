import { useNavigate } from "react-router-dom";
import { useAllyContext } from "../../hooks/useAllyContext";
import ScrollToSection from "../../hooks/useScrollSection"
import ButtonPrimary from "../components/ButtonPrimary"
import HeroCarousel from "../components/HeroCarousel";

interface HeroProps{
    ctaGradientFrom: string, 
    ctaGradientTo: string,
    border: string,
    shiny_color: string,
    hero_slides: string[],
}

export default function Hero({ ctaGradientFrom, ctaGradientTo, border, shiny_color, hero_slides }: HeroProps) {

    const { allyData, code, recurlyUrl } = useAllyContext();

    // console.log(allyData);
    
    const originalPrice = allyData.membership_anual_fee.toFixed(2)
    const perMonthPrice = Math.floor((allyData.new_price_after_discount * 100 )/12) / 100 ;
    const annualPrice = allyData.new_price_after_discount.toFixed(2) || originalPrice;

    const influencer_name = allyData.alliedName !== '' ? allyData.alliedName.split(" ")[0] : null 


    const navigate = useNavigate();

    function handleNavigateCalculator(){
        navigate('/')
        setTimeout(() => {
            ScrollToSection("calculator")
        }, 1000);
    }

    
  return (
    <section className="relative w-full h-full min-h-dvh pt-[25dvh] xl:pt-[30dvh]">

        <div className=" absolute inset-0 bg-black" />
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden opacity-40">
            <HeroCarousel slides={hero_slides} />
        </div>
        {/* <div className="absolute left-0 bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent from-50% to-white dark:to-black" /> */}

        <div className="flex flex-col justify-between items-center h-full gap-y-6 w-11/12 max-w-lg mx-auto">
            
            {
                allyData.isLoading ? 
                <>
                    <h3 className="subtitle text-center mb-4">
                        Loading Your Exclusive Discount
                    </h3>
                    <picture className="relative animate-bounce skeleton size-28 lg:size-40 rounded-full flex justify-center items-center border-2 border-blue-uchooseit overflow-hidden shadow-2xl-dark dark:shadow-2xl-light bg-white/90">
                        <img src="/icons/present.svg" alt="present" className="w-3/5 " />
                    </picture>
                </>
                :
                <>
                    <div className="relative w-fit flex flex-col justify-center items-center lg:flex-row gap-x-5 gap-y-5 ">
                        { allyData.alliedCompanyImg && allyData.alliedCuponCode !== "" ?
                            <picture className={`size-28 lg:hidden rounded-full border-2 p-1 overflow-hidden shadow-2xl-dark dark:shadow-2xl-light ${border}`}>
                                <img src={allyData.alliedCompanyImg} alt="afiliate" className="w-full h-full  object-top object-cover rounded-full " />
                            </picture>
                            : null
                        }

                        <div className="relative h-full w-fit flex flex-col items-center justify-center gap-y-4">
                            <h2 className="text-white text-xl sm:text-3xl text-center text-balance">
                                Join 
                                    {influencer_name ? 
                                        <strong className="mx-2">
                                            {influencer_name + "'s"}
                                        </strong>
                                    : " " } 
                                {/* <br /> */}
                                community of smart savers for as little as
                            </h2>
                            <p className={`relative w-fit text-nowrap font-semibold text-center text-4xl md:text-5xl xl:text-6xl  ${shiny_color} `}>
                                {perMonthPrice}/month
                            </p>
                            <p className="subtitle text-gray-100 dark:text-gray-300">
                                Billed annually at

                                { allyData.alliedCuponCode == "" ?
                                    <span className=" ml-2 text-green-800 dark:text-green-400">
                                        ${annualPrice}
                                    </span>
                                    :
                                    <>
                                        <span className="mx-2 text-red-400 dark:text-red-400 line-through">
                                            ${originalPrice}
                                        </span>
                                        <span className=" text-green-400 dark:text-green-400">
                                            ${annualPrice}
                                        </span>
                                    </>
                                }
                            </p>

                                {allyData.alliedCompanyImg && allyData.alliedCuponCode !== "" ?
                                    <picture className={`hidden lg:block size-52 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4/5 rounded-full border-2 p-1 overflow-hidden shadow-2xl-dark dark:shadow-2xl-light ${border}`}>
                                        <img src={allyData.alliedCompanyImg} alt="afiliate" className="w-full h-full  object-top object-cover rounded-full " />
                                    </picture>
                                    :null
                                }
                        </div>
                    </div>
                </> 
               
            }


            <div className="relative w-full h-full mt-[5dvh]" >
                <button onClick={handleNavigateCalculator} 
                        style={{animationDelay: '.3s'}}
                        className="group text-white relative flex justify-center items-center cursor-pointer w-fit px-2 font-semibold text-xl mx-auto mb-6 animate-appear-up
                                before:absolute before:rounded-full before:-bottom-0.5 before:w-1/3 before:bg-white before:h-0.5 before:left-1/2 before:-translate-x-1/2 before:transition-all hover:before:w-full active:before:w-full ">
                    <span className="transition-all group-hover:-translate-y-1/4">
                        Calculate
                        Savings
                    </span>
                    <img src="/icons/dollar.svg" 
                        alt="coin" 
                        className="w-7 ml-2 transition-all duration-700 group-hover:-translate-y-1/4 group-hover:rotate-y-[360deg] jump"/>
                </button>
                <div className="relative flex justify-center mx-auto animate-appear-up" style={{animationDelay: '.5s'}}>
                    <ButtonPrimary src={code ? code : recurlyUrl} customStyle="!max-w-lg" fromColor="from-black" fromColor2={ctaGradientFrom} toColor={ctaGradientTo} toColor2="to-black" />
                </div>
                <p className="text-sm text-gray-200 flex gap-x-2 justify-center items-center mt-4 animate-appear-up" style={{animationDelay: '.7s'}}>
                    <img src="/icons/stars.svg" alt="guarantee" className='w-[50px]' />
                    Trusted by families nationwide
                </p>
            </div>
        </div>
    </section>
  )
}
