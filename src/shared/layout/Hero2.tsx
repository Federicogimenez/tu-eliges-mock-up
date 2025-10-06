import { useAllyContext } from "../../hooks/useAllyContext";
import ButtonPrimary from "../components/ButtonPrimary"
import HeroCarousel from "../components/HeroCarousel";

import icon_dining from '/icons/category/dining.png'
import icon_travel from '/icons/category/travel.png'
import icon_shop from '/icons/category/shop.png'
import icon_entertainment from '/icons/category/entertainment.png'

interface HeroProps{
    categoryName: string,
    ctaGradientFrom: string, 
    ctaGradientTo: string,
    border: string,
    shiny_color: string,
    hero_slides: string[],
}

export default function Hero2({ categoryName, ctaGradientFrom, ctaGradientTo, border, shiny_color, hero_slides }: HeroProps) {

    const { allyData, code, recurlyUrl } = useAllyContext();

    // console.log(allyData);
    
    const originalPrice = allyData.membership_anual_fee.toFixed(2)
    const annualPrice = allyData.new_price_after_discount.toFixed(2) || originalPrice;

    const influencer_name = allyData.alliedName !== '' ? allyData.alliedName.split(" ")[0] : null 



  return (
    <section className="relative w-full h-full min-h-dvh pt-[25dvh] xl:pt-[25dvh] pb-6">

        <div className=" absolute inset-0 bg-black" />
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden opacity-40">
            <HeroCarousel slides={hero_slides} />
        </div>
        {/* <div className="absolute left-0 bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent from-50% to-white dark:to-black" /> */}


        <div className="flex flex-col justify-between items-center h-full gap-y-6 w-11/12 mx-auto">
            
            {
                allyData.isLoading ? 
                <>
                    <h3 className="subtitle text-gray-300 text-center mb-4">
                        Loading Your Exclusive Discount
                    </h3>
                    <picture className="relative animate-bounce skeleton size-28 lg:size-40 rounded-full flex justify-center items-center border-2 border-blue-uchooseit overflow-hidden shadow-2xl-dark dark:shadow-2xl-light bg-white/90">
                        <img src="/icons/present.svg" alt="present" className="w-3/5 " />
                    </picture>
                </>
                :
                <>
                    <div className="relative w-full flex flex-col justify-center items-center gap-x-5 gap-y-5 ">
                        <div className='relative text-center mx-auto opacity-50'>
                            <h1 className={`leading-[1.2] font-bold text-[10vw] ${shiny_color}`}>
                                {categoryName}
                            </h1>
                        </div>
                        
                        { allyData.alliedCompanyImg && allyData.alliedCuponCode !== "" ?
                            <picture className={`size-28 lg:hidden rounded-full border-2 p-1 overflow-hidden shadow-2xl-dark dark:shadow-2xl-light ${border}`}>
                                <img src={allyData.alliedCompanyImg} alt="afiliate" className="w-full h-full  object-top object-cover rounded-full " />
                            </picture>
                            : null
                        }

                        <div className="relative h-full w-full flex flex-col items-center justify-center gap-y-2">
                            <h2 className="relative text-white text-xl sm:text-3xl text-center text-balance w-fit mb-2">
                                Join 
                                    {influencer_name ? 
                                        <strong className="mx-2">
                                            {influencer_name + "'s"}
                                        </strong>
                                    : " " } 
                                {/* <br /> */}
                                community of Smart Savers
                          
                            </h2>
                            <div className="w-fit relative flex flex-col justify-center items-center gap-y-2">

                                <p className="subtitle text-gray-100 dark:text-gray-300">
                                    Billed annually at

                                    { allyData.alliedCuponCode == "" ?
                                        <span className=" ml-2  text-green-400">
                                            ${annualPrice}
                                        </span>
                                        :
                                        <>
                                            <span className="mx-2 text-red-400 line-through">
                                                ${originalPrice}
                                            </span>
                                            <span className=" text-green-400">
                                                ${annualPrice}
                                            </span>
                                        </>
                                    }
                                </p>
                                <p className="uppercase text-xl font-semibold text-center">
                                    Price includes all categories
                                </p>
                                <div className="flex justify-center items-center gap-x-4">
                                    <img src={icon_shop} alt="shop" className="w-8 transition-all duration-300 ease-out hover:scale-110 " />
                                    <img src={icon_travel} alt="travel" className="w-8 transition-all duration-300 ease-out hover:scale-110 " />
                                    <img src={icon_dining} alt="dining" className="w-8 transition-all duration-300 ease-out hover:scale-110 " />
                                    <img src={icon_entertainment} alt="entertainment" className="w-8 transition-all duration-300 ease-out hover:scale-110   " />
                                </div>

                                {allyData.alliedCompanyImg && allyData.alliedCuponCode !== "" ?
                                    <picture className={`hidden lg:block size-28 absolute -left-5 top-1/2 -translate-y-2/5 -translate-x-full rounded-full border-2 p-1 overflow-hidden shadow-2xl-dark dark:shadow-2xl-light transition-all hover:scale-115 ${border}`}>
                                        <img src={allyData.alliedCompanyImg} alt="afiliate" className="w-full h-full object-top object-cover rounded-full " />
                                    </picture>
                                    :null
                                }
                            </div>
                  
                        </div>
                    </div>
                </> 
               
            }


            <div className="relative w-full h-full mt-[5dvh]" >

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
