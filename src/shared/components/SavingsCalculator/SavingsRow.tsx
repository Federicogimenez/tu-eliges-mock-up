import { Currency } from "../../../utils/Currency";

interface SavingsRowProps {
  label: string;
  color: string;
  annualUses: number;
  onAnnualUses: (n: number) => void;
  typicalSaving: number;
}

export default function SavingsRow({ label, color, annualUses, onAnnualUses, typicalSaving }: SavingsRowProps){
  
    const annual = annualUses * typicalSaving;

  return (
    <div className="rounded-xl w-full border p-4 ">
      <div className="flex flex-col gap-3 md:grid md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div className="text font-semibold ">{label}</div>
          <div className="text-sm text-gray-700 dark:text-gray-300">Annual frequency x typical saving</div>
        </div>
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={70}
              step={1}
              value={annualUses}
              onChange={(e) => onAnnualUses(Number(e.target.value))}
              className="w-full accent-current"
              style={{ accentColor: color }}
            />
            <div className="w-14 text-right tabular-nums">{annualUses}</div>
            <span className="text-xs text-gray-700 dark:text-gray-300">/yr</span>
          </div>
        </div>
        <div className="md:col-span-3 text-right">
          <div className="text-xs text-gray-700 dark:text-gray-300">Typical saving/purchase</div>
          <div className="font-medium">${typicalSaving}</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-gray-700 dark:text-gray-300">Annualized: {annualUses} x ${typicalSaving}</div>
        <div className="font-medium">{Currency(annual)}</div>
      </div>
    </div>
  );
}