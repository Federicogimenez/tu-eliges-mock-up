
export default function BurgerMenu() {

    return (
        <div className="burger">
            <input type="checkbox" className="burger__checkbox" id="navi-toggle" />
            
            <label htmlFor="navi-toggle" className="burger__button">
                <span className="burger__icon"></span>
            </label>

            <div className="burger__background"></div>
            
            <nav className="burger__nav">
                <ul className="burger__list">
                    <li className="burger__item"><a href="#header" className="burger__link"><span></span>home</a></li>
                    <li className="burger__item"><a href="#video" className="burger__link"><span></span>video</a></li>
                    <li className="burger__item"><a href="#categories" className="burger__link"><span></span>categorias</a></li>
                    <li className="burger__item"><a href="#brands" className="burger__link"><span></span>marcas</a></li>
                    <li className="burger__item"><a href="#membership" className="burger__link"><span></span>membresias</a></li>
                    <li className="burger__item"><a href="#app" className="burger__link"><span></span>app</a></li>
                    <li className="burger__item"><a href="#" className="burger__link"><span></span>español <img src="/img/svg/arrow-up.svg" alt="" /></a></li>
                </ul>
            </nav>
        </div>
    )
}