import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyImage } from '../interfaces/ImageInterface';



export const LazyLoader = (image: LazyImage ) => (
  <LazyLoadImage
    alt={image.alt}
    width={image.width}
    height={image.height}
    effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "1s"},
    }}
    src={image.src} />
);