import { useState } from "react";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import SwitchLang from "./SwitchLang";

export default function BurgerMenu() {

    const [naviToggle, setnaviToggle] = useState(false)
    const data = useLanguageContext();

    function callbackNaviToggle(){
        setnaviToggle(!naviToggle)
    }

    return (
        <div className="burger">
            <input type="checkbox" className="burger__checkbox" id="navi-toggle" readOnly checked={naviToggle} />
            
            <label htmlFor="navi-toggle" className="burger__button" onClick={callbackNaviToggle}>
                <span className="burger__icon"></span>
            </label>

            <div className="burger__background"></div>
            
            <nav className="burger__nav">
                <ul className="burger__list">
                    <li className="burger__item"><a href="#header" className="burger__link" onClick={callbackNaviToggle}>{data["menu_link1"]}</a></li>
                    <li className="burger__item"><a href="#video" className="burger__link" onClick={callbackNaviToggle}>{data["menu_link2"]}</a></li>
                    <li className="burger__item"><a href="#categories" className="burger__link" onClick={callbackNaviToggle}>{data["menu_link3"]}</a></li>
                    <li className="burger__item"><a href="#brands" className="burger__link" onClick={callbackNaviToggle}>{data["menu_link4"]}</a></li>
                    <li className="burger__item"><a href="#membership" className="burger__link" onClick={callbackNaviToggle}>{data["menu_link5"]}</a></li>
                    <li className="burger__item"><a href="#app" className="burger__link" onClick={callbackNaviToggle}>{data["menu_link6"]}</a></li>
                    <li className="burger__item"><a href="#about-us" className="burger__link" onClick={callbackNaviToggle}>{data["menu_link7"]}</a></li>
                    <SwitchLang />
                </ul>
            </nav>
        </div>
    )
}