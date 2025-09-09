import { useState } from 'react'

interface LazyLoadImageProps{
    src: string,
    alt: string,
    classnames: string,
}

export default function LazyLoadImage({ src, alt, classnames }: LazyLoadImageProps) {
    
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            loading='lazy'
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition duration-500 ease-in-out ${classnames} 
            ${loaded ? "blur-0 scale-100" : "blur-2xl scale-105"}
            `}
        />
    )
}
