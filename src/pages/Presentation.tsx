
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
            img: '/img/png/presentation/marcelo.png',
            name: 'Marcelo Gaffoglio',
            profile: 'Co-Founder',
            role: 'CEO',
            email: 'marcelo@tueliges.us?subject=Schedule a Meeting - TuEliges.us',
            appointment: 'https://calendar.app.google/qwqxs7hcUeU1AhGH9'
        },
        {
            id: 2,
            img: '/img/png/presentation/viviana.png',
            name: 'Viviana Valderrama',
            profile: 'Co-Founder',
            role: 'President',
            email: 'viviana@tueliges.us?subject=Schedule a Meeting - TuEliges.us',
            appointment: 'https://calendar.app.google/jwsufrC1FTFZz8fc8'
        },
        {
            id: 3,
            img: '/img/png/presentation/martin.png',
            name: 'Martin Arnaud',
            profile: 'Business Development',
            role: 'EVP',
            email: 'martin@tueliges.us?subject=Schedule a Meeting - TuEliges.us',
            appointment: 'https://calendar.app.google/8gQoZfXLot7jp6WXA'
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
                <LazyImageComponent src={"/img/png/presentation/presentation-header.png"} alt={"bg"}  />
            </div>

            <header className="presentation__header">
                <picture>
                    <LazyImageComponent src={"/img/png/logo-tu-eliges.png"} alt={"tu eliges"}  />
                </picture>
                <h1>DISCOUNTS WITH A PURPOSE</h1>
                <p>
                    Partner with 
                    <span>
                        TuEliges.us
                    </span>
                    to Empower the 
                    <br />
                    <span>
                        Hispanic Community
                    </span>
                    through Exclusive Savings Across America.</p>
            </header>
            <section className="presentation__video-section">
                <div className="presentation__video-border presentation__video-border--left"></div>
                <div className="presentation__video-content">
                    <div style={{'padding':'56.25% 0 0 0','position':'relative'}}>
                        <iframe 
                            style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} 
                            src='https://www.youtube.com/embed/hh1_jM7BU0g'
                            loading="lazy" 
                            title="YouTube video player" 
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
                        <a target="_blank" href={`mailto:${currentComercial?.email}`} className="dynamic-contact__second--2">Send a email</a>
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
                <button onClick={handleRedirectHome}>www.tueliges.us</button>
                <div>
                    <a target="_blank" href="https://www.facebook.com/tueligesusa">
                        <LazyImageComponent src={"/img/svg/facebook.svg"} alt={"facebook"} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/tueliges.us/">
                        <LazyImageComponent src={"/img/svg/ig.svg"} alt={"instagram"} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/tueliges-us">
                        <LazyImageComponent src={"/img/svg/linkedin-icon.svg"} alt={"linkedin"} />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UC5QtJ5tx41WsIIZGyru7_Ng">
                        <LazyImageComponent src={"/img/svg/youtube-icon.svg"} alt={"youtube"} />
                    </a>
                </div>
            </section>
        </main>
    )
}
