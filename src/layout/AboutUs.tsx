import { useEffect, useRef } from "react";
import { useLanguageContext } from "../hooks/UseLanguageContext"
import UseObserverNavItem from "../hooks/UseObserverNavItem";

export default function AboutUs() {
    const data = useLanguageContext()
    
    const elementCurrentRef = useRef<HTMLDivElement>(null)
    const isIntersecting  = UseObserverNavItem(elementCurrentRef.current)
    if (isIntersecting) {
        document.querySelector('#nav-item-aboutus')?.classList.add('active')
    }else{
        document.querySelector('#nav-item-aboutus')?.classList.remove('active')
    }    
    useEffect(() => {
        if (isIntersecting) {
            document.querySelector('#nav-item-aboutus')?.classList.add('active')
        }else{
            document.querySelector('#nav-item-aboutus')?.classList.remove('active')
        }
    }, [isIntersecting])
    

    return (
        <div className="about-us" id="about-us" ref={elementCurrentRef}>
            <div className="about-us__text">
                <h6>
                    { data["aboutus_title"] }
                </h6>
                <p>
                    { data["aboutus_paragraph_1"] }
                </p>
                <p>
                    { data["aboutus_paragraph_2"] }
                </p>
                <p>
                    { data["aboutus_paragraph_3"] }
                </p>
                <a href="mailto:info@tueliges.us">
                    { data["aboutus_cta"] }
                </a>
            </div>
            <div className="about-us__img">
                <img src="/img/png/about-us.png" alt="about us" />
            </div>
        </div>
    )
}
