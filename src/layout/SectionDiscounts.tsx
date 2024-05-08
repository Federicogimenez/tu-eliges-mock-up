// import { useEffect, useRef, useState } from "react";
// import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import DiscountCard from "../components/DiscountCard";

export default function SectionDiscounts() {
    const data = useLanguageContext();
    

    // const [isIntersecting, setIsIntersecting] = useState<boolean>()
    // const elementRef = useRef<HTMLInputElement>(null)
    
    
    // useEffect(()=>{
    //     const element = elementRef.current;
        
    //     const observer = new IntersectionObserver( entries => {
    //         entries.forEach( entry => setIsIntersecting(entry.isIntersecting))
    //     },
    //     {
    //         threshold: 0,
    //     }
    //     );

    //     if (element) {
    //         observer.observe(element)
    //     }
    // }, [])

    return (
        <section className="section-discounts">
            <div className="section-discounts__border section-discounts__border--1"></div>
                <div className="section-discounts__content">
                    <h3>
                        { data["cards_title"] }
                        <br />
                        <span>{data["cards_title_blue"]}</span>
                    </h3>
                    <div className="section-discounts__box-cards">
                        <div className="section-discounts__box-cards--box">
                            <DiscountCard 
                                background_img={"/img/png/discount-card-1.png"}
                                icon={"/img/svg/shopping-icon.svg"}
                                animation={"animation__card-1"} 
                                front_title={data["cards_card1_front"]} 
                                back_text={data["cards_card1_back"]} />
                            <DiscountCard 
                                background_img={"/img/png/discount-card-2.png"} 
                                icon={"/img/svg/food-icon.svg"} 
                                animation={"animation__card-2"} 
                                front_title={data["cards_card2_front"]} 
                                back_text={data["cards_card2_back"]} />
                            
                        </div>
                        <div className="section-discounts__box-cards--box">
                            <DiscountCard 
                                background_img={"/img/png/discount-card-3.png"} 
                                icon={"/img/svg/icon-play.svg"} 
                                animation={"animation__card-3"} 
                                front_title={data["cards_card3_front"]} 
                                back_text={data["cards_card3_back"]} />
                            <DiscountCard 
                                background_img={"/img/png/discount-card-4.png"} 
                                icon={"/img/svg/travel-icon.svg"} 
                                animation={"animation__card-4"} 
                                front_title={data["cards_card4_front"]} 
                                back_text={data["cards_card4_back"]} />
                        </div>
                    </div>
                <p className="section-discounts__content--subtitle">{data.card_subtitle}</p>
                <a href="https://tueligesus.enjoymydeals.com/" target="_blank" className="btn-scale-outside">
                    <span>
                        {data.cards_cta}
                        </span>
                    </a>
                </div>
            <div className="section-discounts__border section-discounts__border--2"></div>
        </section>
    )
}