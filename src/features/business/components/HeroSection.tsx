import BookCallButton from "./BookCallButton";
import WaveSeparator from "./WaveSeparator";

interface HeroSectionProps {
  onBookCall: () => void
}

export default function HeroSection({ onBookCall }: HeroSectionProps) {
  return (
    <section className="text-white relative w-full h-[85dvh] min-h-[300px] flex flex-col items-center justify-end pb-14 px-2">
      <h1 className="text-3xl md:text-4xl text-center font-extrabold mb-2 leading-tight">
        <span className="text-neutral-300/80">
          Turn Your Audience
        </span>
        <br />
        <span>Into a Buying Power Network.</span>
      </h1>
      <p className="text-center">
        Give your audience private access to the largest discount network in the U.S.
      </p>
      {/* CTA */}
      <section className="text-center w-full max-w-2xl flex flex-col justify-center items-center gap-4 mt-10">
        <BookCallButton onClick={onBookCall} />
        <div className="flex flex-col items-center justify-center gap-0.5 text-[12px] text-nowrap w-fit">
          <strong className="font-semibold">
            Trusted by organizations across the U.S.
          </strong>
          <span className=" text-[10px]">
            Plug & Play · No Tecnology integration
          </span>
        </div>
      </section>
      <div className="absolute z-10 bottom-0 translate-y-1/2 left-0 w-full">
          <WaveSeparator />
      </div>
    </section>
  )
}
