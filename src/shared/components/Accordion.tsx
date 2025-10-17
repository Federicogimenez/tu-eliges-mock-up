import { useState, type ReactNode } from "react";

interface AccordionProps {
  label: string;
  children: ReactNode;
}

export const Accordion = ({ label, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-gray-900">
      <button
        onClick={toggleAccordion}
        className="w-full cursor-pointer flex justify-start gap-x-4 items-center py-4 text-left group"
      >
        <span className="ml-2 lg:text-xl ">{label}</span>

        <picture className={`w-fit transition-transform duration-300 stroke-black dark:stroke-white ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </picture>

      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className=" px-4 pt-2 pb-10 text-sm lg:text-lg text-gray-700 dark:text-gray-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
