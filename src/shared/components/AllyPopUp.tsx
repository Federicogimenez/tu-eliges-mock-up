import { AnimatePresence, motion } from 'framer-motion'
import { useAllyContext } from '../../hooks/useAllyContext'
import { useTranslation } from '../../hooks/useTranslation'
import ButtonPrimary from './ButtonPrimary'

interface AllyPopUpProps {
  visible: boolean
  onClose: () => void
}

export default function AllyPopUp({ visible, onClose }: AllyPopUpProps) {
  const { code, recurlyUrl, allyData } = useAllyContext()
  const { t } = useTranslation()

  const perMonthPrice = Math.floor((allyData.new_price_after_discount * 100) / 12) / 100
  const originalPrice = allyData.membership_anual_fee.toFixed(2)
  const annualPrice = allyData.new_price_after_discount.toFixed(2) || originalPrice
  const influencerName = allyData.alliedName

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
          className="cursor-pointer size-10 p-2 fixed right-0 top-2 flex flex-col justify-center items-center"
          onClick={onClose}
        >
          <span className="w-full h-1 bg-white rounded-xl rotate-45" />
          <span className="w-full h-1 bg-white rounded-xl -translate-y-1 -rotate-45" />
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
            <h2 className="text-2xl md:text-3xl xl:text-4xl text-white font-semibold text-center mb-4">{t('components.allyPopUp.title')}</h2>
            <div className="w-fit flex flex-col landscape:flex-row-reverse justify-center items-center landscape:items-stretch gap-6 mb-6 mx-auto max-w-4xl">

              <picture className="portrait:w-full portrait:h-[30dvh] landscape:min-h-[40dvh] landscape:w-1/2 landscape:h-auto rounded-full p-1 overflow-hidden">
                <img src={allyData.alliedCompanyImg} loading="eager" alt="afiliate" className="w-full h-full object-top object-contain rounded-full" style={{ filter: 'drop-shadow(0 0 10px #ffffff50)' }} />
              </picture>

              <div className="portrait:text-center landscape:text-left flex flex-col justify-evenly items-start portrait:gap-y-4">
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
                    <span className="block landscape:inline-block mx-2 text-4xl">
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
    </motion.div>
    )}
    </AnimatePresence>
  )
}
