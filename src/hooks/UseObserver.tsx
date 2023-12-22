import { useEffect, useRef, useState } from "react";

export default function UseObserver( options = {}) {

    const [isIntersecting, setIsIntersecting] = useState<boolean>()
    const elementRef = useRef<HTMLDivElement>()
    
    
    useEffect(()=>{
        const element = elementRef.current;
        
        const observer = new IntersectionObserver( entries => {
            entries.forEach( entry => setIsIntersecting(entry.isIntersecting))
        },
        options
        );

        if (element) {
            observer.observe(element)
        }

        return ()=>{ 
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    return [ elementRef, isIntersecting]
}
