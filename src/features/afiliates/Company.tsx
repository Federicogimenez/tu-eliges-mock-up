import RevenueCalculator from "../../shared/components/RevenueCalculator";

export default function Company() {
  return (
    <main className="relative w-full h-full min-h-dvh pt-[25dvh]">
        <RevenueCalculator 
          buyer="Company" 
          default_followers={150000} 
          default_engagementPct={30} 
          default_maxDiscountPct={25}
          default_revPerMembershipAgency={15}
          />
    </main>
  )
}
