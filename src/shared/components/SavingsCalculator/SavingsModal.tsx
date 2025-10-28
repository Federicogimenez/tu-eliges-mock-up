import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


import SavingsSlide from "./SavingsSlide";


import { Currency } from "../../../utils/Currency";
import type { CategoryConfig, CatKey, SubKey } from "../../../context/SavingsCalculatorModalContext";
import { useLocation } from "react-router-dom";

interface SavingsModalProps {
  open: boolean;
  onClose: () => void;
//   slideIndex: number;
  membershipCost: number;
  setAnnualUses: React.Dispatch<React.SetStateAction<Record<SubKey, number>>>;
  resetAll: () => void;
  categories: CategoryConfig[];
  annualUses: Record<SubKey, number>;
  categoryAnnuals: Record<CatKey, number>;
  netSavings: number;
  typicalSavings: Record<SubKey, number>;
}

export default function SavingsModal({ 
    open, 
    onClose, 
    // slideIndex,
    membershipCost,
    setAnnualUses,
    categories,
    netSavings,
    annualUses,
    resetAll,
    categoryAnnuals,
    typicalSavings,
    }: SavingsModalProps) {

    const [currentSlide, setCurrentSlide] = useState(0);
  const {pathname} = useLocation();



  const [sliderRef, instanceRef] = useKeenSlider({
    initial: currentSlide,
    drag: false
  });

  function handleMoveSlider (i: number){
        setCurrentSlide(i)
        setTimeout(() => {
            instanceRef?.current?.moveToIdx(i)
        }, 100);
  }

//     useEffect(() => {
//     if (instanceRef.current) {
//       instanceRef.current.moveToIdx(currentSlide);
//       setCurrentSlide(currentSlide);
//     }
//   }, [ currentSlide]);

    useEffect(() => {
        const foundIndex = categories.findIndex((cat) => pathname.includes(cat.key));
        if (foundIndex) {
            handleMoveSlider(foundIndex);
            setTimeout(() => {
                instanceRef?.current?.moveToIdx(foundIndex)
            }, 400);
        } else{
            handleMoveSlider(0);
        }
    }, [open]);


  return (
    <>
      {open && (
        <div className="fixed animate-fade inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={onClose} />
          
          <div className="relative animate-fade bg-white dark:bg-black rounded-xl shadow-2xl max-w-5xl w-full mx-4 pt-8 h-full max-h-[90dvh] overflow-hidden"> 
            <div className="h-full flex flex-col justify-start items-center overflow-auto">
                <button onClick={onClose} className="p-2 size-10 md:size-12 absolute left-2 top-2 flex flex-col justify-center items-evenly cursor-pointer">
                    <span className="h-1 w-full rotate-45 bg-black dark:bg-white rounded-full" />
                    <span className="h-1 w-full -translate-y-1 -rotate-45 bg-black dark:bg-white rounded-full" />
                </button>

                <div className="mx-auto max-w-6xl px-4 flex justify-center gap-x-4 items-stretch mb-3">
                    <div className="w-fit flex flex-col items-center justify-center gap-y-2 md:gap-y-4 text-black dark:text-white">
                        <span className="text-xl sm:text-3xl lg:text-4xl">You pay</span>
                        <span className="text-xl sm:text-3xl lg:text-4xl font-bold ">${membershipCost}</span>
                    </div>
                    <div className="block w-1 rounded-full bg-black dark:bg-white "></div>
                    <div className="w-fit flex flex-col items-center justify-center gap-y-2 md:gap-y-4 text-green-400">
                        <span className="text-xl sm:text-3xl lg:text-4xl">You Save</span>
                        <span className="text-xl sm:text-3xl lg:text-4xl font-bold ">{Currency(netSavings)}</span>
                    </div>
                    {/* <p className="mt-2 text-center text-sm md:text-lg max-w-xl mx-auto ">Set your <span className="font-medium">annual usage</span> for each subcategory. Savings use fixed typical averages per purchase.</p> */}
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center items-center gap-4 py-[2dvh] ">
                {categories.map((cat, idx) => (
                    <button
                        key={cat.key}
                        onClick={() => {
                            handleMoveSlider(idx)
                        }}
                        style={{
                            background: currentSlide === idx ? cat.color : "transparent",
                            border: `1px solid ${cat.color}`,
                            color: `${ currentSlide === idx ? '#fff' : cat.color}`,
                            fontWeight: currentSlide === idx ? 600 : 500
                        }}
                        className={`cursor-pointer flex justify-center items-center px-3 py-0.5 rounded-full transition-transform`}
                        >
                    <img src={cat.icon} alt={cat.title} className="size-6" />
                    <span className={`text-xs hidden md:inline-block`}>
                        {cat.title}
                    </span>
                    </button>
                ))}
                </div>

                {/* Slider */}
                <div className="relative w-full px-1">
                    <div ref={sliderRef} className="keen-slider  w-full">
                        {categories.map((cat) => (
                            <div key={cat.key} className="keen-slider__slide w-full h-full">
                            <SavingsSlide 
                                category={cat}
                                setAnnualUses={setAnnualUses}
                                annualUses={annualUses}
                                typical_savings={typicalSavings} 
                                totalCategory={categoryAnnuals[cat.key]}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute right-4 top-4 w-fit max-w-md mx-auto " onClick={resetAll}>
                    <button
                        className="font-semibold border-b-2 text-black dark:text-white cursor-pointer" 
                        onClick={resetAll}>
                            <span className="block transition-all hover:-translate-y-1">
                                Reset <br className="block md:hidden"/> All
                            </span>
                    </button>
                </div>
                <footer className="py-5 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Uchooseit.us — Savings are estimates; actual savings vary by offer and usage.
                </footer>
            </div>
        </div>

        </div>
      )}
    </>
  );
}
