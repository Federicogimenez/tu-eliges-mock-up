import Savings from "../../../shared/components/Savings";
// import SavingsTable from "../../../shared/components/SavingsTable";

interface CalculatorTableSectionProps{
    membershipCost: number;
}


export default function CalculatorTableSection({ membershipCost }: CalculatorTableSectionProps) {
  return (
    <section className="relative pt-[8dvh] text-black dark:text-white h-full min-h-dvh w-full mx-2">
        <h2 className=' font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center text-balance max-w-5xl mx-auto'>
          Turn Everyday Spending Into Yearly Savings
        </h2>
        <p className="px-2 text-center text-sm md:text-lg my-[3vh] xl:mb-2 max-w-[550px] mx-auto">
          Just a few redemptions a year offset the full cost of membership. After that, every deal means real money back.
            {/* Redeem just one deal each month and you’ll roughly offset the annual membership cost — everything after that is pure savings. */}
        </p>
        <Savings membershipCost={membershipCost} />
        {/* <SavingsTable /> */}
    </section>
  )
}
