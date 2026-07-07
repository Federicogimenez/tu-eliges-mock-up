import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import ButtonSecondary from "../../../shared/components/ButtonSecondary";
import { useTranslation } from '../../../hooks/useTranslation';
import useIsInView from '../../../hooks/useIsInView';

import icon_gps from '/icons/benefits/gps.svg'
import icon_discount from '/icons/benefits/discount.svg'
import icon_permanent from '/icons/benefits/permanent.svg'
import icon_privacy from '/icons/benefits/privacy.svg'
import icon_quick from '/icons/benefits/quick.svg'
import icon_save from '/icons/benefits/save.svg'

const benefitIcons = [icon_save, icon_permanent, icon_quick, icon_gps, icon_discount, icon_privacy];

const VIEW_OPTIONS: IntersectionObserverInit = { threshold: 0.4 };

export default function BenefitsVideoSection() {
  const { t } = useTranslation();
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(videoRef, VIEW_OPTIONS);

  const benefits = benefitIcons.map((icon, index) => ({
    icon,
    title: t(`layout.benefits.items.${index}.title`),
    description: t(`layout.benefits.items.${index}.description`),
    note: index === 0 ? t(`layout.benefits.items.${index}.note`) : null,
  }));

  return (
    <section className="bg-white dark:bg-black transition-colors duration-300 pt-16 pb-10 px-4">
      <h2 className="heading-1 text-center">{t('layout.benefits.title')}</h2>
      <p className="subtitle text-center text-gray-600 dark:text-gray-400 my-[1vh] mb-8 xl:mb-10">
        {t('home.learnHow.subtitle')}
      </p>

      <div className="flex landscape:flex-row portrait:flex-col items-center gap-8 w-11/12 max-w-6xl mx-auto">
        {/* Benefits List */}
        <div className="landscape:w-1/2 portrait:w-full grid grid-cols-2 auto-rows-fr place-content-center place-items-center gap-x-6 gap-y-4 py-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-fit flex flex-col justify-start h-full items-center gap-2">
              <img src={benefit.icon} alt="icon" className="size-10 md:size-12 object-contain object-center" />
              <h3 className="text-base lg:text-xl text-center font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="landscape:w-1/2 portrait:w-full flex flex-col items-center">
          <div
            ref={videoRef}
            className="relative bg-black h-full flex items-center justify-center w-full transition-all rounded-3xl overflow-hidden
                        after:absolute after:rounded-[28px] after:left-1/2 after:top-1/2 after:-translate-1/2 after:w-full after:h-full after:cursor-pointer after:z-40"
            onClick={() => {
              setMuted(!muted);
            }}
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <ReactPlayer
                src={`https://www.youtube.com/watch?v=_QtXvDbpVcQ`}
                volume={0.5}
                muted={muted}
                width="100%"
                height="100%"
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  maxHeight: "80dvh",
                }}
                playing={isInView}
                loop
                config={{
                  youtube: {},
                }}
              />
            </div>
          </div>

          <div className="mt-8 w-11/12 mx-auto flex justify-center">
            <ButtonSecondary text={t('home.learnHow.button')} redirect={"https://uchooseitus.enjoymydeals.com/"} anchor/>
          </div>
        </div>
      </div>
    </section>
  );
}
