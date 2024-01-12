import BurgerMenu from "../components/BurgerMenu";
import SwitchLang from "../components/SwitchLang";
import Headroom from "react-headroom";
import { useLanguageContext } from "../hooks/UseLanguageContext";


export function NavBar (){
    const data = useLanguageContext();

    return (
        <div className="navbar">
            <Headroom className="navbar__menu-desk" style={{
                        display:'flex',
                        justifyContent:'space-around',
                        width:'100%',
                        zIndex:'100',
                    }}>
                        <picture className='navbar__menu-desk--logo'>
                            <img src="/img/png/logo-tu-eliges.png" alt="tu eliges" />
                        </picture>
                        <div className='navbar__menu-desk--navbar-desk'>
                            <nav>
                                    <a href="#header" id="nav-item-header" className="active">{data["menu_link1"]}</a>
                                    <a href="#video" id="nav-item-video">{data["menu_link2"]}</a>
                                    <a href="#categories" id="nav-item-categories">{data["menu_link3"]}</a>
                                    <a href="#brands" id="nav-item-brands">{data["menu_link4"]}</a>
                                    <a href="#membership" id="nav-item-membership">{data["menu_link5"]}</a>
                                    <a href="#app" id="nav-item-app">{data["menu_link6"]}</a>
                                    <a href="#about-us" id="nav-item-aboutus">{data["menu_link7"]}</a>
                                    <SwitchLang />
                            </nav>
                        </div>
                </Headroom>
                <div className="navbar__menu-mobile">
                    <picture className='navbar__menu-mobile--logo'>
                        <img src="/img/png/logo-tu-eliges.png" alt="tu eliges" />
                    </picture>
                    <BurgerMenu  />
                </div>
    </div>
  )
}
