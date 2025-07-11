import { useState, ReactNode } from "react";

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
        className="w-full flex justify-between items-center py-4 text-left group"
      >
        <span className="ml-2 text-2xl lg:text-3xl font-bold">{label}</span>
        <img src="/img/svg/chevron.svg"
          className={`size-8 transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-10 text-xl lg:text-2xl text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  );
};
