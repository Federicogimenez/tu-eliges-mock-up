import { createContext, useMemo, useState, type ReactNode } from "react";
import SavingsModal from "../shared/components/SavingsCalculator/SavingsModal";
import { useAllyContext } from "../hooks/useAllyContext";


import icon_dining from '/icons/category/dining.png'
import icon_travel from '/icons/category/travel.png'
import icon_shop from '/icons/category/shop.png'
import icon_entertainment from '/icons/category/entertainment.png'


// ---- Tipado del contexto ---------------------------------------------------
interface SavingsModalContextType {
  isOpen?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  netSavings: number;  
}

// ---- Contexto --------------------------------------------------------------
export const SavingsModalContext = createContext<SavingsModalContextType | undefined>(undefined);

// ---- Types -----------------------------------------------------------------
export type CatKey = "dining" | "shop" | "entertainment" | "travel";
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

export interface CategoryConfig {
  key: CatKey;
  title: string;
  color: string;
  icon: string;
  subs: { key: SubKey; label: string }[];
}

// ---- Constants --------------------------------------------------------------
const BRAND_COLORS: Record<CatKey | "travel" | "entertainment" | "dining" | "shop", string> = {
  travel: "#00b3eb",
  entertainment: "#e82c8d",
  dining: "#f5b800",
  shop: "#884cfc",
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
    key: "shop",
    title: "Shop",
    color: BRAND_COLORS.shop,
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

// ---- Provider --------------------------------------------------------------
export function SavingsModalProvider({ children }: { children: ReactNode }) {
  
  const { allyData } = useAllyContext();
  const [isOpen, setIsOpen] = useState(false);
//   const [savingsSlideIndex, setSavingsSlideIndex] = useState<number>(0);
//   const {pathname} = useLocation();

  const [annualUses, setAnnualUses] = useState<Record<SubKey, number>>(() => {
    const initial = Object.keys(TYPICAL_SAVINGS).reduce((acc, k) => {
      acc[k as SubKey] = 0;
      return acc;
    }, {} as Record<SubKey, number>);

    // Valores iniciales
    initial.Breakfast_Coffee = 52;
    initial.Lunch = 24;
    initial.Dinner = 52;
    initial.Pizza = 24;
    initial.Apparel = 8;
    initial.Self_Care = 6;
    initial.Flowers_Gifts = 4;
    initial.Home_Projects = 2;
    initial.Oil_Changes = 4;
    initial.Misc_Shopping = 8;
    initial.Cell_Phone_Plan = 1;
    initial.Theme_Park_Attraction = 4;
    initial.Bowling_Laser_MiniGolf = 4;
    initial.Concerts_Sports_Events = 4;
    initial.Movies = 6;
    initial.Golf = 4;
    initial.Hotel_Stays = 7;
    initial.Car_Rental = 5;
    initial.Flights = 5;

    return initial;
  });

  // Control del modal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);



    // Detecta la ruta y ajusta el slide inicial
//   useEffect(() => {
//     const foundIndex = CATEGORIES.findIndex((cat) => pathname.includes(cat.key));
//     if (foundIndex) {
//         setSavingsSlideIndex(foundIndex)
//     } else{
//         setSavingsSlideIndex(0)
//     }
//   }, [pathname]);

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
    const netSavings = Math.max(0, total - allyData.new_price_after_discount);
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
    <SavingsModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        netSavings
      }}
    >
      {children}
      <SavingsModal
        open={isOpen}
        onClose={closeModal}
        // slideIndex={savingsSlideIndex}
        membershipCost={allyData.new_price_after_discount}
        netSavings={netSavings}
        annualUses={annualUses}
        categoryAnnuals={categoryAnnuals}
        resetAll={resetAll}
        setAnnualUses={setAnnualUses} 
        categories={CATEGORIES}
        typicalSavings={TYPICAL_SAVINGS}
        />
    </SavingsModalContext.Provider>
  );
}