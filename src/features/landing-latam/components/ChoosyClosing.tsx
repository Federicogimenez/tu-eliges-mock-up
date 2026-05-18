import SubscribeButton from './SubscribeButton'
import choosySave from '/choosy-save.png'

/**
 * Sección 4 — Cierre Choosy.
 * Basado en ChoosyCTA.jsx del DS, pero usando la imagen real
 * public/choosy-save.png en lugar del placeholder dashed.
 * Grilla 2-col (copy | mascota) → 1-col en mobile.
 */
export default function ChoosyClosing() {
  return (
    <section className="relative bg-uc-black px-6 pb-32 pt-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[32px] border border-uc-line bg-[radial-gradient(60%_80%_at_80%_50%,rgba(41,149,252,0.18),transparent_70%)] px-8 py-14 text-center md:grid-cols-[1fr_300px] md:px-14 md:text-left">
        <div className="order-2 md:order-1">
          <h2 className="uc-display">
            Los mejores precios en USA{' '}
            <span className="hl">no son públicos</span>.
          </h2>
          <p className="uc-lead mx-auto mt-4 max-w-xl md:mx-0">
            Unite gratis para enterarte de los tips de ahorro que tenemos para
            vos y recibí una invitación especial a convertirte en miembro
            premium.
          </p>

          <div className="mt-7 flex justify-center md:justify-start">
            <SubscribeButton
              label="Quiero mis descuentos"
              modalTitle="Empezá a ahorrar gratis"
              modalSubtitle="Dejanos tu correo para recibir los tips de ahorro y una invitación especial a miembro premium."
            />
          </div>
          <p className="uc-micro mt-3">
            Sin tarjeta · cancelás cuando quieras.
          </p>
        </div>

        <div className="order-1 flex items-center justify-center md:order-2">
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
