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
                                    <a href="#header">{data["menu_link1"]}</a>
                                    <a href="#video">{data["menu_link2"]}</a>
                                    <a href="#categories">{data["menu_link3"]}</a>
                                    <a href="#brands">{data["menu_link4"]}</a>
                                    <a href="#membership">{data["menu_link5"]}</a>
                                    <a href="#app">{data["menu_link6"]}</a>
                                    <a href="#about-us">{data["menu_link7"]}</a>
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
