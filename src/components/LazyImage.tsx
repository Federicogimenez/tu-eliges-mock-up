import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyImage } from '../interfaces/ImageInterface';



export const LazyImageComponent = (image: LazyImage ) => (
  <LazyLoadImage
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    effect="blur"
    wrapperProps={{style: {transitionDelay: "1s"},}}
    />
);