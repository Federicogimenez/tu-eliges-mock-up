import { useEffect, useState } from "react";

export default function UseObserver( elementRef:HTMLDivElement | null, options = {}) {

    const [isIntersecting, setIsIntersecting] = useState<boolean>()
    
    
    useEffect(()=>{
        const element = elementRef;
        
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

    return isIntersecting
}
