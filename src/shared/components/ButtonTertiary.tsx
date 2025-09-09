import { Link } from "react-router-dom";

interface ButtonTertiaryProps{
    text: string,
    redirect: string,
    anchor?: boolean,
    classnames?: string,
}

export default function ButtonTertiary({ text, classnames, redirect, anchor=false }: ButtonTertiaryProps) {
  
  if (anchor) {
    <a
        target="_blank"
        href={redirect}
        className={`block text-center w-10/12 max-w-md px-4 py-2 cursor-pointer rounded-full text-black dark:text-white border-2 text-lg transition-all hover:-translate-y-1 ${classnames}`}
    >
        {text}
    </a>
  } else return (
    <Link
        to={redirect}
        className={`block text-center w-10/12 max-w-md px-4 py-2 cursor-pointer rounded-full text-black dark:text-white border-2 text-lg transition-all hover:-translate-y-1 ${classnames}`}
    >
        {text}
    </Link>
  )
}
