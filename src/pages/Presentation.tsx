
import { useNavigate } from "react-router";
import { LazyImageComponent } from "../components/LazyImage";
import { useEffect, useRef, useState } from "react";

interface presentationPropType {
    comercial?: number
}

export default function Presentation({comercial=1}:presentationPropType) {
    const presentersData = [
        {
            id: 1,
            img: 'https://tueliges.us/img/png/presentation/marcelo.png',
            name: 'Marcelo Gaffoglio',
            profile: 'Co-Founder',
            role: 'CEO',
            email: 'marcelo@uchooseit.us?subject=Schedule a Meeting - uchooseit',
            appointment: 'https://calendar.app.google/rMwZd4VdykaK61L39'
        },
        {
            id: 2,
            img: 'https://tueliges.us/img/png/presentation/viviana.png',
            name: 'Viviana Valderrama',
            profile: 'Co-Founder',
            role: 'President',
            email: 'viviana@uchooseit.us?subject=Schedule a Meeting - uchooseit',
            appointment: 'https://calendar.app.google/1XijWsfVDay9jkbC9'
        },
        {
            id: 3,
            img: 'https://tueliges.us/img/png/presentation/martin.png',
            name: 'Martin Arnaud',
            profile: 'Business Development',
            role: 'EVP',
            email: 'martin@uchooseit?subject=Schedule a Meeting - uchooseit',
            appointment: 'https://calendar.app.google/Vn3rHnB4GWJ6RqxV8'
        }
    ]
    const currentComercial = presentersData.find( ( e ) => e.id == comercial );
    
    const navigate = useNavigate();
    
    const [isIntersecting, setIsIntersecting] = useState<boolean>()
    const elementRef = useRef<HTMLDivElement>(null)
    
    useEffect(()=>{
        const element = elementRef.current;
        
        const observer = new IntersectionObserver( entries => {
            
            entries.forEach( entry => setIsIntersecting(entry.isIntersecting))
        },
        {
            threshold: .2,
        }
        );

        if (element) {
            observer.observe(element)
        }
    }, [])
    
    

    function handleRedirectHome (){
        navigate("/");
        window.scrollTo(0, 0)
    }

    return (
        <main className="presentation">
            <div className="presentation__bg-square">
                <LazyImageComponent src={"https://tueliges.us/img/png/presentation/presentation-header.png"} alt={"bg"}  />
            </div>

            <header className="presentation__header">
                <picture>
                    <LazyImageComponent src={"/img/png/logo-uchooseit.png"} alt={"uchooseit"}  />
                </picture>
                <h1>DISCOUNTS WITH A PURPOSE</h1>
                <p>
                    Partner with 
                    <span>
                        uchooseit.us 
                    </span>
                    to Empower all
                    <br />
                    <span>
                        Communities Across America 
                    </span>
                    with Exclusive Savings.
                </p>
            </header>
            <section className="presentation__video-section">
                <div className="presentation__video-border presentation__video-border--left"></div>
                <div className="presentation__video-content">
                    <div style={{'padding':'56.25% 0 0 0','position':'relative'}}>
                        <iframe 
                            style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} 
                            src='https://www.youtube.com/embed/dUajsULLQdU?si=tbXpUsdx6N2XU01a'
                            loading="lazy" 
                            title="UChooseIt" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div className="presentation__video-border presentation__video-border--right"></div>
            </section>
            <section className="presentation__contact">
                <div className="presentation__contact-title">
                    <span></span>
                    <strong>contact info</strong>
                    <span></span>
                </div>
                <p className="presentation__contact-p">
                    I would be grateful for the opportunity to arrange a phone call or virtual meeting at your earliest convenience to introduce our full company overview.
                </p>
                <div className="dynamic-contact">
                    <div className="dynamic-contact__first" ref={elementRef}>
                        <picture className="dynamic-contact__first--img">
                            <LazyImageComponent src={currentComercial!.img} alt={currentComercial!.name} class='grow-img' dynamicClass={isIntersecting ? ' active':''} />
                        </picture>
                        <div className="dynamic-contact__first--text">
                            <h4>{currentComercial?.name}</h4>
                            <span>{currentComercial?.profile}</span>
                            <span>{currentComercial?.role}</span>
                        </div>
                    </div>
                    <div className="dynamic-contact__second">
                        <a target="_blank" href={`${currentComercial?.appointment}`} className="dynamic-contact__second--1">Book an appointment</a>
                        <a href={`mailto:${currentComercial?.email}`} className="dynamic-contact__second--2">Send a email</a>
                    </div>
                </div>
                <div className="dynamic-contact__message">
                    <p> 
                        “Let's work together to create impactful, positive 
                        changes and memorable successes”
                    </p>
                </div>
            </section>
            <section className="presentation__footer">
                <p>Visit our social network sites.</p>
                <button onClick={handleRedirectHome}>www.uchooseit.us</button>
                <div>
                    <a target="_blank" href="https://facebook.com/Uchooseit.us">
                        <LazyImageComponent src={"/img/svg/facebook.svg"} alt={"facebook"} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/uchooseit.us/">
                        <LazyImageComponent src={"/img/svg/ig.svg"} alt={"instagram"} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/uchooseit-us/about/?viewAsMember=true">
                        <LazyImageComponent src={"/img/svg/linkedin-icon.svg"} alt={"linkedin"} />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCTS9Hp-WjV4eMaqHATtmJSg">
                        <LazyImageComponent src={"/img/svg/youtube-icon.svg"} alt={"youtube"} />
                    </a>
                </div>
            </section>
        </main>
    )
}
