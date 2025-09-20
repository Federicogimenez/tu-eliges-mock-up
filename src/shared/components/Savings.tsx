import React, { useMemo, useState } from "react";

import icon_dining from '/icons/category/dining.png'
import icon_travel from '/icons/category/travel.png'
import icon_shop from '/icons/category/shop.png'
import icon_entertainment from '/icons/category/entertainment.png'
import ButtonTertiary from "./ButtonTertiary";

// Uchooseit.us — Savings Calculator (TSX)
// Annual sliders per subcategory + fixed Typical Savings + ROI

// ---- Types -----------------------------------------------------------------
export type CatKey = "dining" | "shopping" | "entertainment" | "travel";
export type SubKey =
  | "Breakfast_Coffee"
  | "Lunch"
  | "Dinner"
  | "Pizza"
  | "Apparel"
  | "Self_Care"
  | "Flowers_Gifts"
  | "Home_Projects"
  | "Oil_Changes"
  | "Misc_Shopping"
  | "Cell_Phone_Plan"
  | "Theme_Park_Attraction"
  | "Bowling_Laser_MiniGolf"
  | "Concerts_Sports_Events"
  | "Movies"
  | "Golf"
  | "Hotel_Stays"
  | "Car_Rental"
  | "Flights";

interface CategoryConfig {
  key: CatKey;
  title: string;
  color: string;
  icon: string;
  subs: { key: SubKey; label: string }[];
}

// ---- Utils -----------------------------------------------------------------
const currency = (n: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(n || 0);

// ---- Constants --------------------------------------------------------------
const BRAND_COLORS: Record<CatKey | "travel" | "entertainment" | "dining" | "shopping", string> = {
  travel: "#00b3eb",
  entertainment: "#e82c8d",
  dining: "#f5b800",
  shopping: "#884cfc",
};

// Fixed Typical Savings per Purchase (not editable by the public)
const TYPICAL_SAVINGS: Record<SubKey, number> = {
  Breakfast_Coffee: 3,
  Lunch: 3,
  Dinner: 5,
  Pizza: 8,
  Apparel: 15,
  Self_Care: 15,
  Flowers_Gifts: 10,
  Home_Projects: 50,
  Oil_Changes: 10,
  Misc_Shopping: 12.5,
  Cell_Phone_Plan: 125,
  Theme_Park_Attraction: 40,
  Bowling_Laser_MiniGolf: 5,
  Concerts_Sports_Events: 20,
  Movies: 3,
  Golf: 15,
  Hotel_Stays: 30,
  Car_Rental: 27,
  Flights: 20,
};

const CATEGORIES: CategoryConfig[] = [

  {
    key: "shopping",
    title: "Shop",
    color: BRAND_COLORS.shopping,
    icon: icon_shop,
    subs: [
      { key: "Apparel", label: "Apparel" },
      { key: "Self_Care", label: "Self-Care" },
      { key: "Flowers_Gifts", label: "Flowers/Gifts" },
      { key: "Home_Projects", label: "Home Projects" },
      { key: "Oil_Changes", label: "Oil Changes" },
      { key: "Misc_Shopping", label: "Misc. Shopping" },
      { key: "Cell_Phone_Plan", label: "Cell Phone Plan" },
    ],
  },
  {
    key: "travel",
    title: "Travel",
    color: BRAND_COLORS.travel,
    icon: icon_travel,
    subs: [
      { key: "Hotel_Stays", label: "Hotel Stays" },
      { key: "Car_Rental", label: "Car Rental" },
      { key: "Flights", label: "Flights" },
    ],
  },
    {
    key: "dining",
    title: "Dining",
    color: BRAND_COLORS.dining,
    icon: icon_dining,
    subs: [
      { key: "Breakfast_Coffee", label: "Breakfast/Coffee" },
      { key: "Lunch", label: "Lunch" },
      { key: "Dinner", label: "Dinner" },
      { key: "Pizza", label: "Pizza" },
    ],
  },
    {
    key: "entertainment",
    title: "Entertainment",
    color: BRAND_COLORS.entertainment,
    icon: icon_entertainment,
    subs: [
      { key: "Theme_Park_Attraction", label: "Theme Park / Attractions" },
      { key: "Bowling_Laser_MiniGolf", label: "Bowling / Laser Tag / Mini Golf" },
      { key: "Concerts_Sports_Events", label: "Concerts / Sports / Events" },
      { key: "Movies", label: "Movies" },
      { key: "Golf", label: "Golf" },
    ],
  },
];

interface SavingsProps{
    membershipCost: number;
}


// ---- App -------------------------------------------------------------------
export default function Savings ({membershipCost}: SavingsProps){
  // Annual frequency per subcategory
  const [annualUses, setAnnualUses] = useState<Record<SubKey, number>>(() => {
    const initial = Object.keys(TYPICAL_SAVINGS).reduce((acc, k) => {
      acc[k as SubKey] = 0;
      return acc;
    }, {} as Record<SubKey, number>);
    // initial dining
    initial.Breakfast_Coffee = 52;
    initial.Lunch = 24;
    initial.Dinner = 52;
    initial.Pizza = 24;
// initial shop
    initial.Apparel = 8;
    initial.Self_Care = 6;
    initial.Flowers_Gifts = 4;
    initial.Home_Projects = 2;
    initial.Oil_Changes = 4;
    initial.Misc_Shopping = 8;
    initial.Cell_Phone_Plan = 1;
// initial entertainment
    initial.Theme_Park_Attraction = 4;
    initial.Bowling_Laser_MiniGolf = 4;
    initial.Concerts_Sports_Events = 4;
    initial.Movies = 6;
    initial.Golf = 4;
    // initial travel
    initial.Hotel_Stays = 7;
    initial.Car_Rental = 5;
    initial.Flights = 5;
    return initial;
  });

//   const [membershipCost, setMembershipCost] = useState<number>(48);

  const categoryAnnuals = useMemo<Record<CatKey, number>>(() => {
    const out = {} as Record<CatKey, number>;
    for (const cat of CATEGORIES) {
      let sum = 0;
      for (const sub of cat.subs) {
        const uses = annualUses[sub.key] || 0;
        const per = TYPICAL_SAVINGS[sub.key] || 0;
        sum += uses * per;
      }
      out[cat.key] = sum;
    }
    return out;
  }, [annualUses]);

  const total = (Object.values(categoryAnnuals) as number[]).reduce((a, b) => a + b, 0);
  const netSavings = Math.max(0, total - membershipCost);
//   const roiMultiple = membershipCost > 0 ? total / membershipCost : 0;

  const resetAll = (): void => {
    const reset = Object.keys(TYPICAL_SAVINGS).reduce((acc, k) => {
      acc[k as SubKey] = 0;
      return acc;
    }, {} as Record<SubKey, number>);
    setAnnualUses(reset);
    // setMembershipCost();
  };

  return (
    <div className="h-full w-full ">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 flex justify-center gap-x-4 items-stretch my-8">
        <div className="w-fit flex flex-col items-center justify-center gap-y-2 md:gap-y-4 text-black dark:text-white">
            <span className="text-xl sm:text-3xl lg:text-4xl">You pay</span>
            <span className="text-xl sm:text-3xl lg:text-4xl font-bold ">${membershipCost}</span>
        </div>
        <div className="block w-1 rounded-full bg-black dark:bg-white "></div>
        <div className="w-fit flex flex-col items-center justify-center gap-y-2 md:gap-y-4 text-green-400">
            <span className="text-xl sm:text-3xl lg:text-4xl">You Save</span>
            <span className="text-xl sm:text-3xl lg:text-4xl font-bold ">{currency(netSavings)}</span>
        </div>
        {/* <p className="mt-2 text-center text-sm md:text-lg max-w-xl mx-auto ">Set your <span className="font-medium">annual usage</span> for each subcategory. Savings use fixed typical averages per purchase.</p> */}
      </div>

      {/* Category Groups */}
      <div className="relative grid mx-auto max-w-6xl px-4 pb-10 gap-6 h-full min-h-[380px] max-h-[80dvh] overflow-auto">
        {CATEGORIES.map((cat, i) => (
          <CategoryGroup
            key={i}
            category={cat}
            annualUses={annualUses}
            setAnnualUses={setAnnualUses}
            annual={categoryAnnuals[cat.key]}
            openDefault={ false }
          />
        ))}
      </div>

      {/* Breakdown + ROI */}
      <div className="relative mx-auto max-w-6xl px-4 mt-8">
        <div className="absolute -top-5 -translate-y-full h-14 w-full left-0 bg-gradient-to-b from-transparent to-white dark:to-black"></div>
        <div className="rounded-2xl px-5">
          {/* <h3 className="text-lg font-semibold mb-3">Estimated Yearly Savings Breakdown</h3> */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {CATEGORIES.map((cat) => (
              <BreakdownRow key={cat.key} label={cat.title} amount={categoryAnnuals[cat.key]} color={cat.color} />
            ))}
          </div> */}
          {/* <div className="mt-4 border-t pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Gross total</span>
              <span className="text-xl font-bold">{currency(total)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className=" ">Membership cost (annual)</span>
              <div className="flex items-center gap-2">
                <span className="">
                    $
                    {membershipCost}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Net savings</span>
              <span className="text-3xl font-bold text-green-400">{currency(netSavings)}</span>
            </div>
          </div> */}

          <div className="mt-6 w-full max-w-md mx-auto " onClick={resetAll}>
            <ButtonTertiary text={"Reset All"}   />
          </div>
        </div>

        <footer className="py-5 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Uchooseit.us — Savings are estimates; actual savings vary by offer and usage.
        </footer>
      </div>
    </div>
  );
}

// ---- Subcomponents ---------------------------------------------------------
interface CategoryGroupProps {
  category: CategoryConfig;
  annualUses: Record<SubKey, number>;
  setAnnualUses: React.Dispatch<React.SetStateAction<Record<SubKey, number>>>;
  annual: number;
  openDefault: boolean;
}

function CategoryGroup({ category, annualUses, setAnnualUses, annual, openDefault }: CategoryGroupProps) {
  const [open, setOpen] = useState<boolean>(openDefault);
  const { title, color, subs, icon } = category;

  return (
    <div className="rounded-2xl">
        <button 
            onClick={() => setOpen((s) => !s)} 
            className="group w-full flex items-center justify-between px-1 md:px-5 py-4 cursor-pointer rounded-t-xl transition-all duration-300 hover:-translate-y-1"
            style={{borderBottom: `solid 2px ${color}`}}
          >
            <div className="flex w-full items-center gap-3">
                {/* <span className="inline-block h-4 w-4 rounded-full" style={{ background: color }} /> */}
                <img src={icon} alt="category icon" className="size-7 md:size-10 transition-all duration-300 group-hover:scale-115" />
                <h2 className="text lg:text-xl font-semibold transition-all duration-300 group-hover:scale-105 group-hover:font-bold  " style={{ color }}>{title}</h2>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <p className="text lg:text-2xl text-left w-full pl-10" style={{color}}>
                {currency(annual)}
              </p>
              <picture className={`w-fit transition-transform duration-300 ${
                open ? "rotate-90" : "rotate-0"
                }`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" >
                  <path d="M9 6L15 12L9 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke={color}/>
                </svg>
              </picture>
            </div>
        </button>
        {/* <div className="rounded-b-lg px-3 py-2 text-sm text-black font-semibold" style={{ background: color }}>
            {currency(annual)}
        </div> */}

      {/* {open && ( */}
        <div className={`grid gap-4 overflow-hidden transition-all duration-500 ${open ? ' opacity-100 h-full' : ' opacity-0 -z-10 h-0'} `} >
          <div className=" p-5 pb-10">
            {subs.map((s) => (
              <SubRow
                key={s.key}
                label={s.label}
                color={color}
                annualUses={annualUses[s.key] || 0}
                onAnnualUses={(n) => setAnnualUses((prev) => ({ ...prev, [s.key]: n }))}
                typicalSaving={TYPICAL_SAVINGS[s.key]}
              />
            ))}
          </div>
        </div>
      {/* )} */}
    </div>
  );
}

interface SubRowProps {
  label: string;
  color: string;
  annualUses: number;
  onAnnualUses: (n: number) => void;
  typicalSaving: number;
}

function SubRow({ label, color, annualUses, onAnnualUses, typicalSaving }: SubRowProps){
  const annual = annualUses * typicalSaving;
  return (
    <div className="rounded-xl border p-4 ">
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
        <div className="font-medium">{currency(annual)}</div>
      </div>
    </div>
  );
}

// interface BreakdownRowProps {
//   label: string;
//   amount: number;
//   color: string;
// }

// function BreakdownRow({ label, amount, color }: BreakdownRowProps){
//   return (
//     <div className="flex items-center justify-between rounded-lg border p-3 ">
//       <div className="flex items-center gap-2">
//         <span className="inline-block h-3 w-3 rounded-full" style={{ background: color }} />
//         <span>{label}</span>
//       </div>
//       <span className="font-medium">{currency(amount)}</span>
//     </div>
//     );
// }