import { useInlineVideo } from '../../../hooks/useInlineVideo'
import { useWindowSize } from '../../../hooks/useWindowSize'
import LazyLoadImage from '../../../shared/components/LazyLoadImage'

import videoLatamMobile from '/latam-hero-mobile.mp4'
import videoLatamDesk from '/latam-hero-desk.mp4'
import previewMobile from '/hero-video-mobile-preview.png'
import previewDesk from '/preview-hero-video-desk.png'

/**
 * Fondo de video LATAM fijo para la maqueta landing-latam.
 * Patrón replicado de landing-email/components/VideoBackground.tsx
 * (NO importado) pero LATAM-only: sin lógica de country.
 */
export default function VideoBackgroundLatam() {
  const { width } = useWindowSize()
  const videoRef = useInlineVideo<HTMLVideoElement>()

  const isDesktop = width > 1024
  const source = isDesktop ? videoLatamDesk : videoLatamMobile
  const preview = isDesktop ? previewDesk : previewMobile

  return (
    <div className="fixed inset-0 z-0 bg-uc-black">
      <div className="relative h-full w-full opacity-50">
        <LazyLoadImage
          src={preview}
          alt="preview"
          classnames="absolute z-0 w-full h-full object-cover object-center"
        />
        <video
          className="relative z-50 h-full w-full object-cover object-center"
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
