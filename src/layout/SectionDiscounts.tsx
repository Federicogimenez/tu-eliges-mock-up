
export default function SectionDiscounts() {

    // const cards: Card[] = [
    //     {
    //         img: '',
    //         title: '',
    //         p: ''
    //     },
    //     {
    //         img: '',
    //         title: '',
    //         p: ''
    //     },
    //     {
    //         img: '',
    //         title: '',
    //         p: ''
    //     },
    // ]

    return (
        <section className="section-discounts">
            <div className="section-discounts__border section-discounts__border--1"></div>
                <div className="section-discounts__content">
                    <h3>
                        Más de 1 millón de lugares para ahorrar
                        <br />
                        <span>ONE STOP</span>
                    </h3>
                    <div className="section-discounts__box-cards">
                        <div className="section-discounts__box-cards--box">
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-1">
                                    <img src="/img/svg/brand-icon.svg" alt="" />
                                    <span>¡A TODOS LADOS CON VOS!</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>Descuentos exclusivos en más de 700.000 ubicaciones</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-2">
                                    <img src="/img/svg/food-icon.svg" alt="" />
                                    <span>¡A TODOS LADOS CON VOS!</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>Descuentos exclusivos en más de 700.000 ubicaciones</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-discounts__box-cards--box">
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-3">
                                    <img src="/img/svg/shopping-icon.svg" alt="" />
                                    <span>¡A TODOS LADOS CON VOS!</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>Descuentos exclusivos en más de 700.000 ubicaciones</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__side card__side--front" id="discount-card-4">
                                    <img src="/img/svg/travel-icon.svg" alt="" />
                                    <span>¡A TODOS LADOS CON VOS!</span>
                                </div>
                                <div className="card__side card__side--back">
                                    <p>Descuentos exclusivos en más de 700.000 ubicaciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="section-discounts__border section-discounts__border--2"></div>
        </section>
    )
}