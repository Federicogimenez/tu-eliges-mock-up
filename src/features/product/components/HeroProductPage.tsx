import { DiamondIcons } from '../../home/components/DiamondIcons'
import presentation from '/product_page_presentation.png'


export default function HeroProductPage() {
  return (
    <section className="h-full w-full min-h-dvh flex flex-col lg:flex-row justify-center items-center gap-x-5 gap-y-20 max-w-6xl mx-auto pt-[20dvh]">
        <div className="w-10/12 lg:pl-[5dvw]">
            <div className="w-fit mx-auto">
                <h3 className="heading-1 font-semibold text-center lg:text-left">
                    Start saving in minutes
                </h3>
                <p className='subtitle text-balance text-gray-900 dark:text-white text-center lg:text-left my-8'>
                    Learn how to join, activate, and save with your Uchooseit.us membership.
                </p>
            </div>

            <div className=" flex justify-between items-center gap-x-5">
              <div className="flex flex-col text-center justify-center gap-x-3 items-center ">
                <span className="font-finger-paint text-6xl md:text-8xl">1</span>
                <p className="text-lg md:text-xl">Show &<br /> Redeem </p>
              </div>
              <div className="flex flex-col text-center justify-center gap-x-3 items-center ">
                <span className="font-finger-paint text-6xl md:text-8xl">2</span>
                <p className="text-lg md:text-xl">Choose a <br /> discount</p>
              </div>
              <div className="flex flex-col text-center justify-center gap-x-3 items-center ">
                <span className="font-finger-paint text-6xl md:text-8xl">3</span>
                <p className="text-lg md:text-xl">Save <br /> instantly </p>
              </div>
            </div>

        </div>

        <div className="w-full flex justify-center items-center">
            <div className="relative w-fit">
                <picture className='block mx-auto w-8/12 rounded-full p-1 border-2 border-amber-300'>
                    <img src={presentation} alt="presentation" className='w-full object-cover object-center rounded-full ' />
                </picture>
                <div className='w-full h-full absolute top-1/2 left-1/2 -translate-1/2 scale-125'>
                    <DiamondIcons />
                </div>
            </div>
        </div>
    </section>
  )
}
