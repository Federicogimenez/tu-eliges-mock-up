import { useInlineVideo } from '../../hooks/useInlineVideo'
import { useWindowSize } from '../../hooks/useWindowSize'
import LazyLoadImage from '../components/LazyLoadImage'

import videoHeroMobile from '/hero-video-mobile.mp4'
import videoHeroPreviewMobile from '/hero-video-mobile-preview.png'
import videoHeroDesk from '/hero-video-desk.mp4'
import videoHeroPreviewDesk from '/preview-hero-video-desk.png'

export default function HeroVideo() {
  const { width } = useWindowSize()
  const videoRef = useInlineVideo<HTMLVideoElement>()

  const source = width > 1024 ? videoHeroDesk : videoHeroMobile
  const preview = width > 1024 ? videoHeroPreviewDesk : videoHeroPreviewMobile

  return (
    <div className="fixed inset-0 bg-black">
      <div className="relative w-full h-full opacity-50">
        <LazyLoadImage
          src={preview}
          alt="preview"
          classnames="absolute z-0 w-full h-full object-cover object-center"
        />
        <video
          className="relative z-50 w-full h-full object-cover object-center"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          controls={false}
        >
          <source src={source} type="video/mp4" />
          Your browser can't support this video
        </video>
      </div>
    </div>
  )
}
