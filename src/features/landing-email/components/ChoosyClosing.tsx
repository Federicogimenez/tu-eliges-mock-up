import { useTranslation } from '../../../hooks/useTranslation'
import SubscribeButton from './SubscribeButton'
import choosySave from '/choosy-save.png'

/**
 * Sección 4 — Cierre Choosy. Mascota real + bocadillo, copy vía i18n.
 * Grilla 2-col (copy | mascota) → 1-col en mobile.
 */
export default function ChoosyClosing() {
  const { t, tHtml } = useTranslation()

  return (
    <section className="relative bg-uc-black px-6 pb-32 pt-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[32px] border border-uc-line bg-[radial-gradient(60%_80%_at_80%_50%,rgba(41,149,252,0.18),transparent_70%)] px-8 py-14 text-center md:grid-cols-[1fr_300px] md:px-14 md:text-left">
        <div className="order-2 md:order-1">
          <h2
            className="uc-display"
            dangerouslySetInnerHTML={tHtml('landingEmail.choosy.headline')}
          />
          <p className="uc-lead mx-auto mt-4 max-w-xl md:mx-0">
            {t('landingEmail.choosy.subcopy')}
          </p>

          <div className="mt-7 flex justify-center md:justify-start">
            <SubscribeButton
              label={t('landingEmail.choosy.cta')}
              modalTitle={t('landingEmail.choosy.modalTitle')}
              modalSubtitle={t('landingEmail.choosy.modalSubtitle')}
            />
          </div>
          <p className="uc-micro mt-3">{t('landingEmail.choosy.micro')}</p>
        </div>

        <div className="relative order-1 flex items-center justify-center md:order-2">
          <span className="absolute right-2 top-0 z-10 max-w-[150px] -rotate-2 rounded-2xl rounded-br-sm bg-white px-3 py-2 text-xs font-bold leading-snug text-uc-black shadow-lg md:right-0">
            {t('landingEmail.choosy.bubble')}
          </span>
          <img
            src={choosySave}
            alt="Choosy — uchooseit"
            className="max-h-[360px] w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
