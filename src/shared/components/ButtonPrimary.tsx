
interface ButtonPrimaryProps {
  text_1?: string;
  text_2?: string;
  special?: boolean;
  src: string
}

export default function ButtonPrimary ({ text_1='Get My Membership & Save', text_2='Get Exclusive Discounts', special=false, src }: ButtonPrimaryProps) {

  return (
    <a href={src} target="_blank" className="group inline-block relative cursor-pointer w-full max-w-md rounded-full text-sm md:text-lg px-8 py-4 text-center border-2 border-white shadow-lg shadow-black/50 overflow-hidden">
        <span className={`absolute left-0 top-0 w-full h-full bg-gradient-to-r to-blue-gradient-start from-blue-gradient-end transition-all duration-300 ${special ? 'group-hover:to-yellow-950 group-hover:from-yellow-600' : 'group-hover:translate-x-full'} `} />
        {
          special ? null :
          <span className={`absolute left-0 top-0 -translate-x-full w-full h-full bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end transition-all duration-300 group-hover:translate-x-0 `} />
        }
        <span className='relative font-semibold transition-all duration-500 group-hover:font-bold !text-white  group-hover:opacity-0'>
            {text_1}
        </span>
        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[150%] w-full font-semibold transition-all duration-400 delay-100 group-hover:font-bold !text-white ease-out group-hover:-translate-y-1/2'>
            {special ? 'Get Special Discount' : text_2}
        </span>
    </a>
  )
}
