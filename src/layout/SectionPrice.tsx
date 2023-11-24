export default function SectionPrice() {
  return (
    <div className="section-price" id="membership">
        <div className="section-price__text">
            <h3>¿A qué accedo con mi membresia?</h3>
            <div className="section-price__text--list">
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    Beneficios exclusivos
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    Beneficios exclusivos
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    Beneficios exclusivos
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    Beneficios exclusivos
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    Beneficios exclusivos
                </p>
                <p>
                    <img src="/img/svg/check-white.svg" alt="" />
                    Beneficios exclusivos
                </p>
            </div>
        </div>
        <div className="section-price__price">
            <div className="price-card">
                <div className="price-card__side price-card__side--front">
                    <span className="price-card__side--front-text">$1.99 USD</span>
                    MENSUAL
                    <span className="price-card__side--front-text">=</span>
                    <span className="price-card__side--front-text">1 MILLON</span>
                    DE DESCUENTOS
                </div>
                <div className="price-card__side price-card__side--back">
                    <span className="price-card__side--back--text">
                        ACCESO A LA COMUNIDAD ANUAL
                    </span>
                    <span className="price-card__side--back--price">
                        $10 USD
                    </span>
                    <button>COMPRAR</button>
                </div>
            </div>
        </div>
    </div>
)
}
