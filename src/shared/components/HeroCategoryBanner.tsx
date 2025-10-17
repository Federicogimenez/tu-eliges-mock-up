import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

import shopTrendy_mobile_1 from '/hero-category/shop/mobile/1.png';
import shopTrendy_mobile_2 from '/hero-category/shop/mobile/2.png';
import shopTrendy_mobile_3 from '/hero-category/shop/mobile/3.png';
import shopTrendy_mobile_4 from '/hero-category/shop/mobile/4.png';

import shopTrendy_desktop_1 from '/hero-category/shop/desktop/1.png';
import shopTrendy_desktop_2 from '/hero-category/shop/desktop/2.png';
import shopTrendy_desktop_3 from '/hero-category/shop/desktop/3.png';
import shopTrendy_desktop_4 from '/hero-category/shop/desktop/4.png';


import travelTrendy_mobile_1 from '/hero-category/travel/mobile/1.png';
import travelTrendy_mobile_2 from '/hero-category/travel/mobile/2.png';
import travelTrendy_mobile_3 from '/hero-category/travel/mobile/3.png';
import travelTrendy_mobile_4 from '/hero-category/travel/mobile/4.png';

import travelTrendy_desktop_1 from '/hero-category/travel/desktop/1.png';
import travelTrendy_desktop_2 from '/hero-category/travel/desktop/2.png';
import travelTrendy_desktop_3 from '/hero-category/travel/desktop/3.png';
import travelTrendy_desktop_4 from '/hero-category/travel/desktop/4.png';


import diningTrendy_mobile_1 from '/hero-category/dining/mobile/1.png';
import diningTrendy_mobile_2 from '/hero-category/dining/mobile/2.png';
import diningTrendy_mobile_3 from '/hero-category/dining/mobile/3.png';
import diningTrendy_mobile_4 from '/hero-category/dining/mobile/4.png';

import diningTrendy_desktop_1 from '/hero-category/dining/desktop/1.png';
import diningTrendy_desktop_2 from '/hero-category/dining/desktop/2.png';
import diningTrendy_desktop_3 from '/hero-category/dining/desktop/3.png';
import diningTrendy_desktop_4 from '/hero-category/dining/desktop/4.png';


import entertainmentTrendy_mobile_1 from '/hero-category/entertainment/mobile/1.png';
import entertainmentTrendy_mobile_2 from '/hero-category/entertainment/mobile/2.png';
import entertainmentTrendy_mobile_3 from '/hero-category/entertainment/mobile/3.png';
import entertainmentTrendy_mobile_4 from '/hero-category/entertainment/mobile/4.png';

import entertainmentTrendy_desktop_1 from '/hero-category/entertainment/desktop/1.png';
import entertainmentTrendy_desktop_2 from '/hero-category/entertainment/desktop/2.png';
import entertainmentTrendy_desktop_3 from '/hero-category/entertainment/desktop/3.png';
import entertainmentTrendy_desktop_4 from '/hero-category/entertainment/desktop/4.png';
import ButtonSecondary from "./ButtonSecondary";
import ScrollToSection from "../../hooks/useScrollSection";


interface BannerImage{
    img: string
}

interface CurrentBanner{
    title: string,
    p: string,
    banner_images: BannerImage[],
    bg_color: string,
    text_color: string,
}

export type CategoryPageOptions = "shop" | "travel" | "dining" | "entertainment"; 

interface HeroCategoryBannerProps{
    categoryPage: CategoryPageOptions
}

export default function HeroCategoryBanner({ categoryPage }:HeroCategoryBannerProps) {

    const bannerRef = useRef<HTMLDivElement | null>(null);
    


    const {width} = useWindowSize()

    const shopBannerCollage=[
        {
            img: width > 1024 ? shopTrendy_desktop_1 : shopTrendy_mobile_1, 
        },
        {
            img: width > 1024 ? shopTrendy_desktop_2 : shopTrendy_mobile_2, 
        },
        {
            img: width > 1024 ? shopTrendy_desktop_3 : shopTrendy_mobile_3, 
        },
        {
            img: width > 1024 ? shopTrendy_desktop_4 : shopTrendy_mobile_4, 
        },
    ]
    const diningBannerCollage=[
        {
            img: width > 1024 ? diningTrendy_desktop_1 : diningTrendy_mobile_1, 
        },
        {
            img: width > 1024 ? diningTrendy_desktop_2 : diningTrendy_mobile_2, 
        },
        {
            img: width > 1024 ? diningTrendy_desktop_3 : diningTrendy_mobile_3, 
        },
        {
            img: width > 1024 ? diningTrendy_desktop_4 : diningTrendy_mobile_4, 
        },
    ]
    const travelBannerCollage=[
        {
            img: width > 1024 ? travelTrendy_desktop_1 : travelTrendy_mobile_1, 
        },
        {
            img: width > 1024 ? travelTrendy_desktop_2 : travelTrendy_mobile_2, 
        },
        {
            img: width > 1024 ? travelTrendy_desktop_3 : travelTrendy_mobile_3, 
        },
        {
            img: width > 1024 ? travelTrendy_desktop_4 : travelTrendy_mobile_4, 
        },
    ]
    const entertainmentBannerCollage=[
        {
            img: width > 1024 ? entertainmentTrendy_desktop_1 : entertainmentTrendy_mobile_1, 
        },
        {
            img: width > 1024 ? entertainmentTrendy_desktop_2 : entertainmentTrendy_mobile_2, 
        },
        {
            img: width > 1024 ? entertainmentTrendy_desktop_3 : entertainmentTrendy_mobile_3, 
        },
        {
            img: width > 1024 ? entertainmentTrendy_desktop_4 : entertainmentTrendy_mobile_4, 
        },
    ]


    const [banner, setbanner] = useState<CurrentBanner>({
        title: "Shop",
        banner_images: shopBannerCollage,
        p:"asd",
        bg_color:"bg-purple-shop",
        text_color: "text-purple-shop"

    })

    useEffect(() => {

        switch (categoryPage) {
            case "shop":
                    setbanner({
                        title: "Shop",
                        banner_images: shopBannerCollage,
                        p:"Smarter Shopping Savings",
                        bg_color:"bg-purple-shop",
                        text_color: "text-purple-shop"
                    })
                break;
            case "dining":
                    setbanner({
                        title: "Dining",
                        banner_images: diningBannerCollage,
                        p:"Taste More, Pay Less",
                        bg_color:"bg-yellow-dining",
                        text_color: "text-yellow-dining"
                    })
                break;
            case "travel":
                    setbanner({
                        title: "Travel",
                        banner_images: travelBannerCollage,
                        p:"Bigger Adventures Savings",
                        bg_color:"bg-blue-travel",
                        text_color: "text-blue-travel"

                    })
                break;
            case "entertainment":
                    setbanner({
                        title: "Entertainment",
                        banner_images: entertainmentBannerCollage,
                        p:"Bigger Smiles Discounts!",
                        bg_color:"bg-pink-entertainment",
                        text_color: "text-pink-entertainment"

                    })
                break;
        
            default:
                setbanner({
                    title: categoryPage,
                    banner_images: entertainmentBannerCollage,
                    p:"Discounts",
                    bg_color:"bg-black",
                    text_color: ""
                })
                break;
        }

    }, [categoryPage])
    



    return (
    <div
        className={`relative w-full h-[20dvh] min-h-40 transition-all duration-300 animate-appear-up `}
        ref={bannerRef}
        >
        
        <div className="flex w-fit mx-auto h-full justify-center items-stretch gap-x-2 p-2 mb-3">
            {banner.banner_images.map(({img}, i)=>{
                return <picture key={i} className={`w-1/4 h-full p-1 cursor-pointer rounded-xl transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105 ${banner.bg_color}`}
                        onClick={()=>{ScrollToSection("trendy")}}>
                    <img src={img} alt="img" className="w-full h-full object-center object-cover rounded-xl" />
                </picture> 
            })}
        </div>

        <h4 className={`text-center text-6xl leading-[.8] text-shadow-2xl-dark absolute top-0 left-1/2 font-bold -translate-x-1/2 -translate-y-1/6 ${banner.text_color}`}>
            {banner.title}
            <br />
            <span className="text-white text-4xl">
                Discounts
            </span>
        </h4>
        {/* <h5 className={`text-white text-center text-4xl text-shadow-2xl-dark absolute bottom-0 left-1/2 font-bold -translate-x-1/2 translate-y-1/4`}>
        </h5> */}

        <div className='relative w-full max-w-md mx-auto' onClick={()=>{ScrollToSection("benefits")}} >
            <ButtonSecondary text={'Explore More'} redirect={'#benefits'} classnames={"!"+banner.text_color}/>
        </div>
    </div>
  )
}
