import Typewriter from "typewriter-effect";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import { NavBar } from "../components/NavBar";



export default function Header() {
    const data = useLanguageContext();

    return (
            <div className="header" id="header">
                <NavBar />
                <div className="header__content">
                    <div className="header__content--text-box">
                        <h2>
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
                        </h2>
                        <h1>{ data["header_subtitle"] }</h1>
                        <button>{ data["header_button"] }</button>
                    </div>
                    <div className="header__content--ilustration">
                        <img src="/img/png/header.webp" alt="ilustration" />
                    </div>
                </div>
            </div>
    )
}