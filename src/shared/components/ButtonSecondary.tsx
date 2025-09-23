import { Link } from "react-router-dom";

interface ButtonSecondaryProps{
    text: string,
    redirect: string,
    anchor?: boolean,
    classnames?: string,
}

export default function ButtonSecondary({ text, classnames, redirect, anchor=false }: ButtonSecondaryProps) {
  
  if (anchor) {
    return <a
        target="_blank"
        href={redirect}
        className={`relative block font-semibold text-center w-full max-w-md px-4 py-2 cursor-pointer rounded-full bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white text-lg transition-all duration-300 hover:-translate-y-1 ${classnames}`}
    >
        {text}
    </a>
  } else return (
    <Link
        to={redirect}
        className={`block font-semibold text-center w-full max-w-md px-4 py-2 cursor-pointer rounded-full bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white text-lg transition-all duration-300 hover:-translate-y-1 ${classnames}`}
    >
        {text}
    </Link>
  )
}
