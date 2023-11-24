import BurgerMenu from "../components/BurgerMenu";
import SwitchLang from "../components/SwitchLang";
import Typewriter from "typewriter-effect";
import Headroom from "react-headroom";



export default function Header() {

    return (
            <div className="header" id="header">
                <Headroom className="header__menu-desk" style={{
                    display:'flex',
                    justifyContent:'space-around',
                    width:'100%',
                    zIndex:'100',
                }}>
                        <picture className='header__menu-desk--logo'>
                            <img src="/img/png/logo-tu-eliges.png" alt="tu eliges" />
                        </picture>
                        <div className='header__menu-desk--navbar-desk'>
                            <button>usuario</button>
                            <nav>
                                <a href="#header" className="active">Home</a>
                                <a href="#video">Video</a>
                                <a href="#categories">Categoria</a>
                                <a href="#brands">Marcas</a>
                                <a href="#membership">Membresia</a>
                                <a href="#app">App</a>
                                <SwitchLang />
                            </nav>
                        </div>
                </Headroom>
                <div className="header__menu-mobile">
                    <picture className='header__menu-mobile--logo'>
                        <img src="/img/png/logo-tu-eliges.png" alt="tu eliges" />
                    </picture>
                    <BurgerMenu  />
                </div>
                <div className="header__content">
                    <div className="header__content--text-box">
                        <h2>
                            La red privada de descuentos más grande de Estados Unidos para 
                            <span>
                            <Typewriter
                                options={{
                                strings: [
                                    "la comunidad hispana.",
                                    "ahorrar miles de dólares.",
                                    "compartir en familia.",
                                    "elegir dónde ahorrar.",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 80,
                                deleteSpeed: 40,
                                }}
                            />    
                            </span>    
                        </h2>
                        <h1>Tú Eliges cómo ahorrar</h1>
                        <button>unirme ahora</button>
                    </div>
                    <div className="header__content--ilustration">
                        <img src="/img/png/header.png" alt="ilustration" />
                    </div>
                </div>
            </div>
    )
}