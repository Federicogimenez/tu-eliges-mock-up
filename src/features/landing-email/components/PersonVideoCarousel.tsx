import { useState } from 'react'
import type { MemberVideo } from '../data'

interface PersonVideoCarouselProps {
  memberName: string
  videos: MemberVideo[]
}

/**
 * Carrusel de videos de UNA persona — CARGA ON-DEMAND.
 * Sólo el slide activo monta un <video> real (key={activeIndex} → remonta y
 * libera el anterior). Slides inactivos no existen en el DOM. preload="none".
 * Formato vertical tipo historia (9:16), object-contain (formato nativo).
 */
export default function PersonVideoCarousel({
  memberName,
  videos,
}: PersonVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (videos.length === 0) return null

  const active = videos[activeIndex]
  const go = (dir: number) => {
    setActiveIndex((i) => (i + dir + videos.length) % videos.length)
  }

  return (
    <div className="mx-auto w-full">
      <div className="relative mx-auto aspect-[9/16] h-[68vh] max-h-[620px] w-auto overflow-hidden rounded-[20px] border border-uc-line bg-black">
        <video
          key={activeIndex}
          src={active.src}
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="h-full w-full object-contain"
        />

        {(active.caption || videos.length > 1) && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {active.caption && (
              <p className="text-sm font-semibold text-white sm:text-base">
                {active.caption}
              </p>
            )}
            {videos.length > 1 && (
              <p className="uc-micro mt-0.5">
                {memberName} · {activeIndex + 1}/{videos.length}
              </p>
            )}
          </div>
        )}

        {videos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="←"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-uc-line bg-black/60 text-xl text-white transition hover:bg-blue-uchooseit"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="→"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-uc-line bg-black/60 text-xl text-white transition hover:bg-blue-uchooseit"
            >
              ›
            </button>
          </>
        )}
      </div>

      {videos.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {videos.map((v, i) => (
            <button
              key={v.src + i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === activeIndex
                  ? 'w-6 bg-blue-uchooseit'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
