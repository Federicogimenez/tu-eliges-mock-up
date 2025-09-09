import { Link } from "react-router-dom";
import { useIsTouchDevice } from "../../../hooks/useIsTouchDevice";
import { useIsInView } from "../../../hooks/useIsInView";

interface CategoryCardProps{
    name: string,
    path: string,
    color: string,
    image: string,
    logo: string,
    number: string,
    description: string,
}

export default function CategoryCard({ name, path, color, image, logo, number, description }: CategoryCardProps) {
  
    const isTouchDevice = useIsTouchDevice()

    const isInView = useIsInView()

  return (
    <Link 
        to={path} 
        className={`group relative w-full h-full max-w-[300px]  max-h-[450px] overflow-hidden rounded-xl`}
        // style={{borderTop: `2px solid var(${color})`}}
        >
        <img src={image} alt="card bg" className="w-full h-full object-cover object-center relative opacity-100 transition-all duration-300 group-hover:opacity-50" />
        
        <div className={`absolute bottom-0 w-full h-full translate-y-full transition-all duration-500 ease-out ${ isTouchDevice ? (isInView ? 'translate-y-5' : '') : 'group-hover:translate-y-5' } `}>
            <div className="absolute inset-0 w-full h-full opacity-5 " 
                style={{background: `var(${color})`}} />
            <div className="relative flex flex-col justify-center items-center gap-y-4 p-4 bottom-0 w-full h-full" >
                <img src={logo} alt="logo" className="mx-auto w-1/3" />
                <p className="text-black dark:text-white text-lg text-center font-semibold">{description}</p>
                <p className="text-black dark:text-white text-2xl text-center font-bold ">{number}K Places</p>
            </div>
        </div>
        <div className={'absolute top-0 left-0 w-full py-0.5 h-0 flex items-center justify-center text-white dark:text-black text-lg transition-all duration-300 group-hover:h-9'} 
            style={{background: `var(${color})`}}
            >
            <span className="opacity-0 transition-all group-hover:opacity-100 ">
                {name}
            </span>
        </div>
    </Link>
  )
}
