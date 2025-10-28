import type { SubKey } from "../../../context/SavingsCalculatorModalContext";
import SavingsRow from "./SavingsRow";

interface SavingsSlideProps {
    category: {
        key: string;
        title: string;
        color: string;
        icon: string;
        subs: { key: SubKey; label: string }[];    
    },
    totalCategory: number,
    annualUses: Record<SubKey, number>;
    setAnnualUses: React.Dispatch<React.SetStateAction<Record<SubKey, number>>>;
    typical_savings: Record<SubKey, number>;
}

export default function SavingsSlide({ 
    category : { subs, color }, 
    annualUses, 
    totalCategory,
    setAnnualUses, 
    typical_savings 
}: SavingsSlideProps) {
//   const { color, subs } = category;

  return (
    <div className="w-full h-full max-w-3xl mx-auto">
        <div className="w-full flex justify-between items-center mb-3">
            <h3 className="font-bold text-2xl text-center p-1 border-b-4 "
                style={{color: color}}
                >
                    <span className="font-finger-paint scale-125 inline-block mr-2">
                        $
                    </span>
                    {totalCategory}
            </h3>
        </div>
        <div className="relative w-full h-full min-h-60 max-h-[40dvh] overflow-auto">
                {subs.map((s) => (
                    <SavingsRow
                        key={s.key}
                        label={s.label}
                        color={color}
                        annualUses={annualUses[s.key] || 0}
                        onAnnualUses={(n) => setAnnualUses((prev) => ({ ...prev, [s.key]: n }))}
                        typicalSaving={typical_savings[s.key]}
                        />
                ))}
        </div>
        {/* <div className="h-full p-5 pb-10 min-h-60 max-h-[40dvh] overflow-auto">
            <div className="h-full overflow-hidden" ref={ref}>
                {subs.map((s) => (
                    <SavingsRow
                        key={s.key}
                        label={s.label}
                        color={color}
                        annualUses={annualUses[s.key] || 0}
                        onAnnualUses={(n) => setAnnualUses((prev) => ({ ...prev, [s.key]: n }))}
                        typicalSaving={typical_savings[s.key]}
                    />
                ))}
            </div>
        </div> */}
    </div>
  );
}
