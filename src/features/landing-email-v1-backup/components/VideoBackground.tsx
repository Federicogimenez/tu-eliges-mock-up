import { useInlineVideo } from '../../../hooks/useInlineVideo'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useCountry } from '../../../hooks/useCountry'
import LazyLoadImage from '../../../shared/components/LazyLoadImage'

import videoHeroMobile from '/hero-video-mobile.mp4'
import videoHeroPreviewMobile from '/hero-video-mobile-preview.png'
import videoHeroDesk from '/hero-video-desk.mp4'
import videoHeroPreviewDesk from '/preview-hero-video-desk.png'
import videoLatamMobile from '/latam-hero-mobile.mp4'
import videoLatamDesk from '/latam-hero-desk.mp4'

export default function VideoBackground() {
  const { width } = useWindowSize()
  const { country } = useCountry()
  const videoRef = useInlineVideo<HTMLVideoElement>()

  const isDesktop = width > 1024
  const source = country !== 'usa'
    ? (isDesktop ? videoLatamDesk : videoLatamMobile)
    : (isDesktop ? videoHeroDesk : videoHeroMobile)
  const preview = isDesktop ? videoHeroPreviewDesk : videoHeroPreviewMobile

  return (
    <div className="fixed inset-0 z-0 bg-black">
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
        </video>
      </div>
    </div>
  )
}
