import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyImage } from '../interfaces/ImageInterface';



export const LazyImageComponent = (image: LazyImage ) => (
  <LazyLoadImage
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    className={image.class}
    effect="blur"
    style={{transition:'all .4s ease', transform: 'scale(1)'}}
    wrapperProps={{style: {transitionDelay: "1s"},}}
    />
);