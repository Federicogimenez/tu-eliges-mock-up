import { useLanguageContext } from "../hooks/UseLanguageContext"

export default function SectionPrice() {
    const data = useLanguageContext();
  return (
    <div className="section-price" id="membership">
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
                <button>
                    { data["membership_cta"] }
                </button>
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
