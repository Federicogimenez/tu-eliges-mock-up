import BookCallButton from "./BookCallButton";
import TypewriterWord from "./TypewriterWord";
import WaveSeparator from "../../../shared/components/WaveSeparator";
import { useTranslation } from '../../../hooks/useTranslation';

interface HeroSectionProps {
  onBookCall: () => void
}

export default function HeroSection({ onBookCall }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="text-white relative w-full h-[85dvh] min-h-[300px] flex flex-col items-center justify-end pb-14 px-2">
      <h1 className="text-3xl md:text-4xl text-center font-extrabold mb-2 leading-tight">
        <span className="text-neutral-300/80">
          {t('business.hero.titlePrefix')}
        </span>
        <br />
        <span>
          <TypewriterWord words={t('business.hero.words').split(',')} />
        </span>
      </h1>
      <p className="text-center">
        {t('business.hero.description')}
      </p>
      {/* CTA */}
      <section className="text-center w-full max-w-2xl flex flex-col justify-center items-center gap-4 mt-10">
        <BookCallButton onClick={onBookCall} />
        <div className="flex flex-col items-center justify-center gap-0.5 text-[12px] text-nowrap w-fit">
          <strong className="font-semibold">
            {t('business.hero.trustedBy')}
          </strong>
          <span className=" text-[10px]">
            {t('business.hero.plugAndPlay')}
          </span>
        </div>
      </section>
      <div className="absolute z-10 bottom-0 translate-y-1/2 left-0 w-full">
          <WaveSeparator />
      </div>
    </section>
  )
}
