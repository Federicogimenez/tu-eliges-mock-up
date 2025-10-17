import { Link } from "react-router-dom";
import { useIsTouchDevice } from "../../../hooks/useIsTouchDevice";
import useIsInView from "../../../hooks/useIsInView";
import { useEffect, useRef } from "react";

interface CategoryCardProps {
  name: string;
  id: number;
  path: string;
  color: string;
  image: string;
  logo: string;
  number: string;
  description: string;
}

export default function CategoryCard({
  name,
  id,
  path,
  color,
  image,
  logo,
  number,
  description,
}: CategoryCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  const isTouchDevice = useIsTouchDevice();
  const isInView = useIsInView(cardRef, { threshold: 0.9 });

  useEffect(() => {
    if (id === 0 && isInView && cardRef.current) {
      cardRef.current.focus();
    }
  }, [isInView]);

  return (
    <Link
      ref={cardRef}
      to={path}
      tabIndex={0} // importante para permitir focus
      className={`group relative w-full h-full max-w-[300px] max-h-[90dvh] overflow-hidden rounded-xl outline-none focus:outline-none`}
    >
      <img
        src={image}
        alt="card bg"
        className={`w-full h-full object-cover object-center relative transition-all duration-300 
          group-hover:opacity-50 group-focus:opacity-50
          ${isTouchDevice && isInView ? "opacity-50" : "opacity-100"}
        `}
      />

      <div
        className={`absolute bottom-0 w-full h-full transition-all duration-500 ease-out delay-150
          group-hover:translate-y-5 group-focus:translate-y-5
          ${isTouchDevice && isInView ? "translate-y-5" : "translate-y-full"}
        `}
      >
        <div
          className={`absolute inset-0 w-full h-full transition-all delay-500 duration-700
            group-hover:opacity-5 group-focus:opacity-5
            ${isTouchDevice && isInView ? "opacity-5" : "opacity-0"}
          `}
          style={{ background: `var(${color})` }}
        />
        <div className="relative flex flex-col justify-center items-center gap-y-4 p-4 bottom-0 w-full h-full">
          <img src={logo} alt="logo" className="mx-auto w-1/3" />
          <p className="text-black dark:text-white text-lg text-center font-semibold">
            {description}
          </p>
          <p className="text-black dark:text-white text-2xl text-center font-bold">
            {number}K Places
          </p>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 w-full py-0.5 flex items-center justify-center text-white dark:text-black text-lg transition-all duration-500
          group-hover:h-9 group-focus:h-9
          ${isTouchDevice && isInView ? "h-9" : "h-0"}
        `}
        style={{ background: `var(${color})` }}
      >
        <span
          className={`transition-all duration-500
            group-hover:opacity-100 group-focus:opacity-100
            ${isTouchDevice && isInView ? "opacity-100" : "opacity-0"}
          `}
        >
          {name}
        </span>
      </div>
    </Link>
  );
}
