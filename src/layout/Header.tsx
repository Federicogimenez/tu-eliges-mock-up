import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import ButtonTwoStates from "../components/ButtonTwoStates";
import { NavBar } from "../components/NavBar";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import UseObserverNavItem from "../hooks/UseObserverNavItem";



export default function Header() {
    const data = useLanguageContext();

    const elementCurrentRef = useRef<HTMLDivElement>(null)
    const isIntersecting  = UseObserverNavItem(elementCurrentRef.current)    
    
    if (isIntersecting) {
        document.querySelector('#nav-item-header')?.classList.add('active')
    }else{
        document.querySelector('#nav-item-header')?.classList.remove('active')
    }
    useEffect(() => {
        if (isIntersecting) {
            document.querySelector('#nav-item-header')?.classList.add('active')
        }else{
            document.querySelector('#nav-item-header')?.classList.remove('active')
        }
    }, [isIntersecting])
    

    return (
            <div className="header" id="header" ref={elementCurrentRef}>
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
                    <div className="header__content--ilustration">
                        <img src="/img/png/header.webp" alt="ilustration" />
                    </div>
                </div>
            </div>
    )
}