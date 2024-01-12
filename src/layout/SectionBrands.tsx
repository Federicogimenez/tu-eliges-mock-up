import { useEffect, useRef } from "react";
import SwiperBrandBig from "../components/SwiperBrandBig";
import SwiperBrandSmall from "../components/SwiperBrandSmall";
import { useLanguageContext } from "../hooks/UseLanguageContext";
import UseObserverNavItem from "../hooks/UseObserverNavItem";

export default function SectionBrands() {

    const data = useLanguageContext();

    const elementCurrentRef = useRef<HTMLDivElement>(null)
    const isIntersecting  = UseObserverNavItem(elementCurrentRef.current)
    if (isIntersecting) {
        document.querySelector('#nav-item-brands')?.classList.add('active')
    }else{
        document.querySelector('#nav-item-brands')?.classList.remove('active')
    }

    useEffect(() => {
        if (isIntersecting) {
            document.querySelector('#nav-item-brands')?.classList.add('active')
        }else{
            document.querySelector('#nav-item-brands')?.classList.remove('active')
        }
    }, [isIntersecting])
    

    const bigBrands = [
        [
            '/img/png/brands/big/box-a/brand-1.webp',
            '/img/png/brands/big/box-a/brand-2.webp',
            '/img/png/brands/big/box-a/brand-3.webp',
            '/img/png/brands/big/box-a/brand-4.webp',
            '/img/png/brands/big/box-a/brand-5.webp',
            '/img/png/brands/big/box-a/brand-6.webp',
        ],
        [
            '/img/png/brands/big/box-b/brand-1.webp',
            '/img/png/brands/big/box-b/brand-2.webp',
            '/img/png/brands/big/box-b/brand-3.webp',
            '/img/png/brands/big/box-b/brand-4.webp',
            '/img/png/brands/big/box-b/brand-5.webp',
            '/img/png/brands/big/box-b/brand-6.webp',
        ]
    ]
    const smallBrands = [
        [
            '/img/png/brands/small/box-a/brand-1.webp',
            '/img/png/brands/small/box-a/brand-2.webp',
            '/img/png/brands/small/box-a/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-b/brand-1.webp',
            '/img/png/brands/small/box-b/brand-2.webp',
            '/img/png/brands/small/box-b/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-c/brand-1.webp',
            '/img/png/brands/small/box-c/brand-2.webp',
            '/img/png/brands/small/box-c/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-d/brand-1.webp',
            '/img/png/brands/small/box-d/brand-2.webp',
            '/img/png/brands/small/box-d/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-e/brand-1.webp',
            '/img/png/brands/small/box-e/brand-2.webp',
            '/img/png/brands/small/box-e/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-f/brand-1.webp',
            '/img/png/brands/small/box-f/brand-2.webp',
            '/img/png/brands/small/box-f/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-g/brand-1.webp',
            '/img/png/brands/small/box-g/brand-2.webp',
            '/img/png/brands/small/box-g/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-h/brand-1.webp',
            '/img/png/brands/small/box-h/brand-2.webp',
            '/img/png/brands/small/box-h/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-i/brand-1.webp',
            '/img/png/brands/small/box-i/brand-2.webp',
            '/img/png/brands/small/box-i/brand-3.webp',
        ],
        [
            '/img/png/brands/small/box-j/brand-1.webp',
            '/img/png/brands/small/box-j/brand-2.webp',
            '/img/png/brands/small/box-j/brand-3.webp',
        ],
    ]

  return (
    <div className="section-brands" id="brands" ref={elementCurrentRef}>
        <h5 className="section-brands__title">
            { data["brands_title"] }
        </h5>
        <p className="section-brands__p">
            { data["brands_subtitle"] }
        </p>
        <div className="brands">
            <div className="brands__big">
                <div className="brands__big--item">
                    <SwiperBrandBig key={1} {...bigBrands[0]} />
                </div>
                <div className="brands__big--item">
                    <SwiperBrandBig key={2} {...bigBrands[1]} />
                </div>
            </div>
            <div className="brands__small">
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={3} {...smallBrands[0]} />

                    </div>
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={4} {...smallBrands[1]} />
                    </div>
                </div>
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={5} {...smallBrands[2]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={6} {...smallBrands[3]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={7} {...smallBrands[4]} />
                    </div>
                </div>
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={8} {...smallBrands[5]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={9} {...smallBrands[6]} />
                    </div>
                </div>
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={10} {...smallBrands[7]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={11} {...smallBrands[8]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrandSmall key={12} {...smallBrands[9]} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
