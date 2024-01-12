import { useEffect, useRef } from "react";
import SwiperCategories from "../components/SwiperCategories";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import UseObserverNavItem from "../hooks/UseObserverNavItem";

export default function SectionCategories() {
    const data = useLanguageContext();
    
    const elementCurrentRef = useRef<HTMLDivElement>(null)
    const isIntersecting  = UseObserverNavItem(elementCurrentRef.current)
    
    if (isIntersecting) {
      document.querySelector('#nav-item-categories')?.classList.add('active')
    }else{
      document.querySelector('#nav-item-categories')?.classList.remove('active')
    }
    useEffect(()=>{
      if (isIntersecting) {
        document.querySelector('#nav-item-categories')?.classList.add('active')
      }else{
        document.querySelector('#nav-item-categories')?.classList.remove('active')
      }
    }, [isIntersecting])

  
    return (
    <div className="section-categories" id='categories' ref={elementCurrentRef}>
        <h4>{ data["cat_title"] }</h4>
        <p>{ data["cat_subtitle"] }</p>
        <SwiperCategories />
    </div>
  )
}
