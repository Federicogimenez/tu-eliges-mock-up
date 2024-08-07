import Typewriter from "typewriter-effect";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import { NavBar } from "../components/NavBar";
import ButtonTwoStates from "../components/ButtonTwoStates";
import { LazyImageComponent } from "../components/LazyImage";



export default function Header() {
    const data = useLanguageContext();

    return (
            <div className="header" id="header">
                <NavBar />
                <div className="header__content">
                    <div className="header__content--text-box">
                        <h1>
                            {data["header_title"]}
                            <span>
                            <Typewriter
                                options={{
                                strings: [
                                    data["header_title_phrase1"],
                                    data["header_title_phrase2"],
                                    data["header_title_phrase3"]
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 80,
                                deleteSpeed: 40,
                                }}
                            />    
                            </span>    
                        </h1>
                        <h2>{ data["header_subtitle"] }</h2>
                        <ButtonTwoStates text_static={ data["header_button"]} text_hover={ data["header_button_hover"] } />
                    </div>
                    <picture className="header__content--ilustration">
                        <LazyImageComponent src="/img/png/header.webp" alt={"ilustracion"} width="100%" height="100%" />
                        {/* <img src="/img/png/header.webp" alt="ilustration" /> */}
                    </picture>
                </div>
            </div>
    )
}