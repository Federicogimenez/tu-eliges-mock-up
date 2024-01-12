import { useEffect, useRef } from "react";
import ButtonTwoStates from "../components/ButtonTwoStates";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import UseObserverNavItem from "../hooks/UseObserverNavItem";

export default function SectionPrice() {
    const data = useLanguageContext();

    const elementCurrentRef = useRef<HTMLDivElement>(null)
    const isIntersecting  = UseObserverNavItem(elementCurrentRef.current)

    if (isIntersecting) {
        document.querySelector('#nav-item-membership')?.classList.add('active')
    }else{
        document.querySelector('#nav-item-membership')?.classList.remove('active')
    }
    useEffect(() => {
        if (isIntersecting) {
            document.querySelector('#nav-item-membership')?.classList.add('active')
        }else{
            document.querySelector('#nav-item-membership')?.classList.remove('active')
        }
    }, [isIntersecting])
    

    return (
    <div className="section-price" id="membership" ref={elementCurrentRef}>
        <div className="section-price__text">
            <h3>
                { data["membership_title"] }
            </h3>
            <div className="section-price__text--list">
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    { data["membership_benefit1"] }
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    { data["membership_benefit2"] }
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    { data["membership_benefit3"] }
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    { data["membership_benefit4"] }
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    { data["membership_benefit5"] }
                </p>
                <ButtonTwoStates text_static={data["membership_cta"]} text_hover={data["membership_cta_hover"]} />

            </div>
        </div>
        <div className="section-price__price">
            <div className="price-card">
                <div className="price-card__side price-card__side--front">
                    <span className="price-card__side--front-text">
                        { data["membership_card_front1"] }
                    </span>
                    <span className="price-card__side--front-text">
                        { data["membership_card_front2"] }
                    </span>
                    <br />
                    { data["membership_card_front3"] }
                </div>
                <div className="price-card__side price-card__side--back">
                    <span className="price-card__side--back--price">
                        { data["membership_card_back1"] }
                    </span>
                    <span className="price-card__side--back--text">
                        { data["membership_card_back2"] }
                    </span>
                    <span className="price-card__side--back--text">
                        { data["membership_card_back3"] }
                    </span>
                    {/* <span className="price-card__side--back--price">
                        { data["membership_card_back4"] }
                    </span>
                    <span className="price-card__side--back--text">
                        { data["membership_card_back5"] }
                    </span> */}
                </div>
            </div>
        </div>
    </div>
)
}
