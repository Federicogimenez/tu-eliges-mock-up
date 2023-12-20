import { useLanguageContext } from "../hooks/UseLanguageContext";

export default function SectionDiscounts() {
    const data = useLanguageContext();


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
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-1">
                                    <img src="/img/svg/shopping-icon.svg" alt="" />
                                    <span> { data["cards_card1_front"] } </span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>{ data["cards_card1_back"] }</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-2">
                                    <img src="/img/svg/food-icon.svg" alt="" />
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
                                    <img src="/img/svg/icon-play.svg" alt="" />
                                    <span>{ data["cards_card3_front"] }</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>{ data["cards_card3_back"] }</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-4">
                                    <img src="/img/svg/travel-icon.svg" alt="" />
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