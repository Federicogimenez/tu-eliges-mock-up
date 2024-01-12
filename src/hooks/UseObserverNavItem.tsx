import { useEffect, useState } from "react";

export default function UseObserverNavItem( elementRef:HTMLDivElement | null) {

    const [isIntersecting, setIsIntersecting] = useState<boolean>()

    useEffect(()=>{
        const element = elementRef;
        
        const observer = new IntersectionObserver( entries => {
            entries.forEach( entry => setIsIntersecting(entry.isIntersecting))
        },
        {
            threshold: .3
        }
        );

        if (element) {
            observer.observe(element)
        }

        return ()=>{ 
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [elementRef])

    return isIntersecting
}
