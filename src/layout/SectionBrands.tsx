import SwiperBrand from "../components/SwiperBrand";

export default function SectionBrands() {

    const bigBrands = [
        [
            '/img/png/brands/big/box-a/brand-1.png',
            '/img/png/brands/big/box-a/brand-2.png',
            // '/img/png/brands/big/box-a/brand-3.png',
            // '/img/png/brands/big/box-a/brand-4.png',
            // '/img/png/brands/big/box-a/brand-5.png',
            // '/img/png/brands/big/box-a/brand-6.png',
        ],
        [
            '/img/png/brands/big/box-b/brand-1.png',
            '/img/png/brands/big/box-b/brand-2.png',
            // '/img/png/brands/big/box-b/brand-3.png',
            // '/img/png/brands/big/box-b/brand-4.png',
            // '/img/png/brands/big/box-b/brand-5.png',
            // '/img/png/brands/big/box-b/brand-6.png',
        ]
    ]
    const smallBrands = [
        [
            '/img/png/brands/small/box-a/brand-1.png',
            '/img/png/brands/small/box-a/brand-2.png',
            '/img/png/brands/small/box-a/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-b/brand-1.png',
            '/img/png/brands/small/box-b/brand-2.png',
            '/img/png/brands/small/box-b/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-c/brand-1.png',
            '/img/png/brands/small/box-c/brand-2.png',
            '/img/png/brands/small/box-c/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-d/brand-1.png',
            '/img/png/brands/small/box-d/brand-2.png',
            '/img/png/brands/small/box-d/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-e/brand-1.png',
            '/img/png/brands/small/box-e/brand-2.png',
            '/img/png/brands/small/box-e/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-f/brand-1.png',
            '/img/png/brands/small/box-f/brand-2.png',
            '/img/png/brands/small/box-f/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-g/brand-1.png',
            '/img/png/brands/small/box-g/brand-2.png',
            '/img/png/brands/small/box-g/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-h/brand-1.png',
            '/img/png/brands/small/box-h/brand-2.png',
            '/img/png/brands/small/box-h/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-i/brand-1.png',
            '/img/png/brands/small/box-i/brand-2.png',
            '/img/png/brands/small/box-i/brand-3.png',
        ],
        [
            '/img/png/brands/small/box-j/brand-1.png',
            '/img/png/brands/small/box-j/brand-2.png',
            '/img/png/brands/small/box-j/brand-3.png',
        ],
    ]

  return (
    <div className="section-brands" id="brands">
        <h5 className="section-brands__title">
            Marcas populares.
            <span> Socios de confianza</span>
        </h5>
        <p className="section-brands__p">Ahorro máximo garantizado</p>
        <div className="brands">
            <div className="brands__big">
                <div className="brands__big--item">
                    <SwiperBrand {...bigBrands[0]} />
                </div>
                <div className="brands__big--item">
                    <SwiperBrand {...bigBrands[1]} />
                </div>
            </div>
            <div className="brands__small">
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[0]} />

                    </div>
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[1]} />
                    </div>
                </div>
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[2]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[3]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[4]} />
                    </div>
                </div>
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[5]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[6]} />
                    </div>
                </div>
                <div className="brands__small-list">
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[7]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[8]} />
                    </div>
                    <div className="brands__small--item">
                        <SwiperBrand {...smallBrands[9]} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
