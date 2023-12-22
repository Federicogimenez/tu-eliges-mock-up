import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../hooks/UseLanguageContext";

export default function SectionDiscounts() {
    const data = useLanguageContext();

    const [isIntersecting, setIsIntersecting] = useState<boolean>()
    const elementRef = useRef<HTMLInputElement>(null)
    
    
    useEffect(()=>{
        const element = elementRef.current;
        
        const observer = new IntersectionObserver( entries => {
            entries.forEach( entry => setIsIntersecting(entry.isIntersecting))
        },
        {
            threshold: 1,
        }
        );

        if (element) {
            observer.observe(element)
        }
    }, [])

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
                        <div className="section-discounts__box-cards--box" ref={elementRef}>
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-1">
                                    <img className={isIntersecting ? 'animation-card-1' : '' } src="/img/svg/shopping-icon.svg" alt="" />
                                    <span> { data["cards_card1_front"] } </span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>{ data["cards_card1_back"] }</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-2">
                                    <img  className={isIntersecting ? 'animation-card-2' : '' }  src="/img/svg/food-icon.svg" alt="" />
                                    <span>{ data["cards_card2_front"] }</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>{ data["cards_card2_back"] }</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-discounts__box-cards--box">
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-3">
                                    <img  className={isIntersecting ? 'animation-card-3' : '' }  src="/img/svg/icon-play.svg" alt="" />
                                    <span>{ data["cards_card3_front"] }</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>{ data["cards_card3_back"] }</p>
                                </div>
                            </div>
                            <div className="card">
                                <div 
                                    className="card__side card__side--front" 
                                    id="discount-card-4"
                                    style={isIntersecting ? {backgroundSize: '120%'} : undefined}
                                    >
                                    <img  className={isIntersecting ? 'animation-card-4' : '' }  src="/img/svg/travel-icon.svg" alt="" />
                                    <span>{ data["cards_card4_front"] }</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>{ data["cards_card4_back"] }</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="section-discounts__border section-discounts__border--2"></div>
        </section>
    )
}