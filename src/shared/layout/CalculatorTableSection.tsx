import Savings from "../components/Savings";
// import SavingsTable from "../../../shared/components/SavingsTable";

interface CalculatorTableSectionProps{
    membershipCost: number;
}


export default function CalculatorTableSection({ membershipCost }: CalculatorTableSectionProps) {
  return (
    <section id="calculator" className="relative py-10 text-black dark:text-white h-full w-full ">
        <h2 className=' heading-1 text-center text-balance max-w-5xl mx-auto'>
          Transform Your Daily Spending Into Big Yearly Savings
        </h2>
        <p className="px-2 text-center subtitle text-gray-600 dark:text-gray-400 my-[3vh] xl:mb-2 max-w-[600px] mx-auto">
          Cover the cost in just a few uses—everything else is pure savings.
            {/* Redeem just one deal each month and you’ll roughly offset the annual membership cost — everything after that is pure savings. */}
        </p>
        <Savings membershipCost={membershipCost} />
        {/* <SavingsTable /> */}
    </section>
  )
}
