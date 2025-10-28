// import Savings from "../components/Savings";
// import SavingsTable from "../../../shared/components/SavingsTable";

import { useSavingsModal } from "../../hooks/useSavingsModal";
import { Currency } from "../../utils/Currency";

interface CalculatorTableSectionProps{
    membershipCost: number;
}


export default function CalculatorTableSection({ membershipCost }: CalculatorTableSectionProps) {
  const { openModal, netSavings } = useSavingsModal()
  
  return (
    <section id="calculator" className="relative py-10 bg-white dark:bg-black text-black dark:text-white h-full w-full ">
        <h2 className=' heading-1 text-center text-balance max-w-5xl mx-auto'>
          Transform Your Daily Spending Into Big Yearly Savings
        </h2>
        <p className="px-2 text-center subtitle text-gray-600 dark:text-gray-400 my-[3vh] xl:mb-2 max-w-[600px] mx-auto">
          Cover the cost in just a few uses—everything else is pure savings.
            {/* Redeem just one deal each month and you’ll roughly offset the annual membership cost — everything after that is pure savings. */}
        </p>

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

        <button
          onClick={openModal}
          className={`block w-11/12 mt-7 mx-auto font-semibold mb-6 text-center max-w-md px-4 py-2 cursor-pointer rounded-full bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white text-lg transition-all duration-300 hover:-translate-y-1`}
        >
            Calculate Savings
        </button>

        {/* <Savings membershipCost={membershipCost} /> */}
        {/* <SavingsTable /> */}
    </section>
  )
}
