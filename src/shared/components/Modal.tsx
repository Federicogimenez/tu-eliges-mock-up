interface ModaleProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className = "",
}: ModaleProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 backdrop-blur-xs animate-appear-up">
      <div
        className="absolute w-full h-full inset-0 bg-black-950/35"
        onClick={onClose}
      />
      <div
        className={`relative text-black bg-white rounded-lg shadow-xl w-11/12 max-w-5xl h-[90dvh] p-6 ${className}`}
      >
        <button
          onClick={onClose}
          className="sticky top-0 right-0 ml-auto z-40 flex flex-col justify-between items-center size-6"
        >
          <span className="w-full h-[3px] bg-black rotate-45 origin-left translate-y-[2px]"></span>
          <span className="w-full h-[3px] bg-black -rotate-45 origin-left translate-y-[-2px]"></span>
        </button>

        <div className="relative w-full h-full">{children}</div>
      </div>
    </div>
  );
}
