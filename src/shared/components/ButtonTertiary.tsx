import { Link } from "react-router-dom";

interface ButtonTertiaryProps{
    text: string,
    redirect?: string,
    anchor?: boolean,
    classnames?: string,
}

export default function ButtonTertiary({ text, classnames, redirect, anchor=false }: ButtonTertiaryProps) {
  
  if (redirect) {
    if (anchor) {
      <a
          target="_blank"
          href={redirect}
          className={`block w-full max-w-md text-center px-4 py-2 cursor-pointer rounded-full border-2 text-lg transition-all duration-300 hover:-translate-y-1 ${classnames}`}
      >
          {text}
      </a>
    } else return (
        <Link
            to={redirect}
            className={`block w-full max-w-md text-center px-4 py-2 cursor-pointer rounded-full border-2 text-lg transition-all duration-300 hover:-translate-y-1 ${classnames}`}
        >
            {text}
        </Link>
      )
  } else return (
        <button
          className={`block w-full text-center px-4 py-2 cursor-pointer rounded-full border-2 text-lg transition-all duration-300 hover:-translate-y-1 ${classnames}`}
      >
          {text}
      </button>
  )
}
