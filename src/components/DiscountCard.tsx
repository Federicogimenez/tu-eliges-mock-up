import { useEffect, useRef, useState } from "react";
import CardInterface from "../interfaces/CardInterface";

export default function DiscountCard(card: CardInterface) {

    const [isIntersecting, setIsIntersecting] = useState<boolean>()
    const elementRef = useRef<HTMLInputElement>(null)
    
    useEffect(()=>{
        const element = elementRef.current;
        
        const observer = new IntersectionObserver( entries => {
            entries.forEach( entry => setIsIntersecting(entry.isIntersecting))
        },
        {
            threshold: .9,
        }
        );

        if (element) {
            observer.observe(element)
        }
    }, [])

    return (
        <div className="card">
            <div className="card__side card__side--front" ref={elementRef}>
                <img className={'card__side--front-bg ' + (isIntersecting ? 'animation__bg-scale' : '')} src={card.background_img} alt="card bg" loading="lazy"/>
                <img className={'card__side--front-icon ' + (isIntersecting ? card.animation : '') } alt="card icon" src={card.icon} loading="lazy"/>
                <span className="card__side--front-text"> { card.front_title } </span>
            </div>
            <div className="card__side card__side--back">
                <p>{ card.back_text}</p>
            </div>
        </div>
    )
}