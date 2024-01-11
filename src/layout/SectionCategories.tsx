import { useEffect, useRef } from "react";
import SwiperCategories from "../components/SwiperCategories";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import UseObserver from "../hooks/UseObserver";

export default function SectionCategories() {
    const data = useLanguageContext();

    const elementCurrentRef = useRef<HTMLDivElement>(null)
    
    const isIntersecting  = UseObserver(elementCurrentRef.current, {threshold: .9})
    
    

    useEffect(()=>{
      if (isIntersecting) {
        console.log("categories");
        
      }
    }, [])
  return (
    <div className="section-categories" id='categories' ref={elementCurrentRef}>
        <h4>{ data["cat_title"] }</h4>
        <p>{ data["cat_subtitle"] }</p>
        <SwiperCategories />
    </div>
  )
}
