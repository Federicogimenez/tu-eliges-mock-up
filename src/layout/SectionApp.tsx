import { useEffect, useRef } from 'react';
import ButtonTwoStates from '../components/ButtonTwoStates';
import SwiperApp from '../components/SwiperApp'
import { useLanguageContext } from '../hooks/UseLanguageContext';
import UseObserverNavItem from '../hooks/UseObserverNavItem';

export default function SectionApp() {
    const data = useLanguageContext();

    const elementCurrentRef = useRef<HTMLDivElement>(null)
    const isIntersecting  = UseObserverNavItem(elementCurrentRef.current)
    if (isIntersecting) {
        document.querySelector('#nav-item-app')?.classList.add('active')
    }else{
        document.querySelector('#nav-item-app')?.classList.remove('active')
    }
    useEffect(() => {
        if (isIntersecting) {
            document.querySelector('#nav-item-app')?.classList.add('active')
        }else{
            document.querySelector('#nav-item-app')?.classList.remove('active')
        }
    }, [isIntersecting])

    const sliderMobile = [
        "/img/png/app/app-1.png",
        "/img/png/app/app-2.png",
        "/img/png/app/app-3.png",
        "/img/png/app/app-4.png",
        "/img/png/app/app-5.png",
        "/img/png/app/app-6.png",
        "/img/png/app/app-7.png",
        "/img/png/app/app-8.png",
        "/img/png/app/app-9.png",
        "/img/png/app/app-10.png",
        "/img/png/app/app-11.png",
        "/img/png/app/app-12.png"
    ];
    const slider1 = [
        "/img/png/app/app-1.png",
        "/img/png/app/app-2.png",
        "/img/png/app/app-3.png",
        "/img/png/app/app-4.png"
    ];
    const slider2 = [
        "/img/png/app/app-5.png",
        "/img/png/app/app-6.png",
        "/img/png/app/app-7.png",
        "/img/png/app/app-8.png"
    ];
    const slider3 = [
        "/img/png/app/app-9.png",
        "/img/png/app/app-10.png",
        "/img/png/app/app-11.png",
        "/img/png/app/app-12.png"
    ];

    return (
    <div className='section-app' id='app' ref={elementCurrentRef}>
        <div className="section-app__border section-app__border--left"></div>
        <div className="section-app__content">
            <h5 className='section-app__content--title'>
                { data["app_title"] }
            </h5>
            <p className='section-app__content--p'>
                <span>
                    { data["app_paragraph_1"] }
                </span>
            </p>
            <p className='section-app__content--p'>
                { data["app_paragraph_2"] }
            </p>
            <p className='section-app__content--p'>
                { data["app_paragraph_3"] }
            </p>
            <div className='section-app__content--banner'>
                <img src="/img/png/app/app-banner.png" alt="" />
            </div>
            <div className='app-swiper-wrapper-desktop'>
                <SwiperApp {...slider1}/>
                <SwiperApp {...slider2}/>
                <SwiperApp {...slider3}/>
            </div>
            <div className='app-swiper-wrapper-mobile'>
                <SwiperApp {...sliderMobile}/>
            </div>
            <ButtonTwoStates text_static={data["app_button"]} text_hover={data["app_button_hover"]} />
            <div className='section-app__content--download-btn'>
                <a href="https://play.google.com/store/apps/details?id=com.access.access&pli=1">
                    <img src="/img/png/android-logo.png" alt="" />
                </a>
                <a href="https://apps.apple.com/us/app/my-deals-mobile/id427118196">
                    <img src="/img/png/apple-logo.png" alt="" />
                </a>
            </div>
        </div>
        <div className="section-app__border section-app__border--right"></div>
    </div>
  )
}
