import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useAllyContext } from '../../hooks/useAllyContext'
import { useTranslation } from '../../hooks/useTranslation'
import ButtonPrimary from './ButtonPrimary'

interface AllyPopUpProps {
  visible: boolean
  onClose: () => void
}

const ALLY_VIDEOS: Record<string, string> = { k2: '/K2.mp4', mycommunitypharmacy: '/MFC.mp4' }

const MuteIcon = ({ isMuted }: { isMuted: boolean }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 9v6h4l5 5V4L8 9H4z" fill="white" />
    {isMuted ? (
      <path d="M16 9l5 5m0-5l-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    ) : (
      <path d="M16.5 8.5a5 5 0 010 7M19 6a9 9 0 010 12" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    )}
  </svg>
)

export default function AllyPopUp({ visible, onClose }: AllyPopUpProps) {
  const { code, recurlyUrl, allyData, rawCode } = useAllyContext()
  const { t } = useTranslation()
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const expandedVideoRef = useRef<HTMLVideoElement>(null)

  const perMonthPrice = Math.floor((allyData.new_price_after_discount * 100) / 12) / 100
  const originalPrice = allyData.membership_anual_fee.toFixed(2)
  const annualPrice = allyData.new_price_after_discount.toFixed(2) || originalPrice
  const influencerName = allyData.alliedName
  const allyVideo = rawCode ? ALLY_VIDEOS[rawCode.toLowerCase()] : undefined

  useEffect(() => {
    const video = videoRef.current
    if (!visible || !allyVideo || !video) return

    let unregisterUnmuteOnInteraction: (() => void) | undefined

    video.play().catch(() => {
      video.muted = true
      setIsMuted(true)
      video.play().catch(() => {})

      const unmuteOnInteraction = () => {
        window.removeEventListener('pointerdown', unmuteOnInteraction)
        window.removeEventListener('keydown', unmuteOnInteraction)

        video.muted = false
        if (expandedVideoRef.current) {
          expandedVideoRef.current.muted = false
        }
        setIsMuted(false)
        video.play().catch(() => {})
      }

      window.addEventListener('pointerdown', unmuteOnInteraction)
      window.addEventListener('keydown', unmuteOnInteraction)

      unregisterUnmuteOnInteraction = () => {
        window.removeEventListener('pointerdown', unmuteOnInteraction)
        window.removeEventListener('keydown', unmuteOnInteraction)
      }
    })

    return () => {
      unregisterUnmuteOnInteraction?.()
    }
  }, [visible, allyVideo])

  const handleExpand = () => {
    videoRef.current?.pause()
    setIsExpanded(true)
  }

  const handleCollapse = () => {
    const expanded = expandedVideoRef.current
    const small = videoRef.current
    if (expanded && small) {
      small.currentTime = expanded.currentTime
      small.play().catch(() => {})
    }
    setIsExpanded(false)
  }

  const setExpandedVideoRef = (node: HTMLVideoElement | null) => {
    expandedVideoRef.current = node
    if (node && videoRef.current) {
      node.currentTime = videoRef.current.currentTime
      node.play().catch(() => {})
    }
  }

  return (
    <AnimatePresence>
    {visible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed z-[10000] inset-0 bg-gradient-to-b from-black/50 to-black flex justify-center items-center py-[5dvh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0" onClick={onClose} />
      <div autoFocus className="relative overflow-auto mx-auto flex justify-center items-start px-6 py-8 w-11/12 portrait:h-full landscape:h-fit min-h-[400px] max-w-5xl bg-gradient-to-b from-black/50 backdrop-blur-xl to-blue-gradient-end/50 rounded-2xl shadow-2xl">

        <button
          className="cursor-pointer size-8 p-2 fixed right-0 top-2 flex flex-col justify-center items-center"
          onClick={onClose}
        >
          <span className="w-full h-0.5 bg-white/80 rounded-xl rotate-45" />
          <span className="w-full h-0.5 bg-white/80 rounded-xl -translate-y-0.5 -rotate-45" />
        </button>

        {allyData.isLoading ? (
          <div className="h-full flex flex-col justify-center items-center gap-y-6">
            <h3 className="subtitle text-gray-300 text-center mb-4">
              {t('components.allyPopUp.loading')}
            </h3>
            <picture className="relative animate-bounce size-28 lg:size-40 rounded-full flex justify-center items-center overflow-hidden bg-blue-uchooseit">
              <img src="/icons/present.svg" alt="present" className="w-3/5" />
            </picture>
          </div>
        ) : allyData.userNotFound ? null : (
          <div className="w-full flex flex-col justify-start items-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl text-white font-semibold text-center mb-4">{t('components.allyPopUp.title')}</h2>
            <div className="w-full flex flex-col landscape:flex-row-reverse justify-center items-center landscape:items-stretch gap-6 mb-6 mx-auto max-w-4xl">

              {allyVideo ? (
                <div
                  className="relative w-fit h-fit cursor-pointer"
                  onClick={handleExpand}
                  role="button"
                  aria-label="Expand video"
                >
                  <video
                    ref={videoRef}
                    src={allyVideo}
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    className="absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[90.8%] h-[96.4%] object-contain bg-black"
                    style={{ borderRadius: '9% / 4.5%' }}
                  />
                  <img src="/frame-iphone.png" alt="iphone" className="relative z-30 portrait:h-[38dvh] landscape:h-[48dvh] w-auto pointer-events-none select-none" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsMuted((prev) => !prev)
                    }}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="absolute bottom-[5%] right-[6%] z-40 size-10 rounded-full bg-black/60 flex items-center justify-center"
                  >
                    <MuteIcon isMuted={isMuted} />
                  </button>
                </div>
              ) : (
                <picture className="portrait:w-full portrait:h-[30dvh] landscape:min-h-[40dvh] landscape:w-1/3 landscape:h-auto rounded-full p-1 overflow-hidden">
                  <img src={allyData.alliedCompanyImg} loading="eager" alt="afiliate" className="w-full h-full object-top object-contain rounded-full" style={{ filter: 'drop-shadow(0 0 10px #ffffff50)' }} />
                </picture>
              )}

              <div className="portrait:text-center flex-1 landscape:text-left flex flex-col justify-evenly items-start portrait:gap-y-4">
                <h3 className="relative text-neutral-300 text-lg sm:text-xl lg:text-2xl text-balance w-fit leading-[1.4]">
                  {t('components.allyPopUp.joinCommunity', { name: influencerName || '' })}
                  <strong className="mx-2 text-white">
                    {t('components.allyPopUp.discountOff', { discount: String(allyData.discount_percent) })}
                  </strong>
                  {t('components.allyPopUp.membershipPurchase')}
                </h3>
                <p className="w-full font-semibold relative text-xl lg:text-3xl text-gray-900 dark:text-white">
                  {t('components.allyPopUp.equivalentTo')} <br className="portrait:block landscape:hidden" />
                  <span className="shiny-lightblue-text text-xl uppercase font-semibold">
                    <span className="inline-block mx-2 text-4xl">
                      ${perMonthPrice}
                    </span>
                    {t('components.allyPopUp.perMonth')}
                  </span>
                </p>
                <p className="subtitle w-full text-gray-100 dark:text-white">
                  {t('components.allyPopUp.billedAnnually')} <br className="portrait:block landscape:hidden" />
                  {allyData.alliedCuponCode == '' ? (
                    <span className="ml-2 text-green-400">
                      ${annualPrice}
                    </span>
                  ) : (
                    <>
                      <span className="mx-2 text-red-400 line-through">
                        ${originalPrice}
                      </span>
                      <span className="text-green-400">
                        ${annualPrice}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="w-full max-w-lg mx-auto">
              <ButtonPrimary src={code ? code : recurlyUrl} text_1={t('components.allyPopUp.claimDiscount', { discount: String(allyData.discount_percent) })} />
              <p className="text-sm text-gray-200 flex gap-x-2 justify-center items-center mt-4 animate-appear-up" style={{ animationDelay: '.5s' }}>
                <img src="/icons/stars.svg" alt="guarantee" className="w-[50px]" />
                {t('components.allyPopUp.trustedBy')}
              </p>
            </div>
          </div>
        )}
      </div>

      {isExpanded && allyVideo && (
        <div
          className="absolute inset-0 z-50 bg-black/90 flex justify-center items-center"
          onClick={handleCollapse}
        >
          <div className="relative w-fit h-fit" onClick={(e) => e.stopPropagation()}>
            <video
              ref={setExpandedVideoRef}
              src={allyVideo}
              loop
              playsInline
              muted={isMuted}
              className="absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[90.8%] h-[96.4%] object-cover bg-black"
              style={{ borderRadius: '9% / 4.5%' }}
            />
            <img src="/frame-iphone.png" alt="iphone" className="relative z-30 h-[96dvh] max-w-[92vw] w-auto object-contain pointer-events-none select-none" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsMuted((prev) => !prev)
              }}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="absolute bottom-[5%] right-[6%] z-40 size-10 rounded-full bg-black/60 flex items-center justify-center"
            >
              <MuteIcon isMuted={isMuted} />
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleCollapse()
            }}
            aria-label="Close video"
            className="cursor-pointer size-8 p-2 absolute top-2 right-2 z-50 flex flex-col justify-center items-center"
          >
            <span className="w-full h-0.5 bg-white/80 rounded-xl rotate-45" />
            <span className="w-full h-0.5 bg-white/80 rounded-xl -translate-y-0.5 -rotate-45" />
          </button>
        </div>
      )}
    </motion.div>
    )}
    </AnimatePresence>
  )
}
