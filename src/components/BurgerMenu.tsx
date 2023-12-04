import SwitchLang from "./SwitchLang";

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
                    <li className="burger__item"><a href="#header" className="burger__link">home</a></li>
                    <li className="burger__item"><a href="#video" className="burger__link">video</a></li>
                    <li className="burger__item"><a href="#categories" className="burger__link">categorias</a></li>
                    <li className="burger__item"><a href="#brands" className="burger__link">marcas</a></li>
                    <li className="burger__item"><a href="#membership" className="burger__link">membresias</a></li>
                    <li className="burger__item"><a href="#app" className="burger__link">app</a></li>
                    <SwitchLang />
                </ul>
            </nav>
        </div>
    )
}