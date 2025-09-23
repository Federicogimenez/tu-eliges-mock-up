import { useEffect, useRef, useState } from "react";

interface ButtonPrimaryProps {
  text_1?: string;
  text_2?: string;
  special?: boolean;
  src: string;
  customStyle?: string;
  fromColor?: string;
  toColor?: string;
  fromColor2?: string;
  toColor2?: string;
}

export default function ButtonPrimary (
  { 
    text_1='Unlock My Private Access', 
    text_2='Get Exclusive Discounts', 
    special=false, 
    src, 
    customStyle, 
    fromColor = 'from-blue-gradient-start/90', 
    toColor = 'to-blue-gradient-end/90',
    fromColor2 = 'from-blue-gradient-end/90',
    toColor2 = 'to-blue-gradient-start/90',
    }: ButtonPrimaryProps) {

        const intervalRef = useRef<number | null>(null)
        const [activeBtn, setActiveBtn] = useState<boolean>(false)
      

        // Auto-play functionality with pause on hover
        useEffect(() => {
          const startAutoActiveBtn = () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                setActiveBtn(!activeBtn)
            }, 3500)
          }
          
        startAutoActiveBtn()
        }, [activeBtn])

  return (
    <a href={src} 
      target="_blank" 
      className={`group block text-white relative cursor-pointer w-full  rounded-full sm:text-xl md:text-xl font-semibold hover:font-bold px-8 py-3 text-center border-2 border-white shadow-lg shadow-black/50 overflow-hidden duration-200 hover:shadow-2xl hover:-translate-y-2 ${customStyle}`}>
        <span className={`absolute block left-0 top-0 w-full h-full bg-gradient-to-r transition-all duration-500 ${activeBtn ? 'translate-x-full' : 'translate-x-0' }  ${ fromColor + ' ' + toColor}`} />
        
        <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r flex justify-center items-center transition-all duration-500  ${activeBtn ? 'translate-x-0' : '-translate-x-full' } ${ special ? ' to-yellow-400 from-yellow-950' : (fromColor2 + ' ' + toColor2) }`} >
            {special ? 'Get Special Discount' : text_2}
        </span>
        
        <span className={`relative transition-all duration-500  !text-white  ${activeBtn ? 'opacity-0' : 'opacity-100' }`}>
            {text_1}
        </span>

        <picture className={` absolute right-2 top-1/2 w-7  stroke-white dark:stroke-white scale-100 lg:-translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-105 group-hover:translate-x-0 `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </picture>
        {/* <img src={} alt="" /> */}
        {/* <span className='absolute top-1/2 left-1/2 -translate-x-[230%] -translate-y-1/2 w-full font-semibold transition-all duration-400 delay-100 group-hover:font-bold !text-white ease-out group-hover:-translate-x-1/2'>
            {special ? 'Get Special Discount' : text_2}
        </span> */}
    </a>
  )
}
